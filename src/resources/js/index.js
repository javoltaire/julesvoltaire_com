// Add some listeners to some elements
$(document).ready(function () {
    // Toggle the hamberger button if clicked on
    $("#hamburger-button").click(function () {
        $(this).toggleClass("hamburger-button-toggled");
        $("#nav-menu-container").toggleClass("hamburger-menu-toggled");
    });

    // If clicked outside the hamburger, close the menu
    $("body").click(function (event) {
        var targetId = event.target.id;
        if (targetId !== "hamburger-button" && targetId !== "hamburger") {
            $("#hamburger-button").removeClass("hamburger-button-toggled");
            $("#nav-menu-container").removeClass("hamburger-menu-toggled");
        }

    })
});