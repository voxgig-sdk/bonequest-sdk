# Bonequest SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

BonequestUtility.registrar = ->(u) {
  u.clean = BonequestUtilities::Clean
  u.done = BonequestUtilities::Done
  u.make_error = BonequestUtilities::MakeError
  u.feature_add = BonequestUtilities::FeatureAdd
  u.feature_hook = BonequestUtilities::FeatureHook
  u.feature_init = BonequestUtilities::FeatureInit
  u.fetcher = BonequestUtilities::Fetcher
  u.make_fetch_def = BonequestUtilities::MakeFetchDef
  u.make_context = BonequestUtilities::MakeContext
  u.make_options = BonequestUtilities::MakeOptions
  u.make_request = BonequestUtilities::MakeRequest
  u.make_response = BonequestUtilities::MakeResponse
  u.make_result = BonequestUtilities::MakeResult
  u.make_point = BonequestUtilities::MakePoint
  u.make_spec = BonequestUtilities::MakeSpec
  u.make_url = BonequestUtilities::MakeUrl
  u.param = BonequestUtilities::Param
  u.prepare_auth = BonequestUtilities::PrepareAuth
  u.prepare_body = BonequestUtilities::PrepareBody
  u.prepare_headers = BonequestUtilities::PrepareHeaders
  u.prepare_method = BonequestUtilities::PrepareMethod
  u.prepare_params = BonequestUtilities::PrepareParams
  u.prepare_path = BonequestUtilities::PreparePath
  u.prepare_query = BonequestUtilities::PrepareQuery
  u.result_basic = BonequestUtilities::ResultBasic
  u.result_body = BonequestUtilities::ResultBody
  u.result_headers = BonequestUtilities::ResultHeaders
  u.transform_request = BonequestUtilities::TransformRequest
  u.transform_response = BonequestUtilities::TransformResponse
}
