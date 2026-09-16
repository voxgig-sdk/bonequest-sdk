# Bonequest SDK feature factory

from bonequest_sdk.feature.base_feature import BonequestBaseFeature
from bonequest_sdk.feature.ratelimit_feature import BonequestRatelimitFeature
from bonequest_sdk.feature.retry_feature import BonequestRetryFeature
from bonequest_sdk.feature.test_feature import BonequestTestFeature
from bonequest_sdk.feature.timeout_feature import BonequestTimeoutFeature


_FEATURES = {
    "base": lambda: BonequestBaseFeature(),
    "ratelimit": lambda: BonequestRatelimitFeature(),
    "retry": lambda: BonequestRetryFeature(),
    "test": lambda: BonequestTestFeature(),
    "timeout": lambda: BonequestTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
