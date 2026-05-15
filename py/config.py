# Bonequest SDK configuration


def make_config():
    return {
        "main": {
            "name": "Bonequest",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
      },
        },
        "options": {
            "base": "https://www.bonequest.com/api/v2",
            "auth": {
                "prefix": "Bearer",
            },
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "episode": {},
                "quote": {},
                "search": {},
            },
        },
        "entity": {
      "episode": {
        "fields": [
          {
            "name": "episode",
            "req": False,
            "type": "`$ARRAY`",
            "active": True,
            "index$": 0,
          },
          {
            "name": "meta",
            "req": False,
            "type": "`$OBJECT`",
            "active": True,
            "index$": 1,
          },
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
                      "reqd": True,
                      "type": "`$INTEGER`",
                      "active": True,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/episodes/random/{count}",
                "parts": [
                  "episodes",
                  "random",
                  "{count}",
                ],
                "select": {
                  "exist": [
                    "count",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "index$": 0,
              },
              {
                "args": {
                  "params": [
                    {
                      "example": 420,
                      "kind": "param",
                      "name": "id",
                      "orig": "episode_number",
                      "reqd": True,
                      "type": "`$INTEGER`",
                      "active": True,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/episode/{episodeNumber}",
                "parts": [
                  "episode",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "episodeNumber": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "index$": 1,
              },
              {
                "args": {
                  "params": [
                    {
                      "example": "666,667",
                      "kind": "param",
                      "name": "id",
                      "orig": "episode_number",
                      "reqd": True,
                      "type": "`$STRING`",
                      "active": True,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/episodes/{episodeNumbers}",
                "parts": [
                  "episodes",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "episodeNumbers": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "index$": 2,
              },
            ],
            "input": "data",
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [
            [
              "random",
            ],
          ],
        },
      },
      "quote": {
        "fields": [
          {
            "name": "day",
            "req": False,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 0,
          },
          {
            "name": "dialog",
            "req": False,
            "type": "`$ARRAY`",
            "active": True,
            "index$": 1,
          },
          {
            "name": "episode",
            "req": False,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 2,
          },
          {
            "name": "hd",
            "req": False,
            "type": "`$ARRAY`",
            "active": True,
            "index$": 3,
          },
          {
            "name": "height",
            "req": False,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 4,
          },
          {
            "name": "hifi",
            "req": False,
            "type": "`$OBJECT`",
            "active": True,
            "index$": 5,
          },
          {
            "name": "image",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 6,
          },
          {
            "name": "month",
            "req": False,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 7,
          },
          {
            "name": "navigation",
            "req": False,
            "type": "`$OBJECT`",
            "active": True,
            "index$": 8,
          },
          {
            "name": "player",
            "req": False,
            "type": "`$ARRAY`",
            "active": True,
            "index$": 9,
          },
          {
            "name": "tag",
            "req": False,
            "type": "`$ARRAY`",
            "active": True,
            "index$": 10,
          },
          {
            "name": "thumb",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 11,
          },
          {
            "name": "title",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 12,
          },
          {
            "name": "width",
            "req": False,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 13,
          },
          {
            "name": "year",
            "req": False,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 14,
          },
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
                  "random",
                ],
                "select": {
                  "$action": "random",
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "args": {},
                "index$": 0,
              },
            ],
            "input": "data",
            "key$": "list",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "search": {
        "fields": [
          {
            "name": "day",
            "req": False,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 0,
          },
          {
            "name": "dialog",
            "req": False,
            "type": "`$ARRAY`",
            "active": True,
            "index$": 1,
          },
          {
            "name": "episode",
            "req": False,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 2,
          },
          {
            "name": "hd",
            "req": False,
            "type": "`$ARRAY`",
            "active": True,
            "index$": 3,
          },
          {
            "name": "height",
            "req": False,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 4,
          },
          {
            "name": "hifi",
            "req": False,
            "type": "`$OBJECT`",
            "active": True,
            "index$": 5,
          },
          {
            "name": "image",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 6,
          },
          {
            "name": "month",
            "req": False,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 7,
          },
          {
            "name": "navigation",
            "req": False,
            "type": "`$OBJECT`",
            "active": True,
            "index$": 8,
          },
          {
            "name": "player",
            "req": False,
            "type": "`$ARRAY`",
            "active": True,
            "index$": 9,
          },
          {
            "name": "tag",
            "req": False,
            "type": "`$ARRAY`",
            "active": True,
            "index$": 10,
          },
          {
            "name": "thumb",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 11,
          },
          {
            "name": "title",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 12,
          },
          {
            "name": "width",
            "req": False,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 13,
          },
          {
            "name": "year",
            "req": False,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 14,
          },
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
                      "reqd": True,
                      "type": "`$STRING`",
                      "active": True,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/search/",
                "parts": [
                  "search",
                ],
                "select": {
                  "exist": [
                    "q",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "index$": 0,
              },
            ],
            "input": "data",
            "key$": "list",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
