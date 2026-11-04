// Typed models for the Bonequest SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
// params (op.<name>.points[].g.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Episode {
  day?: number
  dialog?: any[]
  episode?: number
  hd?: any[]
  height?: number
  hifi?: Record<string, any>
  image?: string
  month?: number
  navigation?: Record<string, any>
  players?: any[]
  tags?: any[]
  thumb?: string
  title?: string
  width?: number
  year?: number
}

export interface EpisodeListMatch {
  episode_number: number
}

export interface Quote {
}

export interface QuoteListMatch {

  // Selects a custom action instead of the plain list:
  //   'random'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

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
  players?: any[]
  tags?: any[]
  thumb?: string
  title?: string
  width?: number
  year?: number
}

export interface SearchListMatch {
  q: string
}

