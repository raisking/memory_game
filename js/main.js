var cards = ["queen", "queen", "king" , "king"];
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

	cardsInPlay.push(cards[cardId]);

	if (cardsInPlay.length === 2){
	 	if (cardsInPlay[0]===cardsInPlay[2]){
	 		alert("You found a match!");
	 	}else{
	 		alert("Sorry, Try again");
	 	}
	}

	console.log("User flipped" + cards[cardId]);
}
flipCard(0);
flipCard(2);
//exercise 9

	