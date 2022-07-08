namespace Memorie {

    let responseJSON: string = "";
    let allCards: AllMemoryCards;
    let possibleCards: MemoryCard[] = [];

    async function getJSON(_url: RequestInfo): Promise<void> {
        let response: Response = await fetch(_url);
        console.log("Response", response);
        responseJSON = await response.text();
    }

    getJSON("./data.json").then(function (): void {
        allCards = JSON.parse(responseJSON);
        console.log("Response", allCards);
        possibleCards = allCards.MemoryCards;
    });
 
    function createCard(cards: MemoryCard): HTMLDivElement {
            //Hier wird eine Karte erstellt

        let div: HTMLDivElement = document.createElement("div");
        div.classList.add("card");
        div.id = cards.cardID;

        let imgFront: HTMLImageElement = document.createElement("img");
        imgFront.src = cards.frontImg;
        imgFront.style.display = "none";

        let imgBack: HTMLImageElement = document.createElement("img");
        imgBack.src = cards.backImg;
        imgBack.addEventListener("click", Clicked)

        return div;

        function Clicked(_e: Event): void {
                //Hier kommt der Code für den Fall eines Klicks auf die Karte rein
        }
    }

    function showCards(_cards: MemoryCard[]): void {
        let container: HTMLDivElement = <HTMLDivElement>document.getElementById("container")
        for (let i = 0; i < _cards.length; i++) {
            let div: HTMLDivElement = createCard(_cards[i]);
            container.appendChild(div);
            }
        }

    showCards(possibleCards);
}