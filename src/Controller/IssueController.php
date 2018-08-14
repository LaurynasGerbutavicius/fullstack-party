<?php
/**
 * Created by PhpStorm.
 * User: laurynas
 * Date: 18.8.14
 * Time: 18.32
 */

namespace App\Controller;


use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;


/**
 * Class IssueController
 * @IsGranted("IS_AUTHENTICATED_FULLY")
 * @Route("/issue")
 * @package App\Controller
 */
class IssueController extends Controller
{

    /**
     * @Route("/list", name="issue_list")
     * @param Request $request
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function showList(Request $request)
    {
        return $this->render('issue/list.html.twig');
    }


    /**
     * @Route("/show/{id}", name="issue_show")
     * @param Request $request
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function show(Request $request, $id)
    {
        return $this->render('issue/show.html.twig');
    }


}