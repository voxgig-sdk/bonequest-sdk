<?php
declare(strict_types=1);

// Bonequest SDK exists test

require_once __DIR__ . '/../bonequest_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = BonequestSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
