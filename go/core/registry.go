package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewRatelimitFeatureFunc func() Feature

var NewRetryFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewTimeoutFeatureFunc func() Feature

var NewEpisodeEntityFunc func(client *BonequestSDK, entopts map[string]any) BonequestEntity

var NewQuoteEntityFunc func(client *BonequestSDK, entopts map[string]any) BonequestEntity

var NewSearchEntityFunc func(client *BonequestSDK, entopts map[string]any) BonequestEntity

