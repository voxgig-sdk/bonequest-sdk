# Bonequest SDK configuration


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "Bonequest",
            "slug": "bonequest",
            "version": "0.0.1",
            "target": "py",
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
            "name": "episodes",
            "type": "`$ARRAY`",
          },
          {
            "name": "meta",
            "short": "API metadata wrapper",
            "type": "`$OBJECT`",
          },
        ],
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
                      "reqd": True,
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "kind": "http",
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
                    },
                  ],
                },
                "kind": "http",
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
                    },
                  ],
                },
                "kind": "http",
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
              },
            ],
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
            "short": "Day of month published",
            "type": "`$INTEGER`",
          },
          {
            "name": "dialog",
            "short": "Array of arrays containing episode dialog, element 0 is typically player's name and element 1 is the dialog",
            "type": "`$ARRAY`",
          },
          {
            "name": "episode",
            "short": "Episode number",
            "type": "`$INTEGER`",
          },
          {
            "name": "hd",
            "short": "Optional array containing details about associated BoneQuest HD images",
            "type": "`$ARRAY`",
          },
          {
            "name": "height",
            "short": "Image height",
            "type": "`$INTEGER`",
          },
          {
            "name": "hifi",
            "short": "Optional details about an associated BoneQuest HiFi episode",
            "type": "`$OBJECT`",
          },
          {
            "name": "image",
            "short": "Partial URL to episode image",
            "type": "`$STRING`",
          },
          {
            "name": "month",
            "short": "Month published, number between 1-12",
            "type": "`$INTEGER`",
          },
          {
            "name": "navigation",
            "short": "Back and next keys contain fully-formed episode for surrounding episodes",
            "type": "`$OBJECT`",
          },
          {
            "name": "players",
            "short": "Array of player names",
            "type": "`$ARRAY`",
          },
          {
            "name": "tags",
            "short": "Array of tags applied",
            "type": "`$ARRAY`",
          },
          {
            "name": "thumb",
            "short": "Partial URL to thumbnail of episode image",
            "type": "`$STRING`",
          },
          {
            "name": "title",
            "short": "Episode title",
            "type": "`$STRING`",
          },
          {
            "name": "width",
            "short": "Image width",
            "type": "`$INTEGER`",
          },
          {
            "name": "year",
            "short": "Year published",
            "type": "`$INTEGER`",
          },
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
                "parts": [
                  "quote",
                  "random",
                ],
                "select": {
                  "$action": "random",
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.quote`",
                },
              },
            ],
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
            "short": "Day of month published",
            "type": "`$INTEGER`",
          },
          {
            "name": "dialog",
            "short": "Array of arrays containing episode dialog, element 0 is typically player's name and element 1 is the dialog",
            "type": "`$ARRAY`",
          },
          {
            "name": "episode",
            "short": "Episode number",
            "type": "`$INTEGER`",
          },
          {
            "name": "hd",
            "short": "Optional array containing details about associated BoneQuest HD images",
            "type": "`$ARRAY`",
          },
          {
            "name": "height",
            "short": "Image height",
            "type": "`$INTEGER`",
          },
          {
            "name": "hifi",
            "short": "Optional details about an associated BoneQuest HiFi episode",
            "type": "`$OBJECT`",
          },
          {
            "name": "image",
            "short": "Partial URL to episode image",
            "type": "`$STRING`",
          },
          {
            "name": "month",
            "short": "Month published, number between 1-12",
            "type": "`$INTEGER`",
          },
          {
            "name": "navigation",
            "short": "Back and next keys contain fully-formed episode for surrounding episodes",
            "type": "`$OBJECT`",
          },
          {
            "name": "players",
            "short": "Array of player names",
            "type": "`$ARRAY`",
          },
          {
            "name": "tags",
            "short": "Array of tags applied",
            "type": "`$ARRAY`",
          },
          {
            "name": "thumb",
            "short": "Partial URL to thumbnail of episode image",
            "type": "`$STRING`",
          },
          {
            "name": "title",
            "short": "Episode title",
            "type": "`$STRING`",
          },
          {
            "name": "width",
            "short": "Image width",
            "type": "`$INTEGER`",
          },
          {
            "name": "year",
            "short": "Year published",
            "type": "`$INTEGER`",
          },
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
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
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
                  "res": "`body.search`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
