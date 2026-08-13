// Typed models for the Bonequest SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Episode {
  episodes?: any[]
  meta?: Record<string, any>
}

export interface EpisodeLoadMatch {
  count?: number
  id?: number
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
  players?: any[]
  tags?: any[]
  thumb?: string
  title?: string
  width?: number
  year?: number
}

export interface QuoteListMatch {
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

