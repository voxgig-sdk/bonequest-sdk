-- Bonequest SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "Bonequest",
      slug = "bonequest",
      version = "0.0.1",
      target = "lua",
    },
    feature = {
      ["ratelimit"] = {
        ["options"] = {
          ["active"] = false,
          ["burst"] = 5,
          ["rate"] = 5,
        },
        ["optspec"] = {
          ["now"] = "`$FUNCTION`",
          ["sleep"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "wrap",
      },
      ["retry"] = {
        ["options"] = {
          ["active"] = false,
          ["factor"] = 2,
          ["maxDelay"] = 2000,
          ["minDelay"] = 50,
          ["retries"] = 2,
          ["statuses"] = {
            408,
            425,
            429,
            500,
            502,
            503,
            504,
          },
        },
        ["optspec"] = {
          ["jitter"] = "`$BOOLEAN`",
          ["sleep"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "wrap",
      },
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
        ["optspec"] = {
          ["entity"] = "`$MAP`",
          ["net"] = "`$MAP`",
        },
        ["strict"] = false,
        ["transport"] = "base",
      },
      ["timeout"] = {
        ["options"] = {
          ["active"] = false,
          ["ms"] = 30000,
        },
        ["optspec"] = {
          ["clearTimer"] = "`$FUNCTION`",
          ["now"] = "`$FUNCTION`",
          ["setTimer"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "wrap",
      },
    },
    options = {
      base = "https://www.bonequest.com/api/v2",
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["episode"] = {},
        ["quote"] = {},
        ["search"] = {},
      },
    },
    entity = {
      ["episode"] = {
        ["fields"] = {
          {
            ["name"] = "day",
            ["title"] = "Day",
            ["type"] = "`$INTEGER`",
            ["short"] = "Day of month published",
          },
          {
            ["name"] = "dialog",
            ["title"] = "Dialog",
            ["type"] = "`$ARRAY`",
            ["short"] = "Array of arrays containing episode dialog, element 0 is typically player's name and element 1 is the dialog",
          },
          {
            ["name"] = "episode",
            ["title"] = "Episode",
            ["type"] = "`$INTEGER`",
            ["short"] = "Episode number",
          },
          {
            ["name"] = "hd",
            ["title"] = "Hd",
            ["type"] = "`$ARRAY`",
            ["short"] = "Optional array containing details about associated BoneQuest HD images",
          },
          {
            ["name"] = "height",
            ["title"] = "Height",
            ["type"] = "`$INTEGER`",
            ["short"] = "Image height",
          },
          {
            ["name"] = "hifi",
            ["title"] = "Hifi",
            ["type"] = "`$OBJECT`",
            ["short"] = "Optional details about an associated BoneQuest HiFi episode",
          },
          {
            ["name"] = "image",
            ["title"] = "Image",
            ["type"] = "`$STRING`",
            ["short"] = "Partial URL to episode image",
          },
          {
            ["name"] = "month",
            ["title"] = "Month",
            ["type"] = "`$INTEGER`",
            ["short"] = "Month published, number between 1-12",
          },
          {
            ["name"] = "navigation",
            ["title"] = "Navigation",
            ["type"] = "`$OBJECT`",
            ["short"] = "Back and next keys contain fully-formed episode for surrounding episodes",
          },
          {
            ["name"] = "players",
            ["title"] = "Players",
            ["type"] = "`$ARRAY`",
            ["short"] = "Array of player names",
          },
          {
            ["name"] = "tags",
            ["title"] = "Tags",
            ["type"] = "`$ARRAY`",
            ["short"] = "Array of tags applied",
          },
          {
            ["name"] = "thumb",
            ["title"] = "Thumb",
            ["type"] = "`$STRING`",
            ["short"] = "Partial URL to thumbnail of episode image",
          },
          {
            ["name"] = "title",
            ["title"] = "Title",
            ["type"] = "`$STRING`",
            ["short"] = "Episode title",
          },
          {
            ["name"] = "width",
            ["title"] = "Width",
            ["type"] = "`$INTEGER`",
            ["short"] = "Image width",
          },
          {
            ["name"] = "year",
            ["title"] = "Year",
            ["type"] = "`$INTEGER`",
            ["short"] = "Year published",
          },
        },
        ["name"] = "episode",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/episodes/random/{count}",
                ["segments"] = {
                  {
                    ["lit"] = "episodes",
                  },
                  {
                    ["lit"] = "random",
                  },
                  {
                    ["var"] = "count",
                  },
                },
                ["parts"] = {
                  "episodes",
                  "random",
                  "{count}",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.episodes`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "count",
                      ["orig"] = "count",
                      ["type"] = "`$INTEGER`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = 1,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "count",
                  },
                },
                ["response"] = {
                  ["kind"] = "json",
                  ["media"] = "application/json",
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/episode/{episodeNumber}",
                ["segments"] = {
                  {
                    ["lit"] = "episode",
                  },
                  {
                    ["var"] = "episode_number",
                  },
                },
                ["parts"] = {
                  "episode",
                  "{episode_number}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["episodeNumber"] = "episode_number",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.episodes`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "episode_number",
                      ["orig"] = "episodeNumber",
                      ["type"] = "`$INTEGER`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = 420,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "episode_number",
                  },
                },
                ["response"] = {
                  ["kind"] = "json",
                  ["media"] = "application/json",
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/episodes/{episodeNumbers}",
                ["segments"] = {
                  {
                    ["lit"] = "episodes",
                  },
                  {
                    ["var"] = "episode_number",
                  },
                },
                ["parts"] = {
                  "episodes",
                  "{episode_number}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["episodeNumbers"] = "episode_number",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.episodes`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "episode_number",
                      ["orig"] = "episodeNumbers",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "666,667",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "episode_number",
                  },
                },
                ["response"] = {
                  ["kind"] = "json",
                  ["media"] = "application/json",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["quote"] = {
        ["fields"] = {},
        ["name"] = "quote",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/quote/random",
                ["segments"] = {
                  {
                    ["lit"] = "quote",
                  },
                  {
                    ["lit"] = "random",
                  },
                },
                ["parts"] = {
                  "quote",
                  "random",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.episodes`",
                },
                ["args"] = {},
                ["select"] = {
                  ["$action"] = "random",
                },
                ["response"] = {
                  ["kind"] = "json",
                  ["media"] = "application/json",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["search"] = {
        ["fields"] = {
          {
            ["name"] = "day",
            ["title"] = "Day",
            ["type"] = "`$INTEGER`",
            ["short"] = "Day of month published",
          },
          {
            ["name"] = "dialog",
            ["title"] = "Dialog",
            ["type"] = "`$ARRAY`",
            ["short"] = "Array of arrays containing episode dialog, element 0 is typically player's name and element 1 is the dialog",
          },
          {
            ["name"] = "episode",
            ["title"] = "Episode",
            ["type"] = "`$INTEGER`",
            ["short"] = "Episode number",
          },
          {
            ["name"] = "hd",
            ["title"] = "Hd",
            ["type"] = "`$ARRAY`",
            ["short"] = "Optional array containing details about associated BoneQuest HD images",
          },
          {
            ["name"] = "height",
            ["title"] = "Height",
            ["type"] = "`$INTEGER`",
            ["short"] = "Image height",
          },
          {
            ["name"] = "hifi",
            ["title"] = "Hifi",
            ["type"] = "`$OBJECT`",
            ["short"] = "Optional details about an associated BoneQuest HiFi episode",
          },
          {
            ["name"] = "image",
            ["title"] = "Image",
            ["type"] = "`$STRING`",
            ["short"] = "Partial URL to episode image",
          },
          {
            ["name"] = "month",
            ["title"] = "Month",
            ["type"] = "`$INTEGER`",
            ["short"] = "Month published, number between 1-12",
          },
          {
            ["name"] = "navigation",
            ["title"] = "Navigation",
            ["type"] = "`$OBJECT`",
            ["short"] = "Back and next keys contain fully-formed episode for surrounding episodes",
          },
          {
            ["name"] = "players",
            ["title"] = "Players",
            ["type"] = "`$ARRAY`",
            ["short"] = "Array of player names",
          },
          {
            ["name"] = "tags",
            ["title"] = "Tags",
            ["type"] = "`$ARRAY`",
            ["short"] = "Array of tags applied",
          },
          {
            ["name"] = "thumb",
            ["title"] = "Thumb",
            ["type"] = "`$STRING`",
            ["short"] = "Partial URL to thumbnail of episode image",
          },
          {
            ["name"] = "title",
            ["title"] = "Title",
            ["type"] = "`$STRING`",
            ["short"] = "Episode title",
          },
          {
            ["name"] = "width",
            ["title"] = "Width",
            ["type"] = "`$INTEGER`",
            ["short"] = "Image width",
          },
          {
            ["name"] = "year",
            ["title"] = "Year",
            ["type"] = "`$INTEGER`",
            ["short"] = "Year published",
          },
        },
        ["name"] = "search",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/search/",
                ["segments"] = {
                  {
                    ["lit"] = "search",
                  },
                },
                ["parts"] = {
                  "search",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.episodes`",
                },
                ["args"] = {
                  ["query"] = {
                    {
                      ["name"] = "q",
                      ["orig"] = "q",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["reqd"] = true,
                      ["example"] = "\"what about nuts\"",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "q",
                  },
                },
                ["response"] = {
                  ["kind"] = "json",
                  ["media"] = "application/json",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
