# Bonequest SDK exists test

import pytest
from bonequest_sdk import BonequestSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = BonequestSDK.test(None, None)
        assert testsdk is not None
