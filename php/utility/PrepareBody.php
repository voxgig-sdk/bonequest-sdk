<?php
declare(strict_types=1);

// Bonequest SDK utility: prepare_body

class BonequestPrepareBody
{
    public static function call(BonequestContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
