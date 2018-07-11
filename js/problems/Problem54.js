/*
In the card game poker, a hand consists of five cards and are ranked, from lowest to highest, in the following way:

High Card: Highest value card.
One Pair: Two cards of the same value.
Two Pairs: Two different pairs.
Three of a Kind: Three cards of the same value.
Straight: All cards are consecutive values.
Flush: All cards of the same suit.
Full House: Three of a kind and a pair.
Four of a Kind: Four cards of the same value.
Straight Flush: All cards are consecutive values of same suit.
Royal Flush: Ten, Jack, Queen, King, Ace, in same suit.
The cards are valued in the order:
2, 3, 4, 5, 6, 7, 8, 9, 10, Jack, Queen, King, Ace.

If two players have the same ranked hands then the rank made up of the highest value wins;
for example, a pair of eights beats a pair of fives (see example 1 below).
But if two ranks tie, for example, both players have a pair of queens, then highest cards
in each hand are compared (see example 4 below);
if the highest cards tie then the next highest cards are compared, and so on.

Consider the following five hands dealt to two players:

Hand	 	Player 1	 	Player 2	 	Winner
1	 	5H 5C 6S 7S KD
Pair of Fives
 	2C 3S 8S 8D TD
Pair of Eights
 	Player 2
2	 	5D 8C 9S JS AC
Highest card Ace
 	2C 5C 7D 8S QH
Highest card Queen
 	Player 1
3	 	2D 9C AS AH AC
Three Aces
 	3D 6D 7D TD QD
Flush with Diamonds
 	Player 2
4	 	4D 6S 9H QH QC
Pair of Queens
Highest card Nine
 	3D 6D 7H QD QS
Pair of Queens
Highest card Seven
 	Player 1
5	 	2H 2D 4C 4D 4S
Full House
With Three Fours
 	3C 3D 3S 9S 9D
Full House
with Three Threes
 	Player 1
The file, poker.txt, contains one-thousand random hands dealt to two players.
Each line of the file contains ten cards (separated by a single space):
the first five are Player 1's cards and the last five are Player 2's cards.
You can assume that all hands are valid (no invalid characters or repeated cards),
each player's hand is in no specific order, and in each hand there is a clear winner.

How many hands does Player 1 win?
*/

// TODO REFACTOR

const loadData = require('../helpers').loadData;

const colors = ['C', 'D', 'H', 'S'];
const faces = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
// 2H 2D 4C 4D 4S
const sortHand = (hand) => {
  return hand.split(' ').sort((a, b) => faces.indexOf(a[0]) - faces.indexOf(b[0]));
};

// all of the methods below assumes that are sorted /and is it an array/
const findCardWithCount = (hand, count) => {
  return hand.find((card, i, cards) => cards.filter(card2 => card2[0] === card[0]).length === count);
};
const hasNumOfKind = (hand, num) => !!findCardWithCount(hand, num);
const hasPair = (hand) => hasNumOfKind(hand, 2);
const hasTwoPairs = (hand) => {
  let onePair = findCardWithCount(hand, 2);
  if (!onePair) return false;
  let filtered = hand.filter(card => card[0] !== onePair[0]);

  return hasPair(filtered);
};

const hasThree = (hand) => hasNumOfKind(hand, 3);
const hasStraight = (hand) => {
  return hand.every((card, i, cards) => {
    return i === 0 || faces.indexOf(card[0]) === faces.indexOf(cards[i - 1][0]) + 1;
  });
};
const hasFlush = (hand) => hand.every((card, i, cards) => card[1] === cards[0][1]);
const hasFullHouse = (hand) => hasPair(hand) && hasThree(hand);
const hasFour = (hand) => hasNumOfKind(hand, 4);
const hasStraightFlush = (hand) => hasStraight(hand) && hasFlush(hand);
const hasRoyalFlush = (hand) => hasStraightFlush(hand) && hand[0][0] === 'T';

const calculateHigherCard = (handOrCard) => {
  const hand = [].concat(handOrCard);
  const [face, color] = hand[hand.length - 1].split('');

  return faces.indexOf(face);
};
const calculateRoyalFlush = (hand) => {
  return 900 + calculateHigherCard(hand);
};

const calculateStraightFlush = (hand) => {
  return 800 + calculateHigherCard(hand);
};

const calculateFour = (hand) => {
  const card = findCardWithCount(hand, 4);
  return 700 + calculateHigherCard(card);
};

const calculateFullHouse = (hand) => {
  const card = findCardWithCount(hand, 3);

  return 600 + calculateHigherCard(card);
};

const calculateFlush = (hand) => {
  return 500 + calculateHigherCard(hand);
};

const calculateStraight = (hand) => {
  return 400 + calculateHigherCard(hand);
};

const calculateThree = (hand) => {
  // todo make it coefitiant (300) + value(card)*10 + rest(calculateNone(hand - three equal))
  const card = findCardWithCount(hand, 3);

  return 300 + calculateHigherCard(card);
};

const calculateTwoPairs = (hand) => {
  const firstPair = findCardWithCount(hand, 2);
  const filtered = hand.filter(card => card[0] !== firstPair[0]);
  const secondPair = findCardWithCount(filtered, 2);
  const firstValue = calculateHigherCard(firstPair);
  const secondValue = calculateHigherCard(secondPair);

  return 200 + Math.max(firstValue, secondValue) + Math.min(firstValue, secondValue) / 10;
};

const calculatePair = (hand) => {
  const pairCard = findCardWithCount(hand, 2);
  const rest = hand.filter(card => card[0] !== pairCard[0]);

  return 100 + calculateHigherCard(pairCard) + calculateNone(rest) / 10;
};
const calculateNone = (hand) => {
  return hand.reverse().reduce((sum, card, i) => {
    return sum + calculateHigherCard(card) / Math.pow(10, i);
  }, 0);
};

const calculateHand = (data) => {
  const hand = sortHand(data);

  if (hasRoyalFlush(hand)) return calculateRoyalFlush(hand);
  if (hasStraightFlush(hand)) return calculateStraightFlush(hand);
  if (hasFour(hand)) return calculateFour(hand);
  if (hasFullHouse(hand)) return calculateFullHouse(hand);
  if (hasFlush(hand)) return calculateFlush(hand);
  if (hasStraight(hand)) return calculateStraight(hand);
  if (hasThree(hand)) return calculateThree(hand);
  if (hasTwoPairs(hand)) return calculateTwoPairs(hand);
  if (hasPair(hand)) return calculatePair(hand);

  return calculateNone(hand);
};

const problem = async () => {
  const data = await loadData('problem54');
  return data.split('\n').reduce((sum, round) => {
    let player1 = round.slice(0, 14);
    let player2 = round.slice(15);
    let score1 = calculateHand(player1);
    let score2 = calculateHand(player2);

    return score1 > score2 ? sum + 1 : sum;
  }, 0);
};

// answer 376
module.exports = problem;
