const cardsArray = [
    {
        name:'truck',
        icon:'<i class="fa-solid fa-truck"></i>'
    },
    {
        name:'house',
        icon:'<i class="fa-solid fa-house"></i>'
    },
    {
        name:'camera',
        icon:'<i class="fa-solid fa-camera"></i>'
    },
    {
        name:'headphone',
        icon:'<i class="fa-solid fa-headphones"></i>'
    },
    {
        name:'image',
        icon:'<i class="fa-solid fa-image"></i>'
    },
    {
        name:'smile',
        icon:'<i class="fa-solid fa-face-smile"></i>'
    },
    {
        name:'truck',
        icon:'<i class="fa-solid fa-truck"></i>'
    },
    {
        name:'house',
        icon:'<i class="fa-solid fa-house"></i>'
    },
    {
        name:'camera',
        icon:'<i class="fa-solid fa-camera"></i>'
    },
    {
        name:'headphone',
        icon:'<i class="fa-solid fa-headphones"></i>'
    },
    {
        name:'image',
        icon:'<i class="fa-solid fa-image"></i>'
    },
    {
        name:'smile',
        icon:'<i class="fa-solid fa-face-smile"></i>'
    }
];

let flippedCards = [];
let matchedPairs = 0;
 shuffleCards();
 const gameBoard = document.getElementById('gameBoard')
 displayCards();


 function shuffleCards(){
    for(let i=cardsArray.length-1;i>=0;i--){
        let rand = Math.floor(Math.random()*(i+1));
        [cardsArray[i],cardsArray[rand]] = [cardsArray[rand],cardsArray[i]];
    }
 }

 function displayCards(){
    cardsArray.forEach((curr,index,arr)=>{
        const card = document.createElement('div');
        card.setAttribute('id',index);
        card.classList.add('cardback'); 
        card.classList.add('active');
        gameBoard.append(card);
        card.addEventListener('click',flipCard);
    })
 }

 function flipCard(){
    if(flippedCards.length<2 && this.classList.contains('active')){
    let cardId = this.getAttribute('id');
    flippedCards.push(this);
    this.classList.remove('cardback');
    this.innerHTML = cardsArray[cardId].icon;
    if(flippedCards.length==2){
        setTimeout(checkMatch,1000);
    }
    }
 }

 function checkMatch(){
    let card1 = flippedCards[0].getAttribute('id');
    let card2 = flippedCards[1].getAttribute('id');
    if(cardsArray[card1].name == cardsArray[card2].name ){
        flippedCards[0].style.border ='none';
        flippedCards[0].style.backgroundColor = '#f5e8ba';
        flippedCards[0].innerHTML = ''
        flippedCards[0].classList.remove('active');
        flippedCards[1].classList.remove('active');
        flippedCards[1].style.border ='none';
        flippedCards[1].style.backgroundColor = '#f5e8ba';
        flippedCards[1].innerHTML = ''
        matchedPairs++;
        checkGameOver();
    }else{
        flippedCards[0].innerHtML='';
        flippedCards[1].innerHtML='';
        flippedCards[0].classList.add('cardback')
        flippedCards[1].classList.add('cardback')
    }
    flippedCards=[];

 }
 function checkGameOver(){
    if(matchedPairs == cardsArray.length/2){
        while(gameBoard.firstChild){
            gameBoard.removeChild(gameBoard.firstChild)
        }
        gameBoard.innerHTML = 'You Won';
        gameBoard.classList.remove('game');
        gameBoard.classList.add('won');
    }
}

