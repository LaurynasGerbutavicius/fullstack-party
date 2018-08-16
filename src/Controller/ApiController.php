<?php
/**
 * Created by PhpStorm.
 * User: laurynas
 * Date: 18.8.16
 * Time: 16.05
 */

namespace App\Controller;


use App\Util\GithubApiGetaway;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\JsonResponse;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;

/**
 * Class ApiController
 * @Route("/api")
 * @package App\Controller
 */
class ApiController extends Controller
{
    /**
     * @Route("/issue_list/{state}/{page}", name="api_issue_list", requirements={"state"="open|closed", "page"="\d+"})
     * @param $state
     * @param $page
     * @return JsonResponse
     */
    public function listIssues($state, $page)
    {
        return new JsonResponse((new GithubApiGetaway())->getIssueList($state, $page));
    }

    /**
     * @Route("/issue_count/{state}", name="api_issue_count", requirements={"state"="open|closed"})
     * @param $state
     * @return JsonResponse
     */
    public function countIssues($state)
    {
        return new JsonResponse((new GithubApiGetaway())->getIssueCount($state));
    }

    /**
     * @Route("/issue/{number}", name="api_issue", requirements={"number"="\d+"})
     * @param $number
     * @return JsonResponse
     */
    public function issue($number)
    {
        return new JsonResponse((new GithubApiGetaway())->getIssue($number));
    }

    /**
     * @Route("/issue_comments/{number}", name="api_issue_comments", requirements={"number"="\d+"})
     * @param $number
     * @return JsonResponse
     */
    public function issueComments($number)
    {
        return new JsonResponse((new GithubApiGetaway())->getIssueComments($number));
    }

}