<?php
declare(strict_types=1);

// Bonequest SDK utility: result_body

class BonequestResultBody
{
    public static function call(BonequestContext $ctx): ?BonequestResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
