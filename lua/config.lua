-- Bonequest SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "Bonequest",
    },
    feature = {
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
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
            ["name"] = "episodes",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "meta",
            ["type"] = "`$OBJECT`",
          },
        },
        ["name"] = "episode",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["example"] = 1,
                      ["kind"] = "param",
                      ["name"] = "count",
                      ["orig"] = "count",
                      ["reqd"] = true,
                      ["type"] = "`$INTEGER`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/episodes/random/{count}",
                ["parts"] = {
                  "episodes",
                  "random",
                  "{count}",
                },
                ["select"] = {
                  ["exist"] = {
                    "count",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["example"] = 420,
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "episode_number",
                      ["reqd"] = true,
                      ["type"] = "`$INTEGER`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/episode/{episodeNumber}",
                ["parts"] = {
                  "episode",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["episodeNumber"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["example"] = "666,667",
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "episode_number",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/episodes/{episodeNumbers}",
                ["parts"] = {
                  "episodes",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["episodeNumbers"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "random",
            },
          },
        },
      },
      ["quote"] = {
        ["fields"] = {
          {
            ["name"] = "day",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "dialog",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "episode",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "hd",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "height",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "hifi",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "image",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "month",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "navigation",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "players",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "tags",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "thumb",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "title",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "width",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "year",
            ["type"] = "`$INTEGER`",
          },
        },
        ["name"] = "quote",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/quote/random",
                ["parts"] = {
                  "quote",
                  "random",
                },
                ["select"] = {
                  ["$action"] = "random",
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.quote`",
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
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "dialog",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "episode",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "hd",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "height",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "hifi",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "image",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "month",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "navigation",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "players",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "tags",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "thumb",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "title",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "width",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "year",
            ["type"] = "`$INTEGER`",
          },
        },
        ["name"] = "search",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["example"] = "\"what about nuts\"",
                      ["kind"] = "query",
                      ["name"] = "q",
                      ["orig"] = "q",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/search/",
                ["parts"] = {
                  "search",
                },
                ["select"] = {
                  ["exist"] = {
                    "q",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.search`",
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
