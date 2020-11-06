// Other variables
var item_counter = 0;

// PLay sound at open webpage
window.onload=function(){
    street_audio.volume = 0.5;
    street_audio.play();
}

function add_to_backpack(id) {
    // Determine which icon + info box should be hided
    if (id == "bottle") {
        hide_item(water_bottle_icon);
    } else if (id == "lantern") {
        hide_item(lantern_icon);
    } else if (id == "map") {
        hide_item(map_icon);
    } else if (id == "money") {
        hide_item(money_icon);
    } else if (id == "knife") {
        hide_item(pocket_knife_icon);
    }
}

function show_info_box(id) {
    if (id == "bottle") {
        toggle(water_bottle_info_box);
    } else if (id == "lantern") {
        toggle(lantern_info_box);
    } else if (id == "map") {
        toggle(map_info_box);
    } else if (id == "money") {
        toggle(money_info_box);
    } else if (id == "knife") {
        toggle(pocket_knife_info_box);
    }
}

// Toggle info box
function toggle(element) {
    if(element.style.display == 'block') {
        element.style.display = 'none';
    } else {
        element.style.display = 'block';
    }
}

// Hide item
function hide_item(element) {
    grab_audio.play();
    if (item_counter < 4) {
        // Count up
        item_counter += 1;

        // Update counter
        backpack_counter.style.display = 'block';
        backpack_counter_number.innerHTML = item_counter;

        element.style.display = 'none';
    } else {
        item_counter += 1;
        element.style.display = 'none';

        // Hide items
        backpack_image.style.display = 'none';
        backpack_counter.style.display = 'none';
        info_box.style.display = 'none';

        // Complete scherm
        background.style.opacity = '0';
        adventure_person.style.display = 'block';
    }
}
