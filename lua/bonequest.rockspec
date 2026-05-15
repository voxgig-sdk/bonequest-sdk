package = "voxgig-sdk-bonequest"
version = "0.0-1"
source = {
  url = "git://github.com/voxgig-sdk/bonequest-sdk.git"
}
description = {
  summary = "Bonequest SDK for Lua",
  license = "MIT"
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
  "dkjson >= 2.5",
}
build = {
  type = "builtin",
  modules = {
    ["bonequest_sdk"] = "bonequest_sdk.lua",
    ["config"] = "config.lua",
    ["features"] = "features.lua",
  }
}
