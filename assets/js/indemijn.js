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

function lampClicked() {
    if (text4.style.display === "block") {
      location.href="indemijntwee.html";
    }
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// When the user clicks the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var loader = document.getElementById("js--loader");
var bedragbox = document.getElementById("js--box");
var toegang =  document.getElementById("js--accepted");

function moneyClicked(){
  loader.style.display = "block";
  bedragbox.style.display = "none";
  backpack.style.display = "none";

  setTimeout(()=> {
    loader.style.display = 'none';
    toegang.style.display = "block";
  },3000)

  setTimeout(()=> {
    location.href="test.html";
  },5000)
}