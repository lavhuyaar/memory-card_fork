export function ShuffleCards(cards){
    const shuffledCards = [...cards];
      let currIndex = shuffledCards.length,
        randomIndex;

      while (currIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currIndex);
        currIndex--;

        [shuffledCards[currIndex], shuffledCards[randomIndex]] = [
          shuffledCards[randomIndex],
          shuffledCards[currIndex],
        ];
      }
      return shuffledCards;
}