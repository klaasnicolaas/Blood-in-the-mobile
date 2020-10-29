var character = document.getElementById("character");
var game = document.getElementById("game");
var interval;
var both = 0;
var counter = 0;
var currentBlocks = [];

let successModal= document.querySelector('#modal-window');
 successModal.classList.add("hideModal");

 let failureModal= document.querySelector('#modal-window-failure');
  failureModal.classList.add("hideModal");

var leftBtn = document.getElementById("js--left");
var rightBtn = document.getElementById("js--right");

var blocks = setInterval(function(){
    var blockLast = document.getElementById("block"+(counter-1));
    var holeLast = document.getElementById("hole"+(counter-1));
    if(counter>0){
        var blockLastTop = parseInt(window.getComputedStyle(blockLast).getPropertyValue("top"));
        var holeLastTop = parseInt(window.getComputedStyle(holeLast).getPropertyValue("top"));
    }
    //Function for if width >= 700 then it will execute this.
    function myFunction(x) {
  if (x.matches) { // If media query matches

    //For mobile devices, the touchevent will make sure it is possible to touch the button on mobile device.
    //If button is touched, it will excute function moveLeft
    leftBtn.addEventListener("touchstart", event=>{
      if (both==0) {
        both++; //makes sure nothing happens when you press both buttons
        interval = setInterval(moveLeft, 1);
        }
    });

    //If button is touched, it will excute function moveRight
    rightBtn.addEventListener("touchstart", event=>{
      if (both==0) {
        both++; //makes sure nothing happens when you press both buttons
        interval = setInterval(moveRight, 1);
        }
    });

    //When button isn't touched anymore, interval will be cleared (cart stops moving)
    leftBtn.addEventListener("touchend", event =>{
      clearInterval(interval);
      both=0; //makes sure nothing happens when you press both buttons
    });

    //When button isn't touched anymore, interval will be cleared (cart stops moving)
    rightBtn.addEventListener("touchend", event => {
      clearInterval(interval);
      both=0; //makes sure nothing happens when you press both buttons
    });
    //gets the location of the cart. If its not on the corner it will move 2 px to left.
    function moveLeft(){
        var left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
        if(left>0){
            character.style.left = left - 2 + "px";
        }
    }
    //gets the location of the cart. If its not on the corner it will move 2 px to right.
    function moveRight(){
        var left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
        if(left<460){
            character.style.left = left + 2 + "px";
        }
    }
    //For desktop. Minecart moves by pressing left and right key.
    document.addEventListener("keydown", event => {
        if(both==0){
            both++;
            if(event.key==="ArrowLeft"){
                interval = setInterval(moveLeft, 1);
            }
            if(event.key==="ArrowRight"){
                interval = setInterval(moveRight, 1);
            }
        }
    });
    //If key isn't pressed cart stops moving
    document.addEventListener("keyup", event => {
        clearInterval(interval);
        both=0;
    });

//Function that checks if there's less blocks than 400 and counter is equal to 0. It will add blocks and holes with a distance of 80 px. The place of the hole will be placed randomly.
    if(blockLastTop<400 || counter== 0){
        var block = document.createElement("div");
        var hole = document.createElement("div");
        block.setAttribute("class", "block");
        hole.setAttribute("class", "hole");
        block.setAttribute("id", "block"+counter);
        hole.setAttribute("id", "hole"+counter);
        block.style.top = blockLastTop + 80 + "px";
        hole.style.top = holeLastTop + 80 + "px";
        var random = Math.floor(Math.random() * 260);
        hole.style.left = random + "px";
        game.appendChild(block);
        game.appendChild(hole);
        currentBlocks.push(counter);
        counter++;
    }
    //get position of character
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var characterLeft = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    var drop = 0;
    //if character hit top. A Model will show up
    if(characterTop <= 0){
        clearInterval(blocks);
        let modalFailure= document.querySelector('#modal-window-failure');
        modalFailure.classList.add("showModal");
    }
    //If character passed 20 blocks. A model will show up
    if (counter >= 20) {
          clearInterval(blocks);
          let modal= document.querySelector('#modal-window');
          modal.classList.add("showModal");
    }
    //for loop that will only have the current blocks that are shown in the game and remove the blocks that have already passed.
    for(var i = 0; i < currentBlocks.length;i++){
        let current = currentBlocks[i];
        let iblock = document.getElementById("block"+current);
        let ihole = document.getElementById("hole"+current);
        let iblockTop = parseFloat(window.getComputedStyle(iblock).getPropertyValue("top"));
        let iholeLeft = parseFloat(window.getComputedStyle(ihole).getPropertyValue("left"));
        iblock.style.top = iblockTop - 0.5 + "px";
        ihole.style.top = iblockTop - 0.5 + "px";
        if(iblockTop < -20){
            currentBlocks.shift();
            iblock.remove();
            ihole.remove();
        }
        if(iblockTop-10<characterTop && iblockTop>characterTop){
            drop++;
            if(iholeLeft<=characterLeft && iholeLeft+20>=characterLeft){
                drop = 0;
            }
        }
    }
    if(drop==0){
        if(characterTop < 440){
            character.style.top = characterTop + 2 + "px";
        }
    }else{
        character.style.top = characterTop - 0.5 + "px";
    }

  }

  //If screen is smaller than 700 px than will excute this down below.
  //(It is basically the same above but some number needed to be changed because the width of the game had to be decreased.)
  else {

    //gets the location of the cart. If its not on the corner it will move 2 px to left.
    //For mobile devices
    leftBtn.addEventListener("touchstart", event=>{
      if (both==0) {
        both++; //makes sure nothing happens when you press both buttons
        interval = setInterval(moveLeft, 1);
        }
    });

    rightBtn.addEventListener("touchstart", event=>{
      if (both==0) {
        both++; //makes sure nothing happens when you press both buttons
        interval = setInterval(moveRight, 1);
        }
    });

    leftBtn.addEventListener("touchend", event =>{
      clearInterval(interval);
      both=0; //makes sure nothing happens when you press both buttons
    });

    rightBtn.addEventListener("touchend", event => {
      clearInterval(interval);
      both=0; //makes sure nothing happens when you press both buttons
    });
    //gets the location of the cart. If its not on the corner it will move 2 px to left.
    function moveLeft(){
        var left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
        if(left>0){
            character.style.left = left - 2 + "px";
        }
    }
    //gets the location of the cart. If its not on the corner it will move 2 px to right.
    function moveRight(){
        var left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
        if(left<260){
            character.style.left = left + 2 + "px";
        }
    }
    //For desktop. Minecart moves by pressing left and right key.
    document.addEventListener("keydown", event => {
        if(both==0){
            both++;
            if(event.key==="ArrowLeft"){
                interval = setInterval(moveLeft, 1);
            }
            if(event.key==="ArrowRight"){
                interval = setInterval(moveRight, 1);
            }
        }
    });
    document.addEventListener("keyup", event => {
        clearInterval(interval);
        both=0;
    });

    if(blockLastTop<270 || counter== 0){
        var block = document.createElement("div");
        var hole = document.createElement("div");
        block.setAttribute("class", "block");
        hole.setAttribute("class", "hole");
        block.setAttribute("id", "block"+counter);
        hole.setAttribute("id", "hole"+counter);
        block.style.top = blockLastTop + 80 + "px";
        hole.style.top = holeLastTop + 80 + "px";
        var random = Math.floor(Math.random() * 260);
        hole.style.left = random + "px";
        game.appendChild(block);
        game.appendChild(hole);
        currentBlocks.push(counter);
        counter++;
    }
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var characterLeft = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    var drop = 0;
    if(characterTop <= 0){
      clearInterval(blocks);
      let modalFailure= document.querySelector('#modal-window-failure');
      modalFailure.classList.add("showModal");
    }
    if (counter >= 40) {
      clearInterval(blocks);
      let modal= document.querySelector('#modal-window');
      modal.classList.add("showModal");
    }
    for(var i = 0; i < currentBlocks.length;i++){
        let current = currentBlocks[i];
        let iblock = document.getElementById("block"+current);
        let ihole = document.getElementById("hole"+current);
        let iblockTop = parseFloat(window.getComputedStyle(iblock).getPropertyValue("top"));
        let iholeLeft = parseFloat(window.getComputedStyle(ihole).getPropertyValue("left"));
        iblock.style.top = iblockTop - 0.5 + "px";
        ihole.style.top = iblockTop - 0.5 + "px";
        if(iblockTop < -20){
            currentBlocks.shift();
            iblock.remove();
            ihole.remove();
        }
        if(iblockTop-10<characterTop && iblockTop>characterTop){
            drop++;
            if(iholeLeft<=characterLeft && iholeLeft+20>=characterLeft){
                drop = 0;
            }
        }
    }
    if(drop==0){
        if(characterTop < 340){
            character.style.top = characterTop + 2 + "px";
        }
    }else{
        character.style.top = characterTop - 0.5 + "px";
    }
  }
}

//here i give the min-width for x
var x = window.matchMedia("(min-width: 700px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes
},1);
