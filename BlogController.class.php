<?php

class BlogController
{
    public function httpGetMethod(Http $http, array $queryFields)
    {
        $blogModel = new BlogModel();
        $articles = $blogModel->getArticles();
        return ["articles"=>$articles,
            "_raw_template"=>true];
        $http->sendJSONResponse($articles['id']);
    }

    public function httpPostMethod(Http $http, array $formFields)
    {

    }
}