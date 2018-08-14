<?php
/**
 * Created by PhpStorm.
 * User: laurynas
 * Date: 18.8.14
 * Time: 18.25
 */

namespace App\Controller;


use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\Routing\Annotation\Route;

class IndexController extends Controller
{
    /**
     * @Route("", name="index")
     */
    public function index()
    {
        if ($this->isGranted('IS_AUTHENTICATED_FULLY')) {
            return $this->redirectToRoute('issue_list');
        }

        return $this->render('login.html.twig');
    }

}