
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }


  main = {
    name: 'ProjectName',
  }


  feature = {
     test:     {
      "options": {
        "active": false
      }
    }

  }


  options = {
    base: 'https://www.bonequest.com/api/v2',

    auth: {
      prefix: 'Bearer',
    },

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
          "name": "episode",
          "req": false,
          "type": "`$ARRAY`",
          "active": true,
          "index$": 0
        },
        {
          "name": "meta",
          "req": false,
          "type": "`$OBJECT`",
          "active": true,
          "index$": 1
        }
      ],
      "name": "episode",
      "op": {
        "load": {
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
                    "type": "`$INTEGER`",
                    "active": true
                  }
                ]
              },
              "method": "GET",
              "orig": "/episodes/random/{count}",
              "parts": [
                "episodes",
                "random",
                "{count}"
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
              "active": true,
              "index$": 0
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
                    "type": "`$INTEGER`",
                    "active": true
                  }
                ]
              },
              "method": "GET",
              "orig": "/episode/{episodeNumber}",
              "parts": [
                "episode",
                "{id}"
              ],
              "rename": {
                "param": {
                  "episodeNumber": "id"
                }
              },
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "active": true,
              "index$": 1
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
                    "type": "`$STRING`",
                    "active": true
                  }
                ]
              },
              "method": "GET",
              "orig": "/episodes/{episodeNumbers}",
              "parts": [
                "episodes",
                "{id}"
              ],
              "rename": {
                "param": {
                  "episodeNumbers": "id"
                }
              },
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "active": true,
              "index$": 2
            }
          ],
          "input": "data",
          "key$": "load"
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
          "req": false,
          "type": "`$INTEGER`",
          "active": true,
          "index$": 0
        },
        {
          "name": "dialog",
          "req": false,
          "type": "`$ARRAY`",
          "active": true,
          "index$": 1
        },
        {
          "name": "episode",
          "req": false,
          "type": "`$INTEGER`",
          "active": true,
          "index$": 2
        },
        {
          "name": "hd",
          "req": false,
          "type": "`$ARRAY`",
          "active": true,
          "index$": 3
        },
        {
          "name": "height",
          "req": false,
          "type": "`$INTEGER`",
          "active": true,
          "index$": 4
        },
        {
          "name": "hifi",
          "req": false,
          "type": "`$OBJECT`",
          "active": true,
          "index$": 5
        },
        {
          "name": "image",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 6
        },
        {
          "name": "month",
          "req": false,
          "type": "`$INTEGER`",
          "active": true,
          "index$": 7
        },
        {
          "name": "navigation",
          "req": false,
          "type": "`$OBJECT`",
          "active": true,
          "index$": 8
        },
        {
          "name": "player",
          "req": false,
          "type": "`$ARRAY`",
          "active": true,
          "index$": 9
        },
        {
          "name": "tag",
          "req": false,
          "type": "`$ARRAY`",
          "active": true,
          "index$": 10
        },
        {
          "name": "thumb",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 11
        },
        {
          "name": "title",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 12
        },
        {
          "name": "width",
          "req": false,
          "type": "`$INTEGER`",
          "active": true,
          "index$": 13
        },
        {
          "name": "year",
          "req": false,
          "type": "`$INTEGER`",
          "active": true,
          "index$": 14
        }
      ],
      "name": "quote",
      "op": {
        "list": {
          "name": "list",
          "points": [
            {
              "method": "GET",
              "orig": "/quote/random",
              "parts": [
                "quote",
                "random"
              ],
              "select": {
                "$action": "random"
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "active": true,
              "args": {},
              "index$": 0
            }
          ],
          "input": "data",
          "key$": "list"
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
          "req": false,
          "type": "`$INTEGER`",
          "active": true,
          "index$": 0
        },
        {
          "name": "dialog",
          "req": false,
          "type": "`$ARRAY`",
          "active": true,
          "index$": 1
        },
        {
          "name": "episode",
          "req": false,
          "type": "`$INTEGER`",
          "active": true,
          "index$": 2
        },
        {
          "name": "hd",
          "req": false,
          "type": "`$ARRAY`",
          "active": true,
          "index$": 3
        },
        {
          "name": "height",
          "req": false,
          "type": "`$INTEGER`",
          "active": true,
          "index$": 4
        },
        {
          "name": "hifi",
          "req": false,
          "type": "`$OBJECT`",
          "active": true,
          "index$": 5
        },
        {
          "name": "image",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 6
        },
        {
          "name": "month",
          "req": false,
          "type": "`$INTEGER`",
          "active": true,
          "index$": 7
        },
        {
          "name": "navigation",
          "req": false,
          "type": "`$OBJECT`",
          "active": true,
          "index$": 8
        },
        {
          "name": "player",
          "req": false,
          "type": "`$ARRAY`",
          "active": true,
          "index$": 9
        },
        {
          "name": "tag",
          "req": false,
          "type": "`$ARRAY`",
          "active": true,
          "index$": 10
        },
        {
          "name": "thumb",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 11
        },
        {
          "name": "title",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 12
        },
        {
          "name": "width",
          "req": false,
          "type": "`$INTEGER`",
          "active": true,
          "index$": 13
        },
        {
          "name": "year",
          "req": false,
          "type": "`$INTEGER`",
          "active": true,
          "index$": 14
        }
      ],
      "name": "search",
      "op": {
        "list": {
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
                    "type": "`$STRING`",
                    "active": true
                  }
                ]
              },
              "method": "GET",
              "orig": "/search/",
              "parts": [
                "search"
              ],
              "select": {
                "exist": [
                  "q"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "active": true,
              "index$": 0
            }
          ],
          "input": "data",
          "key$": "list"
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
  config
}

