<?php

class BlogModel
{
    function getArticles()
    {
        $database = new Database();
        $query = 'SELECT blogPost.id,title,content,excerpt,name FROM blogPost
                  INNER JOIN blogCategory ON blogPost.idCategory = blogCategory.id
                  ORDER BY blogPost.id DESC';
        return $database->query($query);
    }

    function getLastArticle()
    {
        $database = new Database();
        $query = 'SELECT blogPost.id,title,content,excerpt,postDate,name FROM blogPost
                  INNER JOIN blogCategory ON blogPost.idCategory = blogCategory.id
                  ORDER BY blogPost.id DESC LIMIT 1';
        return $database->query($query);
    }

    function getOneArticle($id)
    {
    	$database = new Database();
    	$query = 'SELECT * FROM blogPost
                  WHERE blogPost.id = ?';
        return $database->queryOne($query,[$id]);
    }
}
