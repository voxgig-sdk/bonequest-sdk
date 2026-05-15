<?php
declare(strict_types=1);

// Bonequest SDK utility: result_headers

class BonequestResultHeaders
{
    public static function call(BonequestContext $ctx): ?BonequestResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
