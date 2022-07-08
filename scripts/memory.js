"use strict";
var Memorie;
(function (Memorie) {
    let responseJSON = "";
    let allCards;
    let possibleCards = [];
    async function getJSON(_url) {
        let response = await fetch(_url);
        console.log("Response", response);
        responseJSON = await response.text();
    }
    getJSON("https://github.com/Sturmsee/Memorie/blob/main/scripts/data.json").then(function () {
        allCards = JSON.parse(responseJSON);
        console.log("Response", allCards);
        possibleCards = allCards.MemoryCards;
    });
    function createCard(cards) {
        //Hier wird eine Karte erstellt
        let div = document.createElement("div");
        div.classList.add("card");
        div.id = cards.cardID;
        let imgFront = document.createElement("img");
        imgFront.src = cards.frontImg;
        imgFront.style.display = "none";
        let imgBack = document.createElement("img");
        imgBack.src = cards.backImg;
        imgBack.addEventListener("click", Clicked);
        return div;
        function Clicked(_e) {
            //Hier kommt der Code für den Fall eines Klicks auf die Karte rein
        }
    }
    function showCards(_cards) {
        let container = document.getElementById("container");
        for (let i = 0; i < _cards.length; i++) {
            let div = createCard(_cards[i]);
            container.appendChild(div);
        }
    }
    showCards(possibleCards);
})(Memorie || (Memorie = {}));
//# sourceMappingURL=memory.js.map