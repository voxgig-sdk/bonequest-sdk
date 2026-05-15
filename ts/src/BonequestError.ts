
import { Context } from './Context'


class BonequestError extends Error {

  isBonequestError = true

  sdk = 'Bonequest'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  BonequestError
}

