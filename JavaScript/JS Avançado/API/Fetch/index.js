const tirarCarta = document
  .getElementById("tirarCarta")
  .addEventListener("click", () => {
    drawACardOfDeck()
  });

let deckOfCards = async () => {
  const url =
    "https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";
  const response = await fetch(url);
  return await response.json();
};

let drawACard = async (deck_id) => {
  const url = `https://www.deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`;
  const response = await fetch(url);
  return await response.json();
};

let drawACardOfDeck = async () => {
  const deck = await deckOfCards();
  const card = await drawACard(deck.deck_id);
  const imageCard = card.cards[0].image;
  document.getElementById("carta").src = imageCard;
};

drawACardOfDeck();
