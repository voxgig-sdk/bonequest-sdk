# Bonequest SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module BonequestFeatures
  def self.make_feature(name)
    case name
    when "base"
      BonequestBaseFeature.new
    when "ratelimit"
      BonequestRatelimitFeature.new
    when "retry"
      BonequestRetryFeature.new
    when "test"
      BonequestTestFeature.new
    when "timeout"
      BonequestTimeoutFeature.new
    else
      BonequestBaseFeature.new
    end
  end
end
