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
								"parts": []any{
									"episodes",
									"random",
									"{count}",
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
								"parts": []any{
									"episode",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"episodeNumber": "id",
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
								"parts": []any{
									"episodes",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"episodeNumbers": "id",
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
								"parts": []any{
									"quote",
									"random",
								},
								"select": map[string]any{
									"$action": "random",
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.quote`",
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
								"parts": []any{
									"search",
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
