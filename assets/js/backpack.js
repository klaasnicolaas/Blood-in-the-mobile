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
        setTimeout(() => {
            backpack.style.display = 'none';
        },300);
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == backpack) {
        backpackContent.style.animationName = "animateback";
        setTimeout(() => {
            backpack.style.display = 'none';
        },300);
    }
};
