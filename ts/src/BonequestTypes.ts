// Typed models for the Bonequest SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Episode {
  episode?: any[]
  meta?: Record<string, any>
}

export interface EpisodeLoadMatch {
  count: number
  id: number
}

export interface Quote {
  day?: number
  dialog?: any[]
  episode?: number
  hd?: any[]
  height?: number
  hifi?: Record<string, any>
  image?: string
  month?: number
  navigation?: Record<string, any>
  player?: any[]
  tag?: any[]
  thumb?: string
  title?: string
  width?: number
  year?: number
}

export type QuoteListMatch = Partial<Quote>

export interface Search {
  day?: number
  dialog?: any[]
  episode?: number
  hd?: any[]
  height?: number
  hifi?: Record<string, any>
  image?: string
  month?: number
  navigation?: Record<string, any>
  player?: any[]
  tag?: any[]
  thumb?: string
  title?: string
  width?: number
  year?: number
}

export type SearchListMatch = Partial<Search>

