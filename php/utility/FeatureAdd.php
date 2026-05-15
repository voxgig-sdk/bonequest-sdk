<?php
declare(strict_types=1);

// Bonequest SDK utility: feature_add

class BonequestFeatureAdd
{
    public static function call(BonequestContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
