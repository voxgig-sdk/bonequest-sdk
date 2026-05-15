# Bonequest SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module BonequestFeatures
  def self.make_feature(name)
    case name
    when "base"
      BonequestBaseFeature.new
    when "test"
      BonequestTestFeature.new
    else
      BonequestBaseFeature.new
    end
  end
end
