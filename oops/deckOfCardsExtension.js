var utility = require('/home/bridgeit/ram mohan reddy/node programs/utility/cardsUtilityExtension.js');


function deckOfCards() {

  var deck = new utility();

  var res;

  res = deck.deckOfCards();

  console.log('Cards in the Deck are : ' + res);

 /* res = deck.cardsOfSpades();

  console.log('Cards of Spades are : ' + res);

  res = deck.cardsOfDiamonds();

  console.log('Cards of Diamonds are : ' + res);

  res = deck.cardsOfHearts();

  console.log('Cards of Hearts are : ' + res);

  res = deck.cardsOfClubs();

  console.log('Cards of Clubs are : ' + res);*/

  res = deck.shuffleCards();
  
  console.log('Cards after shuffling are : ' + res);
  
  res = deck.distribute();

  console.log('Cards distributed to players are :'+res);

}

deckOfCards()