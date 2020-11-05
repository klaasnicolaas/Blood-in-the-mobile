var scrollableElement = document.getElementsByClassName('scroll')[0];
scrollableElement.addEventListener('wheel', findScrollDirectionOtherBrowsers);

var car = document.getElementsByClassName('car')[0];
var car__image = document.getElementsByClassName('car__image')[0];

var textbox_header = document.getElementById('js--textbox_header');
var textbox_content = document.getElementById('js--textbox_content');

// TODO: Het detecteren van een touch beweging

// Het detecteren van een mouse scroll beweging
function findScrollDirectionOtherBrowsers(event){
    var delta;
    if (event.wheelDelta){
        delta = event.wheelDelta;
    }else{
        delta = -1 *event.deltaY;
    }
    
    if (autoPech != true) {
        if (delta < 0) {
            // Show back side of car
            car__image.src = "../assets/img/deel-3/car-back.svg";
        } else if (delta > 0) {
            // Show front side of car
            car__image.src = "../assets/img/deel-3/car-front.svg";
        }
    }
}

var windowHeight = window.innerHeight;
var windowWidth = window.innerWidth;
var autoPech = false;

// update position of square 1 and square 2 when scroll event fires.
window.addEventListener('scroll', function() {
    var scrollTop = window.pageYOffset || window.scrollTop;
    var scrollPercent = scrollTop/windowHeight || 0;
    console.log(scrollTop);

    if (scrollTop > 1600) {
        console.log("Je bent bij een checkpoint");
        window.location.href = '../geldbetalen.html';
    } else if (autoPech == false && scrollTop > 1000 && scrollTop < 1100) {
        autoPech = true;
        console.log("Ojeee de motor heeft het begeven");
        car__image.src = "../assets/img/deel-3/car-side.svg";
        scrollableElement.classList.add("scroll--block");

        // PLAY SOUND
        car_tires.volume = 0.5;
        car_tires.play();

        // Verander de tekst in nde textbox
        textbox_header.innerHTML = "Ojee! De auto heeft pech";
        textbox_content.innerHTML = "Het ziet er naar uit dat de motor stuk is, maar gelukkig heb je een item opzak waarmee je dit probleem zou kunnen oplossen.";
    }

    car.style.bottom = -6 + scrollPercent*200 + 'px';
    car__image.style.width = 300 - scrollPercent*110 + 'px';
});

// TODO: Als max is bereikt ga door naar volgende pagina

// Functie wanneer je op de zakmes klikts
function knifeClicked() {
    console.log("Je hebt een zakmes gekozen");
    grab_audio.play();

    // Verwijder de optie om niet te mogen scrollen
    scrollableElement.classList.remove("scroll--block");
    car__image.src = "../assets/img/deel-3/car-back.svg";

    // Verander de text in de textbox
    textbox_header.innerHTML = "Het is gelukt!";
    textbox_content.innerHTML = "Na een uur zwoegen in de zon, is de motor weer gemaakt. Je kan dus je weg weer vervolgen richting de mijnen.";
}