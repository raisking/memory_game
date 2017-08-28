// var cards = ["queen", "queen", "king" , "king"];
var cards = [
	{
		rank: 'queen',
		suit: 'hearts',
		cardImage: 'images/queen-of-hearts.png'
	},
	{
		rank: 'queen',
		suit: 'diamonds',
		cardImage: 'images/queen-of-diamonds.png'
	},
		{
		rank: 'king',
		suit: 'hearts',
		cardImage: 'images/king-of-hearts.png'
	},
		{
		rank: 'king',
		suit: 'diamonds',
		cardImage: 'images/king-of-diamonds.png'
	}
];

var cardsInPlay = [];

function checkForMatch(){

	if (cardsInPlay[0] === cardsInPlay[1]) {
      console.log("You found a match!");
  } else {
      console.log("Sorry, try again.");
  }
}
checkForMatch();//call from inside flipCard fun

function flipCard(cardId){

	// var cardOne = cards[0];
	// cardsInPlay.push(cardOne);
	//  console.log("User flipped " + cardOne);

	// var cardTwo = cards[2]; 
	// cardsInPlay.push(cardTwo);
	// console.log("User flipped " + cardTwo);

	cardsInPlay.push(cards[cardId].rank);
	cardsInPlay.push(cards[cardId].cardImage);	
	cardsInPlay.push(cards[cardId].suit);


	if (cardsInPlay.length === 2){
	 	if (cardsInPlay[0]===cardsInPlay[2]){
	 		alert("You found a match!");
	 	}else{
	 		alert("Sorry, Try again");
	 	}
	}

	console.log("User flipped " + cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);

}
flipCard(0);
flipCard(2);
// start exercise 10


	