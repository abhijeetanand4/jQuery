//selecting element using jQuery
$("h1").css("color","red");

//adding class
$("h1").addClass("bigHeader");

//adding text using jQuery
$("h1").text("Bye");

//setting attribute using jQuery
$("a").attr("href","https://in.search.yahoo.com/?fr2=inr");

//adding event listener using jQuery
$("button").click(function(){
    $("h1").css("color","blue");
});

$("input").keypress(function(event){
    $("h1").css("color","orange");
});

$("input").keypress(function(event){
    $("h1").text(event.key);
});