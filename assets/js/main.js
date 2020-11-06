// HTML block elements import
var water_bottle_info_box = document.getElementById('item_box--water_bottle');
var lantern_info_box = document.getElementById('item_box--lantern');
var map_info_box = document.getElementById('item_box--map');
var money_info_box = document.getElementById('item_box--money');
var pocket_knife_info_box = document.getElementById('item_box--pocket_knife');

// Import item icons
var water_bottle_icon = document.getElementById('js--water_bottle');
var lantern_icon = document.getElementById('js--lantern');
var map_icon = document.getElementById('js--map');
var money_icon = document.getElementById('js--money');
var pocket_knife_icon = document.getElementById('js--pocket_knife');

// Info boxes
var info_box = document.getElementById('js--textbox_info');

// Background div
var background = document.getElementById('js--background');

// Backpack / Counter
var backpack_image = document.getElementById('js--backpack');
var backpack_counter = document.getElementById('backpack__count');
var backpack_counter_number = document.getElementById('backpack__count_number');

// Adventure guy
var adventure_person = document.getElementById('section__adventure-guy');

// Audio import
var street_audio = new Audio('/assets/audio/street.mp3');
var grab_audio = new Audio('/assets/audio/grab.mp3');
var car_tires = new Audio('/assets/audio/tires.mp3');

//video Import
var video = document.getElementById("js--video");
var videoButton = document.getElementById("js--button-video");

video.onended = function() {
  videoButton.style.display = "block";
};
