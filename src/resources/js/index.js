// Constants
var 

// Variables
var hamburgerToggled = false;

// Add some listeners to some elements
$(document).ready(function () {
    // Add a click listener to the hamburger button
    $("#hamburger-button").click(function () {
        // Grab the hamburger icon
        var hamburger = $('#hamburger');
        var navbar = $("#navbar");

        // if(hamburgerToggled){                           // If the button is already toggled
            
        //     navbar.animate({height: '50px'});

        //     replaceClass(hamburger, "fa-times", "fa-bars");         // Exchange the X for the three bars
        //     hamburgerToggled = false;                   
        // }
        // else{                                           // If the button is not toggled

        //     // navbar.animate({height: '100%'});
        //     navbar.css('height', '100%');
        //     navbar.css('background', 'var(--fore-color)');

        //     replaceClass(hamburger, "fa-bars", "fa-times");         // Exchange the three bars for an X
        //     hamburgerToggled = true;
        // }

        
        // $(this).toggleClass("hamburger-button-toggled");
        // $("#nav-menu-container").toggleClass("hamburger-menu-toggled");
    });

    // If clicked outside the hamburger, close the menu
    // $("body").click(function (event) {
    //     var targetId = event.target.id;
    //     if (targetId !== "hamburger-button" && targetId !== "hamburger") {
    //         $("#hamburger-button").removeClass("hamburger-button-toggled");
    //         $("#nav-menu-container").removeClass("hamburger-menu-toggled");
    //     }

    // });
});

/**
 * Removes a css class from an element and replaces it with a different one
 * @param {*} element The element to replace a class with
 * @param {*} toReplace The class to replace
 * @param {*} replaceWith The class to replace with
 */
function replaceClass(element, toReplace, replaceWith){
    element.removeClass(toReplace);         // Remove the class to be replaced
    element.addClass(replaceWith);          // Add the new class to replace the old one with
}