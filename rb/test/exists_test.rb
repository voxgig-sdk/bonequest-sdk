# Bonequest SDK exists test

require "minitest/autorun"
require_relative "../Bonequest_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = BonequestSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
