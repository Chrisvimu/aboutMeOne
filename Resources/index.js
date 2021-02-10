$(document).ready(function () {
    $("#theme-selector").on("click", function () {
        let header = $("#header");
        let tDay = "theme-day";
        let tNight = "theme-night";
        let tImage = document.getElementById('theme-image');
        let tButton = document.getElementById('theme-selector');
        // let tbody = document.getElementById('body');
        if (header.hasClass(tDay)) {
            let theme = $(".theme-day")
            theme.each(function (indice, val) {
                $(val).toggleClass(`${tDay} ${tNight}`);
                tImage.src = "Resources/moon.png";
                tButton.className = "btn btn-outline-secondary";
                tbody.className = "body-night";

            });
        } else if (header.hasClass(tNight)) {
            let theme = $(".theme-night")
            theme.each(function (indice, val) {
                $(val).toggleClass(`${tNight} ${tDay}`);
                tImage.src = "Resources/sun.png";
                tButton.className = "btn btn-outline-warning";
                tbody.className = "body-day";
            });
        } else {
            console.log("Error theme");
        }
    });
});