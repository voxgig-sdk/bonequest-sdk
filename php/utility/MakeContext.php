<?php
declare(strict_types=1);

// Bonequest SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class BonequestMakeContext
{
    public static function call(array $ctxmap, ?BonequestContext $basectx): BonequestContext
    {
        return new BonequestContext($ctxmap, $basectx);
    }
}
