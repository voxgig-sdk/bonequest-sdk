-- Typed models for the Bonequest SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Episode
---@field episodes? table
---@field meta? table

---@class EpisodeLoadMatch
---@field count? number
---@field id? number

---@class Quote
---@field day? number
---@field dialog? table
---@field episode? number
---@field hd? table
---@field height? number
---@field hifi? table
---@field image? string
---@field month? number
---@field navigation? table
---@field players? table
---@field tags? table
---@field thumb? string
---@field title? string
---@field width? number
---@field year? number

---@class QuoteListMatch
---@field day? number
---@field dialog? table
---@field episode? number
---@field hd? table
---@field height? number
---@field hifi? table
---@field image? string
---@field month? number
---@field navigation? table
---@field players? table
---@field tags? table
---@field thumb? string
---@field title? string
---@field width? number
---@field year? number

---@class Search
---@field day? number
---@field dialog? table
---@field episode? number
---@field hd? table
---@field height? number
---@field hifi? table
---@field image? string
---@field month? number
---@field navigation? table
---@field players? table
---@field tags? table
---@field thumb? string
---@field title? string
---@field width? number
---@field year? number

---@class SearchListMatch
---@field day? number
---@field dialog? table
---@field episode? number
---@field hd? table
---@field height? number
---@field hifi? table
---@field image? string
---@field month? number
---@field navigation? table
---@field players? table
---@field tags? table
---@field thumb? string
---@field title? string
---@field width? number
---@field year? number

local M = {}

return M
