# Bonequest SDK utility: make_context
require_relative '../core/context'
module BonequestUtilities
  MakeContext = ->(ctxmap, basectx) {
    BonequestContext.new(ctxmap, basectx)
  }
end
