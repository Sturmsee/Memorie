"use strict";
var Memorie;
(function (Memorie) {
    let responseJSON = "";
    let allCards;
    let possibleCards = [];
    let even = false;
    let pairID;
    let clicked = false;
    let myurl = "https://raw.githubusercontent.com/Sturmsee/Memorie/main/scripts/data.json";
    //let myurl = "https://github.com/Sturmsee/Memorie/blob/main/scripts/data.json";
    doStuff();
    async function doStuff() {
        await getCards();
        await showCards(possibleCards);
    }
    async function getJSON(_url) {
        let response = await fetch(_url);
        console.log("Response", response);
        responseJSON = await response.text();
    }
    async function getCards() {
        await getJSON(myurl);
        allCards = JSON.parse(responseJSON);
        console.log("Response", allCards);
        possibleCards = allCards.MemoryCards;
        console.log("Cards", possibleCards);
    }
    ;
    function createCard(cards) {
        //Hier wird eine Karte erstellt
        let div = document.createElement("div");
        div.classList.add("card");
        div.id = cards.cardID;
        let imgFront = document.createElement("img");
        imgFront.src = cards.frontImg;
        imgFront.style.display = "none";
        div.appendChild(imgFront);
        let imgBack = document.createElement("img");
        imgBack.src = cards.backImg;
        imgBack.addEventListener("click", Clicked);
        div.appendChild(imgBack);
        return div;
        function Clicked(_e) {
            //Hier kommt der Code für den Fall eines Klicks auf die Karte rein
            let imgSrc = imgFront.src;
            let tileID;
            tileID = getNumber(imgSrc);
            if (clicked) {
                if (pairID == tileID) {
                    clicked = false;
                }
                else {
                }
            }
            else {
                if (even) {
                    pairID = tileID - 1;
                }
                else {
                    pairID = tileID + 1;
                }
                clicked = true;
            }
        }
    }
    async function showCards(_cards) {
        let container = document.getElementById("container");
        for (let i = 0; i < _cards.length; i++) {
            let div = createCard(_cards[i]);
            container.appendChild(div);
        }
        shuffle();
    }
    function shuffle() {
        let number1;
        let number2;
        let dump;
        for (let i = 0; i < 10; i++) {
            number1 = Math.floor(Math.random() * 12);
            number2 = Math.floor(Math.random() * 12);
            let firstTile = document.getElementById("tile" + number1).querySelector("img");
            let secondTile = document.getElementById("tile" + number2).querySelector("img");
            dump = firstTile.src;
            firstTile.src = secondTile.src;
            secondTile.src = dump;
        }
    }
    function getNumber(_src) {
        /*
        let pictureID: number;
        _src.replace(".png", "");
        _src.replace("../media/", "");
        pictureID = parseInt(_src);
        if (isNaN(pictureID)) {
            pictureID = null;
        }
        */
        let numberArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
        let pictureID;
        if (numberArray.includes(_src.charAt(_src.length - 5))) {
            if (numberArray.includes(_src.charAt(_src.length - 6))) {
                switch (_src.charAt(_src.length - 5)) {
                    case "1":
                        pictureID = 11;
                        break;
                    case "2":
                        pictureID = 12;
                        break;
                    case "0":
                        pictureID = 10;
                        break;
                }
            }
            else {
                pictureID = +_src.charAt(_src.length - 5);
            }
        }
        if (pictureID % 2 === 0) {
            even = true;
            //pairID = pictureID - 1;
        }
        else {
            even = false;
            //pairID = pictureID + 1;
        }
        return pictureID;
    }
})(Memorie || (Memorie = {}));
//# sourceMappingURL=memory.js.map