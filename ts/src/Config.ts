
import { BaseFeature } from './feature/base/BaseFeature'
import { RatelimitFeature } from './feature/ratelimit/RatelimitFeature'
import { RetryFeature } from './feature/retry/RetryFeature'
import { TestFeature } from './feature/test/TestFeature'
import { TimeoutFeature } from './feature/timeout/TimeoutFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   ratelimit: RatelimitFeature,
 retry: RetryFeature,
 test: TestFeature,
 timeout: TimeoutFeature,

}


// Per-feature plugin DEFINITIONS (voxgig/plugin `Definition` values), from
// the model's active plugin groups. A feature that takes a `plugins` option
// (secrets over sekreto) reads its own entry; a feature with no plugins has
// none. Named imports above make each definition statically reachable, so
// an SDK carries exactly the plugin modules its model selects — the same
// leanness the old side-effect registry imports bought, without a registry.
const FEATURE_PLUGINS: Record<string, any[]> = {
  
}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'Bonequest',
        slug: "bonequest",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     ratelimit:     {
      "options": {
        "active": false,
        "burst": 5,
        "rate": 5
      },
      "optspec": {
        "now": "`$FUNCTION`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 retry:     {
      "options": {
        "active": false,
        "factor": 2,
        "maxDelay": 2000,
        "minDelay": 50,
        "retries": 2,
        "statuses": [
          408,
          425,
          429,
          500,
          502,
          503,
          504
        ]
      },
      "optspec": {
        "jitter": "`$BOOLEAN`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 test:     {
      "options": {
        "active": false
      },
      "optspec": {
        "entity": "`$MAP`",
        "net": "`$MAP`"
      },
      "strict": false,
      "transport": "base"
    },
 timeout:     {
      "options": {
        "active": false,
        "ms": 30000
      },
      "optspec": {
        "clearTimer": "`$FUNCTION`",
        "setTimer": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },

  }


  options = {
    base: "https://www.bonequest.com/api/v2",

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
      episode: {
      },

      quote: {
      },

      search: {
      },

    }
  }


  entity = {
    "episode": {
      "fields": [
        {
          "name": "episodes",
          "type": "`$ARRAY`"
        },
        {
          "name": "id",
          "type": "`$STRING`"
        },
        {
          "name": "meta",
          "short": "API metadata wrapper",
          "type": "`$OBJECT`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "episode",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "example": 1,
                    "kind": "param",
                    "name": "count",
                    "orig": "count",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/episodes/random/{count}",
              "segments": [
                {
                  "lit": "episodes"
                },
                {
                  "lit": "random"
                },
                {
                  "var": "count"
                }
              ],
              "select": {
                "exist": [
                  "count"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "episodes",
                "random",
                "{count}"
              ]
            },
            {
              "args": {
                "params": [
                  {
                    "example": 420,
                    "kind": "param",
                    "name": "id",
                    "orig": "episode_number",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/episode/{episodeNumber}",
              "rename": {
                "param": {
                  "episodeNumber": "id"
                }
              },
              "segments": [
                {
                  "lit": "episode"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "episode",
                "{id}"
              ]
            },
            {
              "args": {
                "params": [
                  {
                    "example": "666,667",
                    "kind": "param",
                    "name": "id",
                    "orig": "episode_number",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/episodes/{episodeNumbers}",
              "rename": {
                "param": {
                  "episodeNumbers": "id"
                }
              },
              "segments": [
                {
                  "lit": "episodes"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "episodes",
                "{id}"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "random"
          ]
        ]
      }
    },
    "quote": {
      "fields": [
        {
          "name": "day",
          "short": "Day of month published",
          "type": "`$INTEGER`"
        },
        {
          "name": "dialog",
          "short": "Array of arrays containing episode dialog, element 0 is typically player's name and element 1 is the dialog",
          "type": "`$ARRAY`"
        },
        {
          "name": "episode",
          "short": "Episode number",
          "type": "`$INTEGER`"
        },
        {
          "name": "hd",
          "short": "Optional array containing details about associated BoneQuest HD images",
          "type": "`$ARRAY`"
        },
        {
          "name": "height",
          "short": "Image height",
          "type": "`$INTEGER`"
        },
        {
          "name": "hifi",
          "short": "Optional details about an associated BoneQuest HiFi episode",
          "type": "`$OBJECT`"
        },
        {
          "name": "image",
          "short": "Partial URL to episode image",
          "type": "`$STRING`"
        },
        {
          "name": "month",
          "short": "Month published, number between 1-12",
          "type": "`$INTEGER`"
        },
        {
          "name": "navigation",
          "short": "Back and next keys contain fully-formed episode for surrounding episodes",
          "type": "`$OBJECT`"
        },
        {
          "name": "players",
          "short": "Array of player names",
          "type": "`$ARRAY`"
        },
        {
          "name": "tags",
          "short": "Array of tags applied",
          "type": "`$ARRAY`"
        },
        {
          "name": "thumb",
          "short": "Partial URL to thumbnail of episode image",
          "type": "`$STRING`"
        },
        {
          "name": "title",
          "short": "Episode title",
          "type": "`$STRING`"
        },
        {
          "name": "width",
          "short": "Image width",
          "type": "`$INTEGER`"
        },
        {
          "name": "year",
          "short": "Year published",
          "type": "`$INTEGER`"
        }
      ],
      "name": "quote",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {},
              "kind": "http",
              "method": "GET",
              "orig": "/quote/random",
              "segments": [
                {
                  "lit": "quote"
                },
                {
                  "lit": "random"
                }
              ],
              "select": {
                "$action": "random"
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.quote`"
              },
              "parts": [
                "quote",
                "random"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "search": {
      "fields": [
        {
          "name": "day",
          "short": "Day of month published",
          "type": "`$INTEGER`"
        },
        {
          "name": "dialog",
          "short": "Array of arrays containing episode dialog, element 0 is typically player's name and element 1 is the dialog",
          "type": "`$ARRAY`"
        },
        {
          "name": "episode",
          "short": "Episode number",
          "type": "`$INTEGER`"
        },
        {
          "name": "hd",
          "short": "Optional array containing details about associated BoneQuest HD images",
          "type": "`$ARRAY`"
        },
        {
          "name": "height",
          "short": "Image height",
          "type": "`$INTEGER`"
        },
        {
          "name": "hifi",
          "short": "Optional details about an associated BoneQuest HiFi episode",
          "type": "`$OBJECT`"
        },
        {
          "name": "image",
          "short": "Partial URL to episode image",
          "type": "`$STRING`"
        },
        {
          "name": "month",
          "short": "Month published, number between 1-12",
          "type": "`$INTEGER`"
        },
        {
          "name": "navigation",
          "short": "Back and next keys contain fully-formed episode for surrounding episodes",
          "type": "`$OBJECT`"
        },
        {
          "name": "players",
          "short": "Array of player names",
          "type": "`$ARRAY`"
        },
        {
          "name": "tags",
          "short": "Array of tags applied",
          "type": "`$ARRAY`"
        },
        {
          "name": "thumb",
          "short": "Partial URL to thumbnail of episode image",
          "type": "`$STRING`"
        },
        {
          "name": "title",
          "short": "Episode title",
          "type": "`$STRING`"
        },
        {
          "name": "width",
          "short": "Image width",
          "type": "`$INTEGER`"
        },
        {
          "name": "year",
          "short": "Year published",
          "type": "`$INTEGER`"
        }
      ],
      "name": "search",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "example": "\"what about nuts\"",
                    "kind": "query",
                    "name": "q",
                    "orig": "q",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/search/",
              "segments": [
                {
                  "lit": "search"
                }
              ],
              "select": {
                "exist": [
                  "q"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.search`"
              },
              "parts": [
                "search"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config,
  FEATURE_PLUGINS,
}

