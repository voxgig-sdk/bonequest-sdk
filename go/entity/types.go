// Typed models for the Bonequest SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import (
	"encoding/json"

	"github.com/voxgig-sdk/bonequest-sdk/go/core"
)

// Episode is the typed data model for the episode entity.
type Episode struct {
	Episodes *[]any `json:"episodes,omitempty"`
	Id *string `json:"id,omitempty"`
	Meta *map[string]any `json:"meta,omitempty"`
}

// EpisodeLoadMatch is the typed request payload for Episode.LoadTyped.
type EpisodeLoadMatch struct {
	Id int `json:"id"`
}

// Quote is the typed data model for the quote entity.
type Quote struct {
	Day *int `json:"day,omitempty"`
	Dialog *[]any `json:"dialog,omitempty"`
	Episode *int `json:"episode,omitempty"`
	Hd *[]any `json:"hd,omitempty"`
	Height *int `json:"height,omitempty"`
	Hifi *map[string]any `json:"hifi,omitempty"`
	Image *string `json:"image,omitempty"`
	Month *int `json:"month,omitempty"`
	Navigation *map[string]any `json:"navigation,omitempty"`
	Players *[]any `json:"players,omitempty"`
	Tags *[]any `json:"tags,omitempty"`
	Thumb *string `json:"thumb,omitempty"`
	Title *string `json:"title,omitempty"`
	Width *int `json:"width,omitempty"`
	Year *int `json:"year,omitempty"`
}

// QuoteListMatch is the typed request payload for Quote.ListTyped.
type QuoteListMatch struct {
	Day *int `json:"day,omitempty"`
	Dialog *[]any `json:"dialog,omitempty"`
	Episode *int `json:"episode,omitempty"`
	Hd *[]any `json:"hd,omitempty"`
	Height *int `json:"height,omitempty"`
	Hifi *map[string]any `json:"hifi,omitempty"`
	Image *string `json:"image,omitempty"`
	Month *int `json:"month,omitempty"`
	Navigation *map[string]any `json:"navigation,omitempty"`
	Players *[]any `json:"players,omitempty"`
	Tags *[]any `json:"tags,omitempty"`
	Thumb *string `json:"thumb,omitempty"`
	Title *string `json:"title,omitempty"`
	Width *int `json:"width,omitempty"`
	Year *int `json:"year,omitempty"`
}

// Search is the typed data model for the search entity.
type Search struct {
	Day *int `json:"day,omitempty"`
	Dialog *[]any `json:"dialog,omitempty"`
	Episode *int `json:"episode,omitempty"`
	Hd *[]any `json:"hd,omitempty"`
	Height *int `json:"height,omitempty"`
	Hifi *map[string]any `json:"hifi,omitempty"`
	Image *string `json:"image,omitempty"`
	Month *int `json:"month,omitempty"`
	Navigation *map[string]any `json:"navigation,omitempty"`
	Players *[]any `json:"players,omitempty"`
	Tags *[]any `json:"tags,omitempty"`
	Thumb *string `json:"thumb,omitempty"`
	Title *string `json:"title,omitempty"`
	Width *int `json:"width,omitempty"`
	Year *int `json:"year,omitempty"`
}

// SearchListMatch is the typed request payload for Search.ListTyped.
type SearchListMatch struct {
	Q string `json:"q"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// entityData unwraps an entity to its data map.
//
// Operations resolve to the ENTITY, not the raw data (see AGENTS.md), and an
// entity's fields are UNEXPORTED — marshalling one directly yields `{}`, so
// every typed accessor would silently hand back a zero-valued struct. The
// typed boundary therefore takes the data hop first.
func entityData(v any) any {
	if ent, ok := v.(core.Entity); ok {
		return ent.Data()
	}
	return v
}

// typedFrom decodes a runtime value (an entity, or the map[string]any the op
// pipeline produced) into a typed model T via a JSON round-trip. On any error
// it returns the zero value of T; the op's own (value, error) tuple carries
// the real error.
func typedFrom[T any](v any) T {
	var out T
	v = entityData(v)
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value into a typed slice []T via a
// JSON round-trip, for list ops. `list` resolves to a slice of ENTITY
// instances, so each element takes the data hop.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	if list, ok := v.([]any); ok {
		unwrapped := make([]any, 0, len(list))
		for _, item := range list {
			unwrapped = append(unwrapped, entityData(item))
		}
		v = unwrapped
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
