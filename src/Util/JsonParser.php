<?php
/**
 * Created by PhpStorm.
 * User: laurynas
 * Date: 18.8.16
 * Time: 16.13
 */

namespace App\Util;


class JsonParser
{
    /**
     * @param $content
     * @return mixed
     */
    public static function parseContent($content)
    {
        return json_decode($content, true);
    }
}