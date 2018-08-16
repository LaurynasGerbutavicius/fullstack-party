<?php
/**
 * Created by PhpStorm.
 * User: laurynas
 * Date: 18.8.16
 * Time: 16.15
 */

namespace App\Util;


class UrlHandler
{
    /**
     * @param $baseUrl
     * @param $params
     * @param bool $decode
     * @return string
     */
    public static function generateUrl($baseUrl, $params, $decode = false)
    {
        self::addCredentials($params);
        $url = $baseUrl . "?" . http_build_query($params);

        return $decode ? urldecode($url) : $url;
    }


    /**
     * @param $params
     */
    private static function addCredentials(&$params)
    {
        $params['client_id'] = getenv('GITHUB_ID');
        $params['client_secret'] = getenv('GITHUB_SECRET');
    }
}