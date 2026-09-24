
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { BonequestSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = BonequestSDK.test()
    equal(testsdk instanceof BonequestSDK, true,
      'BonequestSDK.test() must return a client synchronously')
  })

})
