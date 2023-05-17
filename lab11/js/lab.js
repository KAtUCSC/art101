// new buttons with jquery
// Author: Michael Quinn and Kira
// Date: 17/5/2023

//grabs all minor sections and adds a button
$(".minor-section").append("<button>test</button>");

//adds a feature to all buttons which toggles the 'special' class on the parents
$("button").click(function (){
  $(this).parent().toggleClass("special");
});