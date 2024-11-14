let player = {
    name: "Ayoub",
    chips : 145
}
let firstcard = random()
let secondecard = random()
let cards =[]
let sum = 0
let hasblackjack = false
let isalive = false
let message = ""
let messageEl =document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cardes-el")
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + " :$" + player.chips
function random(){
    let randomn =  Math.floor(Math.random( ) * 13 ) + 1
    if (randomn === 1){
        return 11
    } else if(randomn >10){
        return 10
    } else {
        return randomn
    }
}
function startgame(){
    isalive = true
    let firstcard = random()
    let secondecard = random()
    cards =[firstcard, secondecard]
    sum = firstcard + secondecard
    rgame()
}
function rgame(){
    cardsEl.textContent = "cardes : " 
    for(let i =0 ; i<cards.length ; i++){
        cardsEl.textContent +=cards[i] + " "
    }
    sumEl.textContent = "sum :" + sum
    if (sum <= 20) {
        message ="do you want to draw a new card?"
    } else if (sum === 21) {
        message ="woohou! you've git blackjack!"
        hasblackjack = true
    } else {
        message = "you're out of the game!"
        isalive = false
    }
    messageEl.textContent = message
}

function newcard(){
    if (isalive === true && hasblackjack === false){
        let card = random()
        sum += card
        cards.push(card)
        rgame()
    }
}