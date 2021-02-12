$(document).ready(function () {
    $("carouselExampleCaptions").on('slid.bs.carousel', function (ev) {
        let id = ev.relatedTarget.id;
        changeContent(id);
        console.log("sended coso");
    });
});


function changeContent(id) {

    let element = document.getElementById("current-game");
    let gameTitle = "Path of Exile";
    let gameBody = "Path of Exile";
    switch (id) {
        case "1":
            gameTitle = "Path of Exile";
            gameBody = "Path of Exile";
            break;
        case "2":
            gameTitle = "Path of Exile";
            gameBody = "Path of Exile";
            break;
        case "3":
            gameTitle = "Skyrim";
            gameBody = "Skyrim";
            break;
        case "4":
            gameTitle = "League of Legends";
            gameBody = "League of Legends";
            break;
        case "5":
            gameTitle = "Witcher 3";
            gameBody = "Witcher 3";
            break;
        case "6":
            gameTitle = "Tyranny";
            gameBody = "Tyranny";
            break;
        default:
            console.log("Error in current game id");
    }
    changeText(element, 1, gameTitle);
    changeText(element, 2, gameBody);
}

function changeText(element, id, innerText) {
    element.children[id].innerHTML = innerText;
}