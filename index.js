var degree = 1;
var colour = ["red", " ","blue"," ","green"," ","gold", " "]
var colourindex = 0;

function yooooo(){
$("div .free-money").slideUp();
$("div .free-money").slideDown();
  setTimeout(yooooo,2500);
}
yooooo();

function popopeyethesalerVan(){
  $("h1").css("-webkit-transform", "rotate("+degree+"deg)");
  degree+=1;
  if (degree==361){
    degree=0;
  }
  setTimeout(popopeyethesalerVan, 25);
}
popopeyethesalerVan();
function ekboondvimgholosaarebartanmazesedholo(){
  $("div .ekboondvimgholosaarebartanmazesedholo").fadeToggle();
  $("div .me").slideToggle();
  setTimeout(ekboondvimgholosaarebartanmazesedholo, 100);
}
ekboondvimgholosaarebartanmazesedholo();

function playAudio(){
  var hm = new Audio("sounds/dudestorm.mp3");
  hm.play();
}
$(document).one("click", function(){
  playAudio();
});

function bordercolor(){
  $("div .ad").toggleClass("borderad");
  $("div .ad").css("width", (colourindex/2)+"0rem");
  $(".borderad").css("border-color", colour[colourindex]);
  colourindex+=1
  if (colourindex==8) {
    colourindex=0;
  }
  setTimeout(bordercolor, 100);
}
bordercolor();
