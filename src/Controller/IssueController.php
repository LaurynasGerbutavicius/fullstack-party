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
use Symfony\Component\HttpFoundation\Response;


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
     * @return Response
     */
    public function showList()
    {
        return $this->render('issue/list.html.twig');
    }


    /**
     * @Route("/show/{id}", name="issue_show")
     * @return Response
     */
    public function show($id)
    {
        return $this->render('issue/show.html.twig', [
            'id' => $id
        ]);
    }


}