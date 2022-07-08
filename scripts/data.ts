namespace Memorie{

    export interface MemoryCard {
        cardID: string;
        frontImg: string;
        backImg: string;
    }

    export interface AllMemoryCards {
        MemoryCards: MemoryCard[];
    }
}