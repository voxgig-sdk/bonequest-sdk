# Typed models for the Bonequest SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.

from __future__ import annotations

from dataclasses import dataclass
from typing import Optional, Any


@dataclass
class Episode:
    episode: Optional[list] = None
    meta: Optional[dict] = None


@dataclass
class EpisodeLoadMatch:
    count: int
    id: int


@dataclass
class Quote:
    day: Optional[int] = None
    dialog: Optional[list] = None
    episode: Optional[int] = None
    hd: Optional[list] = None
    height: Optional[int] = None
    hifi: Optional[dict] = None
    image: Optional[str] = None
    month: Optional[int] = None
    navigation: Optional[dict] = None
    player: Optional[list] = None
    tag: Optional[list] = None
    thumb: Optional[str] = None
    title: Optional[str] = None
    width: Optional[int] = None
    year: Optional[int] = None


@dataclass
class QuoteListMatch:
    day: Optional[int] = None
    dialog: Optional[list] = None
    episode: Optional[int] = None
    hd: Optional[list] = None
    height: Optional[int] = None
    hifi: Optional[dict] = None
    image: Optional[str] = None
    month: Optional[int] = None
    navigation: Optional[dict] = None
    player: Optional[list] = None
    tag: Optional[list] = None
    thumb: Optional[str] = None
    title: Optional[str] = None
    width: Optional[int] = None
    year: Optional[int] = None


@dataclass
class Search:
    day: Optional[int] = None
    dialog: Optional[list] = None
    episode: Optional[int] = None
    hd: Optional[list] = None
    height: Optional[int] = None
    hifi: Optional[dict] = None
    image: Optional[str] = None
    month: Optional[int] = None
    navigation: Optional[dict] = None
    player: Optional[list] = None
    tag: Optional[list] = None
    thumb: Optional[str] = None
    title: Optional[str] = None
    width: Optional[int] = None
    year: Optional[int] = None


@dataclass
class SearchListMatch:
    day: Optional[int] = None
    dialog: Optional[list] = None
    episode: Optional[int] = None
    hd: Optional[list] = None
    height: Optional[int] = None
    hifi: Optional[dict] = None
    image: Optional[str] = None
    month: Optional[int] = None
    navigation: Optional[dict] = None
    player: Optional[list] = None
    tag: Optional[list] = None
    thumb: Optional[str] = None
    title: Optional[str] = None
    width: Optional[int] = None
    year: Optional[int] = None

