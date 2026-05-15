# Bonequest SDK utility: feature_add
module BonequestUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
