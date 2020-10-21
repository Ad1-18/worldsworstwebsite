var count = 1;
var index = 1;

function zindex(){
  $("div .thismadenehakakkarcry"+count).css("z-index", String(index));
  if (index===1 && count<6){
    count+=1;
  }
  else if (count===0 && index===0) {
    count+=1;
    index=1;
  }
  else if (count<=6){
    count-=1;
    index=0;
  }
  setTimeout(zindex, 50);
}
zindex();
function playAudio(){
  var hm = new Audio("sounds/manyfesto.mp3");
  hm.play();
}
$(document).one("click", function(){
  playAudio();
});
$(document).on("click",function(){
  var bruh = new Audio("sounds/bruh.mp3");
  bruh.play();
})
function hm(){
  $("div .mala").toggleClass("glow1");
  $("div .mala").toggleClass("glow2");
  setTimeout(hm, 500);
}
hm();
