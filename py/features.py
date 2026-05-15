# Bonequest SDK feature factory

from feature.base_feature import BonequestBaseFeature
from feature.test_feature import BonequestTestFeature


def _make_feature(name):
    features = {
        "base": lambda: BonequestBaseFeature(),
        "test": lambda: BonequestTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
