$(document).ready(function () {
    $("#theme-selector").on("click", function () {
        let header = $("#header");
        let tDay = "theme-day";
        let tNight = "theme-night";
        if (header.hasClass(tDay)) {
            let theme = $(".theme-day")
            theme.each(function (indice, val) {
                $(val).toggleClass(`${tDay} ${tNight}`);
            });
        } else if (header.hasClass(tNight)) {
            let theme = $(".theme-night")
            theme.each(function (indice, val) {
                $(val).toggleClass(`${tNight} ${tDay}`);
            });
        } else {
            console.log("Error theme");
        }
    });
});
