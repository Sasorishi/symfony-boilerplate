<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

final class MainRouteController extends AbstractController
{
    #[Route('/main', name: 'app_main_route')]
    public function index(): Response
    {
        return $this->render('index.html.twig');
    }
}
