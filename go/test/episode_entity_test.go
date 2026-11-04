package sdktest

import (
	"encoding/json"
	"os"
	"path/filepath"
	"runtime"
	"strings"
	"testing"
	"time"

	sdk "github.com/voxgig-sdk/bonequest-sdk/go"
	"github.com/voxgig-sdk/bonequest-sdk/go/core"

	vs "github.com/voxgig-sdk/bonequest-sdk/go/utility/struct"
)

// main.kit.test.live.strict is true (the default is true): a live
// request that fails, or a live test missing an input it needs,
// fails the test.
// An account with no record for a test to read skips it either way.
const episodeEntityLiveStrict = true


func TestEpisodeEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.Episode(nil)
		if ent == nil {
			t.Fatal("expected non-nil EpisodeEntity")
		}
	})

	t.Run("validate", func(t *testing.T) {
		if !fhHasFeature("validate") {
			t.Skip("feature not present in this SDK: validate")
		}
		client := sdk.TestSDK(nil, map[string]any{
			"feature": map[string]any{"validate": map[string]any{"active": true}},
		})
		_, err := client.Episode(nil).List(map[string]any{"episode_number": "x"}, nil)
		if sdkerr, ok := err.(*core.BonequestError); !ok || "validate_failed" != sdkerr.Code {
			t.Fatalf("expected validate_failed, got %v", err)
		}
	})

	t.Run("basic", func(tt *testing.T) {
		var t testing.TB = tt
		setup := episodeBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"list"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "episode." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		client := setup.client
		_ = client

		// Bootstrap entity data from existing test data (no create step in flow).
		episodeRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath(setup.data, "existing.episode")))
		var episodeRef01Data map[string]any
		if len(episodeRef01DataRaw) > 0 {
			episodeRef01Data = core.ToMapAny(episodeRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = episodeRef01Data

		if setup.live {
			livePace()
		}
		// LIST
		episodeRef01Ent := client.Episode(nil)
		episodeRef01Match := map[string]any{
			"episode_number": setup.idmap["episode_number01"],
		}
		if setup.live {
			episodeRef01Match["count"] = 1
			if setup.syntheticOnly || setup.idmap["episode_number01"] == nil {
				delete(episodeRef01Match, "episode_number")
			}
		}

		episodeRef01ListResult, err := episodeRef01Ent.List(episodeRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		_, episodeRef01ListOk := episodeRef01ListResult.([]any)
		if !episodeRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", episodeRef01ListResult)
		}

	})
}

func episodeBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "episode", "EpisodeTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read episode test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse episode test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"episode01", "episode02", "episode03", "episode_number01"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Whether *_ENTID supplied the idmap, read before envOverride consumes it:
	// without it, the ids a live flow binds are the fixture's synthetic ones.
	entidEnvRaw := os.Getenv("BONEQUEST_TEST_EPISODE_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"BONEQUEST_TEST_EPISODE_ENTID": idmap,
		"BONEQUEST_TEST_LIVE":      "FALSE",
		"BONEQUEST_TEST_EXPLAIN":   "FALSE",
	})

	idmapResolved := core.ToMapAny(env["BONEQUEST_TEST_EPISODE_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}

	if env["BONEQUEST_TEST_LIVE"] == "TRUE" {
		// An empty map, not a nil one: Merge returns nil when its last entry
		// is nil, and BasicSetup is normally called with no extras - so a
		// bare nil silently discarded the apikey and server values below.
		extraOpts := extra
		if extraOpts == nil {
			extraOpts = map[string]any{}
		}

		mergedOpts := vs.Merge([]any{
			// liveClientOptions() FIRST, so the generated fields below win:
			// sdk-test-control.json's test.client.options adds to the live
			// client, it does not redirect it.
			liveClientOptions(),
			map[string]any{
			},
			extraOpts,
		})
		client = sdk.NewBonequestSDK(core.ToMapAny(mergedOpts))
	}

	live := env["BONEQUEST_TEST_LIVE"] == "TRUE"
	return &entityTestSetup{
		client:        client,
		data:          entityData,
		idmap:         idmapResolved,
		env:           env,
		explain:       env["BONEQUEST_TEST_EXPLAIN"] == "TRUE",
		live:          live,
		syntheticOnly: live && !idmapOverridden,
		now:           time.Now().UnixMilli(),
	}
}
