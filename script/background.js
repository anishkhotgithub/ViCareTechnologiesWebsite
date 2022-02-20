$(document).ready(function(){
 $(".card").hover(function(){
     $(this).css("background", "#62cbf7");
     $(this).css("transition", ".5s ease-out");
     $(this).css("background-position", "left");
 },
 function(){
     $(this).css("background", "#FFF");
 });
});
