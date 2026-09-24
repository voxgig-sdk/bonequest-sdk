# Bonequest SDK configuration

module BonequestConfig
  # Return the process-wide config, built once on first use. The SDK reads
  # the config on every request and never writes to it, so one instance is
  # shared by every client rather than rebuilt per client.
  #
  # The returned hash is shared: treat it as read-only. Callers that need to
  # mutate should use make_config, which always returns a fresh copy.
  def self.shared_config
    @shared_config ||= make_config
  end


  # Build a fresh, fully materialised config hash. Every call rebuilds the
  # whole structure, so prefer shared_config unless you need a private copy
  # you intend to mutate.
  def self.make_config
    {
      "main" => {
        "name" => "Bonequest",
        "slug" => "bonequest",
        "version" => "0.0.1",
        "target" => "rb",
      },
      "feature" => {
        "ratelimit" => {
          "options" => {
            "active" => false,
            "burst" => 5,
            "rate" => 5,
          },
          "optspec" => {
            "now" => "`$FUNCTION`",
            "sleep" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
        "retry" => {
          "options" => {
            "active" => false,
            "factor" => 2,
            "maxDelay" => 2000,
            "minDelay" => 50,
            "retries" => 2,
            "statuses" => [
              408,
              425,
              429,
              500,
              502,
              503,
              504,
            ],
          },
          "optspec" => {
            "jitter" => "`$BOOLEAN`",
            "sleep" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
        "test" => {
          "options" => {
            "active" => false,
          },
          "optspec" => {
            "entity" => "`$MAP`",
            "net" => "`$MAP`",
          },
          "strict" => false,
          "transport" => "base",
        },
        "timeout" => {
          "options" => {
            "active" => false,
            "ms" => 30000,
          },
          "optspec" => {
            "clearTimer" => "`$FUNCTION`",
            "setTimer" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
      },
      "options" => {
        "base" => "https://www.bonequest.com/api/v2",
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "episode" => {},
          "quote" => {},
          "search" => {},
        },
      },
      "entity" => {
        "episode" => {
          "fields" => [
            {
              "name" => "episodes",
              "title" => "Episodes",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "id",
              "title" => "Id",
              "type" => "`$STRING`",
            },
            {
              "name" => "meta",
              "title" => "Meta",
              "type" => "`$OBJECT`",
              "short" => "API metadata wrapper",
            },
          ],
          "id" => {
            "field" => "id",
            "name" => "id",
          },
          "name" => "episode",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/episodes/random/{count}",
                  "segments" => [
                    {
                      "lit" => "episodes",
                    },
                    {
                      "lit" => "random",
                    },
                    {
                      "var" => "count",
                    },
                  ],
                  "parts" => [
                    "episodes",
                    "random",
                    "{count}",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "count",
                        "orig" => "count",
                        "type" => "`$INTEGER`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => 1,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "count",
                    ],
                  },
                },
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/episode/{episodeNumber}",
                  "segments" => [
                    {
                      "lit" => "episode",
                    },
                    {
                      "var" => "id",
                    },
                  ],
                  "parts" => [
                    "episode",
                    "{id}",
                  ],
                  "rename" => {
                    "param" => {
                      "episodeNumber" => "id",
                    },
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "id",
                        "orig" => "episode_number",
                        "type" => "`$INTEGER`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => 420,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "id",
                    ],
                  },
                },
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/episodes/{episodeNumbers}",
                  "segments" => [
                    {
                      "lit" => "episodes",
                    },
                    {
                      "var" => "id",
                    },
                  ],
                  "parts" => [
                    "episodes",
                    "{id}",
                  ],
                  "rename" => {
                    "param" => {
                      "episodeNumbers" => "id",
                    },
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "id",
                        "orig" => "episode_number",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => "666,667",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "id",
                    ],
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "quote" => {
          "fields" => [],
          "name" => "quote",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/quote/random",
                  "segments" => [
                    {
                      "lit" => "quote",
                    },
                    {
                      "lit" => "random",
                    },
                  ],
                  "parts" => [
                    "quote",
                    "random",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.quote`",
                  },
                  "args" => {},
                  "select" => {
                    "$action" => "random",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "search" => {
          "fields" => [
            {
              "name" => "day",
              "title" => "Day",
              "type" => "`$INTEGER`",
              "short" => "Day of month published",
            },
            {
              "name" => "dialog",
              "title" => "Dialog",
              "type" => "`$ARRAY`",
              "short" => "Array of arrays containing episode dialog, element 0 is typically player's name and element 1 is the dialog",
            },
            {
              "name" => "episode",
              "title" => "Episode",
              "type" => "`$INTEGER`",
              "short" => "Episode number",
            },
            {
              "name" => "hd",
              "title" => "Hd",
              "type" => "`$ARRAY`",
              "short" => "Optional array containing details about associated BoneQuest HD images",
            },
            {
              "name" => "height",
              "title" => "Height",
              "type" => "`$INTEGER`",
              "short" => "Image height",
            },
            {
              "name" => "hifi",
              "title" => "Hifi",
              "type" => "`$OBJECT`",
              "short" => "Optional details about an associated BoneQuest HiFi episode",
            },
            {
              "name" => "image",
              "title" => "Image",
              "type" => "`$STRING`",
              "short" => "Partial URL to episode image",
            },
            {
              "name" => "month",
              "title" => "Month",
              "type" => "`$INTEGER`",
              "short" => "Month published, number between 1-12",
            },
            {
              "name" => "navigation",
              "title" => "Navigation",
              "type" => "`$OBJECT`",
              "short" => "Back and next keys contain fully-formed episode for surrounding episodes",
            },
            {
              "name" => "players",
              "title" => "Players",
              "type" => "`$ARRAY`",
              "short" => "Array of player names",
            },
            {
              "name" => "tags",
              "title" => "Tags",
              "type" => "`$ARRAY`",
              "short" => "Array of tags applied",
            },
            {
              "name" => "thumb",
              "title" => "Thumb",
              "type" => "`$STRING`",
              "short" => "Partial URL to thumbnail of episode image",
            },
            {
              "name" => "title",
              "title" => "Title",
              "type" => "`$STRING`",
              "short" => "Episode title",
            },
            {
              "name" => "width",
              "title" => "Width",
              "type" => "`$INTEGER`",
              "short" => "Image width",
            },
            {
              "name" => "year",
              "title" => "Year",
              "type" => "`$INTEGER`",
              "short" => "Year published",
            },
          ],
          "name" => "search",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/search/",
                  "segments" => [
                    {
                      "lit" => "search",
                    },
                  ],
                  "parts" => [
                    "search",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.search`",
                  },
                  "args" => {
                    "query" => [
                      {
                        "name" => "q",
                        "orig" => "q",
                        "type" => "`$STRING`",
                        "kind" => "query",
                        "reqd" => true,
                        "example" => "\"what about nuts\"",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "q",
                    ],
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    BonequestFeatures.make_feature(name)
  end
end
