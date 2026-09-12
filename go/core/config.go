package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "Bonequest",
			"slug": "bonequest",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"transport": "base",
			},
		},
		"options": map[string]any{
			"base": "https://www.bonequest.com/api/v2",
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"episode": map[string]any{},
				"quote": map[string]any{},
				"search": map[string]any{},
			},
		},
		"entity": map[string]any{
			"episode": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "episodes",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "meta",
						"short": "API metadata wrapper",
						"type": "`$OBJECT`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "episode",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": 1,
											"kind": "param",
											"name": "count",
											"orig": "count",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/episodes/random/{count}",
								"segments": []any{
									map[string]any{
										"lit": "episodes",
									},
									map[string]any{
										"lit": "random",
									},
									map[string]any{
										"var": "count",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"count",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"episodes",
									"random",
									"{count}",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": 420,
											"kind": "param",
											"name": "id",
											"orig": "episode_number",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/episode/{episodeNumber}",
								"rename": map[string]any{
									"param": map[string]any{
										"episodeNumber": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "episode",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"episode",
									"{id}",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "666,667",
											"kind": "param",
											"name": "id",
											"orig": "episode_number",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/episodes/{episodeNumbers}",
								"rename": map[string]any{
									"param": map[string]any{
										"episodeNumbers": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "episodes",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"episodes",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"random",
						},
					},
				},
			},
			"quote": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "day",
						"short": "Day of month published",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "dialog",
						"short": "Array of arrays containing episode dialog, element 0 is typically player's name and element 1 is the dialog",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "episode",
						"short": "Episode number",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "hd",
						"short": "Optional array containing details about associated BoneQuest HD images",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "height",
						"short": "Image height",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "hifi",
						"short": "Optional details about an associated BoneQuest HiFi episode",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "image",
						"short": "Partial URL to episode image",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "month",
						"short": "Month published, number between 1-12",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "navigation",
						"short": "Back and next keys contain fully-formed episode for surrounding episodes",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "players",
						"short": "Array of player names",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "tags",
						"short": "Array of tags applied",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "thumb",
						"short": "Partial URL to thumbnail of episode image",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "title",
						"short": "Episode title",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "width",
						"short": "Image width",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "year",
						"short": "Year published",
						"type": "`$INTEGER`",
					},
				},
				"name": "quote",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/quote/random",
								"segments": []any{
									map[string]any{
										"lit": "quote",
									},
									map[string]any{
										"lit": "random",
									},
								},
								"select": map[string]any{
									"$action": "random",
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.quote`",
								},
								"parts": []any{
									"quote",
									"random",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"search": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "day",
						"short": "Day of month published",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "dialog",
						"short": "Array of arrays containing episode dialog, element 0 is typically player's name and element 1 is the dialog",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "episode",
						"short": "Episode number",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "hd",
						"short": "Optional array containing details about associated BoneQuest HD images",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "height",
						"short": "Image height",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "hifi",
						"short": "Optional details about an associated BoneQuest HiFi episode",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "image",
						"short": "Partial URL to episode image",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "month",
						"short": "Month published, number between 1-12",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "navigation",
						"short": "Back and next keys contain fully-formed episode for surrounding episodes",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "players",
						"short": "Array of player names",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "tags",
						"short": "Array of tags applied",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "thumb",
						"short": "Partial URL to thumbnail of episode image",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "title",
						"short": "Episode title",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "width",
						"short": "Image width",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "year",
						"short": "Year published",
						"type": "`$INTEGER`",
					},
				},
				"name": "search",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": "\"what about nuts\"",
											"kind": "query",
											"name": "q",
											"orig": "q",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/search/",
								"segments": []any{
									map[string]any{
										"lit": "search",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"q",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.search`",
								},
								"parts": []any{
									"search",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

// The plugin definitions the model selected per feature, as []any so a
// feature package can consume them without core naming its types. Empty
// when no active feature declares active plugin groups for this target.
var featurePlugins = map[string][]any{
}

// FeaturePlugins is the definitions list for one feature's chain.
func FeaturePlugins(name string) []any {
	return featurePlugins[name]
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
