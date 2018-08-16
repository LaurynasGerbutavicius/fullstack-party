<?php
/**
 * Created by PhpStorm.
 * User: laurynas
 * Date: 18.8.16
 * Time: 16.07
 */

namespace App\Util;


use GuzzleHttp\Client;
use GuzzleHttp\Exception\GuzzleException;

class GithubRequestHandler
{
    /**
     * @param Client $client
     * @param string $baseUrl
     * @param array $params
     * @param bool $decodeUrl
     * @param string $method
     * @return array
     */
    public static function handleRequest(Client $client, $baseUrl, $params, $decodeUrl = false, $method = 'get')
    {
        $url = UrlHandler::generateUrl($baseUrl, $params, $decodeUrl);

        try {
            $response = $client->request($method, $url);
            return JsonParser::parseContent($response->getBody()->getContents());
        } catch (GuzzleException $e) {
            return [
                'error' => 'error communicating with remote server'
            ];
        }
    }


}