-- Bonequest SDK error

local BonequestError = {}
BonequestError.__index = BonequestError


function BonequestError.new(code, msg, ctx)
  local self = setmetatable({}, BonequestError)
  self.is_sdk_error = true
  self.sdk = "Bonequest"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function BonequestError:error()
  return self.msg
end


function BonequestError:__tostring()
  return self.msg
end


return BonequestError
