<?php
declare(strict_types=1);

// Bonequest SDK base feature

class BonequestBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(BonequestContext $ctx, array $options): void {}
    public function PostConstruct(BonequestContext $ctx): void {}
    public function PostConstructEntity(BonequestContext $ctx): void {}
    public function SetData(BonequestContext $ctx): void {}
    public function GetData(BonequestContext $ctx): void {}
    public function GetMatch(BonequestContext $ctx): void {}
    public function SetMatch(BonequestContext $ctx): void {}
    public function PrePoint(BonequestContext $ctx): void {}
    public function PreSpec(BonequestContext $ctx): void {}
    public function PreRequest(BonequestContext $ctx): void {}
    public function PreResponse(BonequestContext $ctx): void {}
    public function PreResult(BonequestContext $ctx): void {}
    public function PreDone(BonequestContext $ctx): void {}
    public function PreUnexpected(BonequestContext $ctx): void {}
}
