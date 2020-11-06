var button = document.getElementById("js--button-one");
var buttonSecond = document.getElementById("js--button-two");
var buttonThird = document.getElementById("js--button-three");
var text1 = document.getElementById("js--hide--section");
var text2 = document.getElementById("js--type--text--second");
var text3 = document.getElementById("js--type--text--third");
var text4 = document.getElementById("js--type--text--fourth");

function waithide() {
  text1.style.opacity = '0';
  window.setTimeout(
    function removethis() {
      text1.style.display='none';
      button.style.display= "none";
      text2.style.display="block";
      buttonSecond.style.display="block";
    }, 800);
}

function waithidesecond() {
  text2.style.opacity = '0';
  text3.style.opacity = "1";
  window.setTimeout(
    function removethis() {

      text2.style.display='none';
      buttonSecond.style.display= "none";
      text3.style.display="block";
      buttonThird.style.display="block";
    }, 800);
}

function waithidethird() {
  text3.style.opacity = '0';
  window.setTimeout(
    function removethis() {
      text3.style.display="none";
      buttonThird.style.display= "none";
      text4.style.display="block";
    }, 800);

}

// Get the backpack modal
var backpack = document.getElementById("js--backpack");
var backpackContent = document.getElementById("js--backpackContent");

// Get the button that opens the modal
var backpackBtn = document.getElementById("js--backpackBtn");

// Get the <span> element that closes the modal
var backpackClose = document.getElementsByClassName("backpack__button--close")[0];

// When the user clicks the button, open the modal
backpackBtn.onclick = function() {
  backpackContent.style.animationName = "animateleft";
  backpack.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
backpackClose.onclick = function() {
  backpackContent.style.animationName = "animateback";

  setTimeout(()=>{
    backpack.style.display = 'none';
  },300);

};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == backpack) {
    backpackContent.style.animationName = "animateback";
      setTimeout(()=>{
        backpack.style.display = 'none';
      },300);
  }
};



function lampClicked() {
  if (text4.style.display === "block") {
    location.href="demijn-deel2.html";
  }
}
