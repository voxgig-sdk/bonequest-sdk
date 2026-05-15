<?php
declare(strict_types=1);

// Bonequest SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class BonequestFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new BonequestBaseFeature();
            case "test":
                return new BonequestTestFeature();
            default:
                return new BonequestBaseFeature();
        }
    }
}
