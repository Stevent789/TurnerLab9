$(document).ready(function(){

  $("body").css("background-color", "seagreen")

  $(".head").css("border", "solid", "black", "2px")
  $(".head").css("background-color", "peachpuff")

  $("h1").css("color", "green")
  $("h1").css("text-align", "center")

  $(".navigate").css("text-align", "center")
  $(".navigate ul").css("list-style-type", "none")
  $(".navigate li").css("display", "inline")
  $(".navigate li").css("padding", "4px")
  $(".navigate li").css("width", "200px")
  $(".navigate li").css("height", "50px")

  $(".navigate li").css("background-color", "orange")

// FADE TO OPACITY
  $(".first").mouseenter(function() {
    $(".first").css("opacity", "0.25");
    $(this).fadeOut( 30 );
  });

  $(".first").mouseout(function(){
    $(this).fadeIn( 30 );
    $(".first").css("opacity", "1.0")
  });

$(".second").mouseenter(function() {
  $(".second").css("opacity", "0.25")
  $( this ).fadeOut( 30 );
});

$(".second").mouseout(function() {
  $( this ).fadeIn( 30 );
  $(".second").css("opacity", "1.0")
});

$(".third" ).mouseenter(function() {
  $(".third").css("opacity", "0.25")
  $( this ).fadeOut( 30 );
});

$(".third").mouseout(function() {
  $( this ).fadeIn( 30 );
  $(".third").css("opacity", "1.0")
});

$(".fourth" ).mouseenter(function() {
  $(".fourth").css("opacity", "0.25")
  $( this ).fadeOut( 30 );
});

$(".fourth").mouseout(function() {
  $( this ).fadeIn( 30 );
  $(".fourth").css("opacity", "1.0")
});

// WHEN CLICKED
$(".first").click(function () {
 $(".first").text("Clicked");
 $(".first").css("background-color", "red")
});

$(".second").click(function () {
 $(".second").text("Clicked");
 $(".second").css("background-color", "red")
});

$(".third").click(function () {
  $(".third").text("Clicked");
  $(".third").css("background-color", "red")
});

$(".fourth").click(function () {
  $(".fourth").text("Clicked");
  $(".fourth").css("background-color", "red")
});

});
