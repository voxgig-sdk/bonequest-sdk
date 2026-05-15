
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { BonequestSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await BonequestSDK.test()
    equal(null !== testsdk, true)
  })

})
