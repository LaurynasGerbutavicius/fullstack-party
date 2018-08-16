<?php
/**
 * Created by PhpStorm.
 * User: laurynas
 * Date: 18.8.16
 * Time: 17.42
 */

namespace App\Util;


use GuzzleHttp\Client;

class GithubApiGetaway
{

    const BASE_API_URL = "https://api.github.com";
    const GITHUB_API_URL = "https://api.github.com";

    private $client;
    private $repo;

    public function __construct()
    {
        $this->client = new Client(['base_url' => self::BASE_API_URL]);
        $this->repo = getenv('GITHUB_REPO');
    }

    /**
     * @param $issueState
     * @param $page
     * @return mixed
     */
    public function getIssueList($issueState, $page)
    {
        $baseUrl = self::GITHUB_API_URL . "/repos/$this->repo/issues";
        $params = [
            "state" => $issueState,
            "page" => $page
        ];

        return GithubRequestHandler::handleRequest($this->client, $baseUrl, $params);
    }

    /**
     * @param $state
     * @return mixed
     */
    public function getIssueCount($state)
    {
        $baseUrl = self::GITHUB_API_URL . "/search/issues";
        $params = [
            "q" => "repo:$this->repo+type:issue+state:$state",
            'per_page' => 1
        ];
        return GithubRequestHandler::handleRequest($this->client, $baseUrl, $params, true);
    }

    /**
     * @param $number
     * @return mixed
     */
    public function getIssue($number)
    {
        $baseUrl = self::GITHUB_API_URL . "/repos/symfony/symfony/issues/$number";
        $params = [];
        return GithubRequestHandler::handleRequest($this->client, $baseUrl, $params);
    }

    /**
     * @param $number
     * @return mixed
     */
    public function getIssueComments($number)
    {
        $baseUrl = self::GITHUB_API_URL . "/repos/symfony/symfony/issues/$number/comments";
        $params = [];
        return GithubRequestHandler::handleRequest($this->client, $baseUrl, $params);
    }
}