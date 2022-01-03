/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
console.log('Lodash is loaded:', typeof _ !== 'undefined');

/*
-create an obj variable named deck and assign it the value of { deck: [], shuffleNServe: twoCardsPerPlayer }
-create an array variable named cardArr and assign it the value of [1, 2, 3, 4, 5, 6, 7, 8, 9, Jack, Queen, King, 10, 11]
-create variables named Jack, Queen, King and assign them the value of 10
-create an obj variable named players and assign it the value of [ { name: player-1, hand: [] }, { name: player-2, hand: [] }, { name: player-3, hand: [] }, { name: player-4, hand: [] }]
-create a for loop that:
  a. assigns the value of 0 to i
  b. executes code block if i is less than cardArr.length
  c. i++
  -create obj variables named hearts, spades, diamonds, and clubs and assign them the value of an empty obj
  -hearts = { suit: hearts, rank: i },
  -spades = { suit: spades, rank: i },
  -diamonds = { suit: diamonds, rank: i },
  -clubs = { suit: clubs, rank: i }
  -deck.push(hearts, spades, diamonds, clubs)
-call the function shuffleNServe with no arguments
-create a function called shuffleNServe with 0 arguments
  -assign the value of _.shuffle(deck) to shuffledDeck
  -push the value of of shuffledDeck.rank at index 0 and 1 into the hand property of players at index 0
  -push the value of of shuffledDeck.rank at index 2 and 3 into the hand property of players at index 1
  -push the value of of shuffledDeck.rank at index 4 and 5 into the hand property of players at index 2
  -push the value of of shuffledDeck.rank at index 6 and 7 into the hand property of players at index 3
  -create a variable named playerPoints and assign it the value of players[0].hand, players[1].hand, players[2].hand, players[3].hand
  -create a for loop that:
    a. assigns the value of 0 to j
    b. executes code block if j is less than players.length
    c. j++
    -if the hand property of players at j index is strictly equal playerPoints
    -return console.log(players[j].name + ' winds with ' + playerPoints at index 3 + ' player!)
*/

var [Jack, Queen, King] = [10, 10, 10];
var Ace = 11;
var cardArr = [Ace, 2, 3, 4, 5, 6, 7, 8, 9, 10, Jack, Queen, King];
var deck = [];

var players = [{
  name: 'player1',
  hand: []
},
{
  name: 'player2',
  hand: []
},
{
  name: 'player3',
  hand: []
},
{
  name: 'player4',
  hand: []
}];

for (let i = 0; i < cardArr.length; i++) {
  var hearts = {
    suit: 'heart',
    rank: cardArr[i]
  };
  var spades = {
    suit: 'spade',
    rank: cardArr[i]
  };
  var diamonds = {
    suit: 'diamond',
    rank: cardArr[i]
  };
  var clubs = {
    suit: 'club',
    rank: cardArr[i]
  };

  deck.push(hearts, spades, diamonds, clubs);
}

console.log(shuffleNServe(players[0], players[1], players[2], players[3]));

function shuffleNServe(competitor1, competitor2, competitor3, competitor4) {
  var shuffledDeck = _.shuffle(deck);
  competitor1.hand.push(shuffledDeck[0].rank + shuffledDeck[1].rank);
  competitor2.hand.push(shuffledDeck[2].rank + shuffledDeck[3].rank);
  competitor3.hand.push(shuffledDeck[4].rank + shuffledDeck[5].rank);
  competitor4.hand.push(shuffledDeck[6].rank + shuffledDeck[7].rank);
  var playerPoints = [players[0].hand, players[1].hand, players[2].hand, players[3].hand].sort();

  for (let j = 0; j < players.length; j++) {
    if (players[j].hand === playerPoints[3]) {
      return console.log(players[j].name + ' wins with ' + playerPoints[3] + ' points!');
    }
  }
}
