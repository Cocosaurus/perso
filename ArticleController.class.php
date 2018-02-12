<?php

class ArticleController
{
    public function httpGetMethod(Http $http, array $queryFields)
    {
        $blogModel = new BlogModel();
        $article = $blogModel->getOneArticle($queryFields['id']);
        $articles = $blogModel->getArticles();
        return ["article"=>$article,
                "articles"=>$articles,
                "_raw_template"=>true];
    }

    public function httpPostMethod(Http $http, array $formFields)
    {

    }
}