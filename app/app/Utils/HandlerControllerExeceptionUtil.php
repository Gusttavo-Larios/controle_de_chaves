<?php

namespace App\Utils;

class HandlerControllerExeceptionUtil
{
    /** @var string */
    private string $message;
    /** @var int */
    private string $statusCode;

    public function __construct(\Throwable $th)
    {
        $this->message = $th->getMessage();
        $this->statusCode = $th->getCode();
    }

    // METHODS
    public function getFormattedError(): array
    {
        return [
            'message' => $this->message,
            'statusCode' => $this->getStatusCode()
        ];
    }

    private function getStatusCode(): int
    {
        if ($this->statusCode > 399 && $this->statusCode < 500) {
            return $this->statusCode;
        } else {
            return 500;
        }
    }
}
