'use strict';

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// CALL TO VIEWS
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var views = {
    getView : function(html) {
        $("#content").html(html);
        $(".chapter").on("click", chapterAjax);
        $(".article").on("click", articleAjax);
    },
    getViewChapter : function(html) {
        $("#content").html(html);
        $("#arrow-previous-chapter").on("click", previousChapter);
        $("#arrow-next-chapter").on("click", nextChapter);
        document.addEventListener("keydown", onKeyChapter);
    },
    getViewArticle : function(html) {
        $("#content").html(html);
        $("#arrow-previous-article").on("click", previousArticle);
        $("#arrow-next-article").on("click", nextArticle);
        document.addEventListener("keydown", onKeyArticle);
    }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ON CLICK FUNCTIONS
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function portfolioAjax()
{
    $.get(getRequestUrl()+"/portfolio",views.getView);
}
function romanAjax()
{
    $.get(getRequestUrl()+"/roman",views.getView);
}
function chapterAjax(id)
{
    var id = $(this).attr('data-id');
    $.get(getRequestUrl()+"/chapter?id="+id,views.getViewChapter);
    $('html, body').animate( { scrollTop: $(".scroll").offset().top },500);
    return false;
}
function cvAjax()
{
    $.get(getRequestUrl()+"/curriculum",views.getView);
}
function blogAjax()
{
    $.get(getRequestUrl()+"/blog",views.getView);
}
function articleAjax(id)
{
    var id = $(this).attr('data-id');
    $.get(getRequestUrl()+"/article?id="+id,views.getViewArticle);
    $('html, body').animate( { scrollTop: $(".scroll").offset().top },500);
    return false;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// KEYBOARD EVENTS
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function onKeyChapter(event)
{
    if(event.keyCode == 37)
    {
        var id = $("#arrow-previous-chapter").attr('data-id');
        if(id)
        {
            previousChapterKey(id);
        }
    }
    if(event.keyCode == 39)
    {
        var id = $("#arrow-next-chapter").attr('data-id');
        if(id)
        {
            nextChapterKey(id);
        }
    }
}
function onKeyArticle(event)
{
    if(event.keyCode == 37)
    {
        var id = $("#arrow-previous-article").attr('data-id');
        if(id)
        {
            nextArticleKey(id);
        }
    }
    if(event.keyCode == 39)
    {
        var id = $("#arrow-next-article").attr('data-id');
        if(id)
        {
            previousArticleKey(id);
        }
    }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ARROWS FUNCTIONS
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ON CLICK
////////////////////////////////
function previousChapter(id)
{
	var id = $(this).attr('data-id');
    $.get(getRequestUrl()+"/chapter?id="+id,views.getViewChapter);
    $('html, body').animate( { scrollTop: $(".scroll").offset().top },500);
    return false;
}
function nextChapter(id)
{
    var id = $(this).attr('data-id');
    $.get(getRequestUrl()+"/chapter?id="+id,views.getViewChapter);
    $('html, body').animate( { scrollTop: $(".scroll").offset().top },500);
    return false;
}
function previousArticle(id)
{
    var id = $(this).attr('data-id');
    $.get(getRequestUrl()+"/article?id="+id,views.getViewArticle);
    $('html, body').animate( { scrollTop: $(".scroll").offset().top },500);
    return false;
}
function nextArticle(id)
{
    var id = $(this).attr('data-id');
    $.get(getRequestUrl()+"/article?id="+id,views.getViewArticle);
    $('html, body').animate( { scrollTop: $(".scroll").offset().top },500);
    return false;
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// KEYBOARD
////////////////////////////////
function previousChapterKey(id)
{
    $.get(getRequestUrl()+"/chapter?id="+id,views.getViewChapter);
    $('html, body').animate( { scrollTop: $(".scroll").offset().top },500);
    return false;
}
function nextChapterKey(id)
{
    $.get(getRequestUrl()+"/chapter?id="+id,views.getViewChapter);
    $('html, body').animate( { scrollTop: $(".scroll").offset().top },500);
    return false;
}
function previousArticleKey(id)
{
    $.get(getRequestUrl()+"/article?id="+id,views.getViewArticle);
    $('html, body').animate( { scrollTop: $(".scroll").offset().top },500);
    return false;
}
function nextArticleKey(id)
{
    $.get(getRequestUrl()+"/article?id="+id,views.getViewArticle);
    $('html, body').animate( { scrollTop: $(".scroll").offset().top },500);
    return false;
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// GLOBAL EVENT LISTENERS
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
$("#portfolio").on("click", portfolioAjax);
$("#cv").on("click", cvAjax);
$("#roman").on("click", romanAjax);
$("#blog").on("click", blogAjax);
$(".chapter").on("click", chapterAjax);
$(".article").on("click", articleAjax);
$(".divColor").on("click", changeToRed);

// COLOR THEMES FUNCTIONS
function changeToRed()
{
  $("#favicon").attr("href","../application/www/images/favicon-2.png");
  $("#opacity").toggleClass("red-opacity");
  $("header a, header p, footer a, footer p, #content h1, #cv h2, #corentin").toggleClass("red-font");
  $("#upperhead, header").toggleClass("red-upperhead-border-bottom");
  $("#middlehead img").toggleClass("red-circle-img");
  $(".chapter, .article, #cv .content").toggleClass("red-chapter-article");
  $(".chapter, .article").hover(function(){$(this).toggleClass("red-chapter-article-hover");});
  $("#content article:not(#presentation)").toggleClass("red-content-background");
  $("footer").toggleClass("red-border-top");
  $(".divColor").removeClass("redTheme").addClass("greenTheme");
  $(".divColor").on("click", changeToGreen);
}

function changeToGreen()
{
  $("#favicon").attr("href","../application/www/images/favicon-3.png");
  $("#opacity").toggleClass("green-opacity");
  $("header a, header p, footer a, footer p, #content h1, #cv h2, #corentin").toggleClass("green-font");
  $("#upperhead, header").toggleClass("green-upperhead-border-bottom");
  $("#middlehead img").toggleClass("green-circle-img");
  $(".chapter, .article, #cv .content").toggleClass("green-chapter-article");
  $(".chapter, .article").hover(function(){$(this).toggleClass("green-chapter-article-hover");});
  $("#content article:not(#presentation)").toggleClass("green-content-background");
  $("footer").toggleClass("green-border-top");
  $(".divColor").removeClass("greenTheme").addClass("blueTheme");
  $(".divColor").on("click", resetToBlue);
}

function resetToBlue()
{
  $("#favicon").attr("href","../application/www/images/favicon.png");
  $("#opacity").removeClass();
  $("header a, header p, footer a, footer p, #content h1, #cv h2, #corentin").removeClass("red-font green-font");
  $("#upperhead, header").removeClass();
  $("#middlehead img").removeClass();
  $(".chapter, .article, #cv .content").removeClass("green-chapter-article red-chapter-article");
  $(".chapter, .article").hover(function(){$(this).removeClass("green-chapter-article-hover red-chapter-article-hover");});
  $("#content article:not(#presentation)").removeClass();
  $("footer").removeClass();
  $(".divColor").removeClass("blueTheme").addClass("redTheme");
  $(".divColor").on("click", changeToRed);
}
