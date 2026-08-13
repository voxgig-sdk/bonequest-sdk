# Bonequest SDK utility: make_context

from projectname_sdk.core.context import BonequestContext


def make_context_util(ctxmap, basectx):
    return BonequestContext(ctxmap, basectx)
