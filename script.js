document.addEventListener('DOMContentLoaded', () => {
	//card options
	const cardArray = [
	{
		name: 'fries',
		img: './assets/fries.png'
	},
	{
		name: 'fries',
		img: './assets/fries.png'
	},
	{
		name: 'burger',
		img: './assets/burger.png'
	},
	{
		name: 'burger',
		img: './assets/burger.png'
	},
	{
		name: 'hot-dog',
		img: './assets/hot-dog.png'
	},
	{
		name: 'hot-dog',
		img: './assets/hot-dog.png'
	},
	{
		name: 'ice-cream',
		img: './assets/ice-cream.png'
	},
	{
		name: 'ice-cream',
		img: './assets/ice-cream.png'
	},
	{
		name: 'milkshake',
		img: './assets/milkshake.png'
	},
	{
		name: 'milkshake',
		img: './assets/milkshake.png'
	},
	{
		name: 'pizza',
		img: './assets/pizza.png'
	},
	{
		name: 'pizza',
		img: './assets/pizza.png'
	}
	]

	cardArray.sort(() => 0.5 - Math.random());

	const grid = document.querySelector('.grid');
	const resultDisplay = document.querySelector('#result');
	var cardsChosen =[];
	var cardsChosenId =[];
	var cardsWon = [];

	//create game board
	function createBoard() { 
		for(let i = 0 ; i< 12 ; i++) {
			var card = document.createElement('img');
			card.setAttribute('src', './assets/tile.png');
			card.setAttribute('data-id',i);
			card.addEventListener('click', flipCard);
			grid.appendChild(card);
		}
	}

	//check for match
	function checkForMatch() {
		var cards = document.querySelectorAll('img')
		const optionOneId = cardsChosenId[0];
		const optionTwoId = cardsChosenId[1];
		if(cardsChosen[0] === cardsChosen[1]) {
			alert("You found a match!");
			cards[optionOneId].setAttribute('src', './assets/tick-mark.png');
			cards[optionTwoId].setAttribute('src', './assets/tick-mark.png');
			cardsWon.push(cardsChosen);
		} else {
			cards[optionOneId].setAttribute('src','./assets/tile.png');
			cards[optionTwoId].setAttribute('src','./assets/tile.png');
			alert("Aww, you missed! Try again");
		}
		cardsChosen= [];
		cardsChosenId = [];
		resultDisplay.textContent = cardsWon.length;
		if(cardsWon.length === cardArray.length/2) {
			resultDisplay.textContent("Congratulations! you found them all");
		}
	}

	//flip card
	function flipCard() {
		var cardId = this.getAttribute('data-id');
		cardsChosen.push(cardArray[cardId].name);
		cardsChosenId.push(cardId);
		this.setAttribute('src', cardArray[cardId].img)
		if (cardsChosen.length === 2) {
			setTimeout(checkForMatch, 500);
		}
	}

	createBoard();
});

