# frozen_string_literal: true

# Typed models for the Bonequest SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Episode entity data model.
#
# @!attribute [rw] episodes
#   @return [Array, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] meta
#   @return [Hash, nil]
Episode = Struct.new(
  :episodes,
  :id,
  :meta,
  keyword_init: true
)

# Request payload for Episode#load.
#
# @!attribute [rw] id
#   @return [Integer]
EpisodeLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Quote entity data model.
#
# @!attribute [rw] day
#   @return [Integer, nil]
#
# @!attribute [rw] dialog
#   @return [Array, nil]
#
# @!attribute [rw] episode
#   @return [Integer, nil]
#
# @!attribute [rw] hd
#   @return [Array, nil]
#
# @!attribute [rw] height
#   @return [Integer, nil]
#
# @!attribute [rw] hifi
#   @return [Hash, nil]
#
# @!attribute [rw] image
#   @return [String, nil]
#
# @!attribute [rw] month
#   @return [Integer, nil]
#
# @!attribute [rw] navigation
#   @return [Hash, nil]
#
# @!attribute [rw] players
#   @return [Array, nil]
#
# @!attribute [rw] tags
#   @return [Array, nil]
#
# @!attribute [rw] thumb
#   @return [String, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
#
# @!attribute [rw] width
#   @return [Integer, nil]
#
# @!attribute [rw] year
#   @return [Integer, nil]
Quote = Struct.new(
  :day,
  :dialog,
  :episode,
  :hd,
  :height,
  :hifi,
  :image,
  :month,
  :navigation,
  :players,
  :tags,
  :thumb,
  :title,
  :width,
  :year,
  keyword_init: true
)

# Request payload for Quote#list.
#
# @!attribute [rw] day
#   @return [Integer, nil]
#
# @!attribute [rw] dialog
#   @return [Array, nil]
#
# @!attribute [rw] episode
#   @return [Integer, nil]
#
# @!attribute [rw] hd
#   @return [Array, nil]
#
# @!attribute [rw] height
#   @return [Integer, nil]
#
# @!attribute [rw] hifi
#   @return [Hash, nil]
#
# @!attribute [rw] image
#   @return [String, nil]
#
# @!attribute [rw] month
#   @return [Integer, nil]
#
# @!attribute [rw] navigation
#   @return [Hash, nil]
#
# @!attribute [rw] players
#   @return [Array, nil]
#
# @!attribute [rw] tags
#   @return [Array, nil]
#
# @!attribute [rw] thumb
#   @return [String, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
#
# @!attribute [rw] width
#   @return [Integer, nil]
#
# @!attribute [rw] year
#   @return [Integer, nil]
QuoteListMatch = Struct.new(
  :day,
  :dialog,
  :episode,
  :hd,
  :height,
  :hifi,
  :image,
  :month,
  :navigation,
  :players,
  :tags,
  :thumb,
  :title,
  :width,
  :year,
  keyword_init: true
)

# Search entity data model.
#
# @!attribute [rw] day
#   @return [Integer, nil]
#
# @!attribute [rw] dialog
#   @return [Array, nil]
#
# @!attribute [rw] episode
#   @return [Integer, nil]
#
# @!attribute [rw] hd
#   @return [Array, nil]
#
# @!attribute [rw] height
#   @return [Integer, nil]
#
# @!attribute [rw] hifi
#   @return [Hash, nil]
#
# @!attribute [rw] image
#   @return [String, nil]
#
# @!attribute [rw] month
#   @return [Integer, nil]
#
# @!attribute [rw] navigation
#   @return [Hash, nil]
#
# @!attribute [rw] players
#   @return [Array, nil]
#
# @!attribute [rw] tags
#   @return [Array, nil]
#
# @!attribute [rw] thumb
#   @return [String, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
#
# @!attribute [rw] width
#   @return [Integer, nil]
#
# @!attribute [rw] year
#   @return [Integer, nil]
Search = Struct.new(
  :day,
  :dialog,
  :episode,
  :hd,
  :height,
  :hifi,
  :image,
  :month,
  :navigation,
  :players,
  :tags,
  :thumb,
  :title,
  :width,
  :year,
  keyword_init: true
)

# Request payload for Search#list.
#
# @!attribute [rw] q
#   @return [String]
SearchListMatch = Struct.new(
  :q,
  keyword_init: true
)

