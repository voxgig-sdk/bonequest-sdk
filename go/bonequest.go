package voxgigbonequestsdk

import (
	"github.com/voxgig-sdk/bonequest-sdk/go/core"
	"github.com/voxgig-sdk/bonequest-sdk/go/entity"
	"github.com/voxgig-sdk/bonequest-sdk/go/feature"
	_ "github.com/voxgig-sdk/bonequest-sdk/go/utility"
)

// Type aliases preserve external API.
type BonequestSDK = core.BonequestSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type BonequestEntity = core.BonequestEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type BonequestError = core.BonequestError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewEpisodeEntityFunc = func(client *core.BonequestSDK, entopts map[string]any) core.BonequestEntity {
		return entity.NewEpisodeEntity(client, entopts)
	}
	core.NewQuoteEntityFunc = func(client *core.BonequestSDK, entopts map[string]any) core.BonequestEntity {
		return entity.NewQuoteEntity(client, entopts)
	}
	core.NewSearchEntityFunc = func(client *core.BonequestSDK, entopts map[string]any) core.BonequestEntity {
		return entity.NewSearchEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewBonequestSDK = core.NewBonequestSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var SharedConfig = core.SharedConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewBonequestSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *BonequestSDK  { return NewBonequestSDK(nil) }
func Test() *BonequestSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
