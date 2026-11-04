# Bonequest SDK utility: prepare_body
require_relative 'media'
module BonequestUtilities
  PrepareBody = ->(ctx) {
    return nil unless ctx.op.input == "data"
    return BonequestUtilities.raw_body(ctx.reqdata) if BonequestUtilities.raw_request?(ctx.point)
    ctx.utility.transform_request.call(ctx)
  }
end
