
const btnNew = document.querySelector('.btn--new')
const btnTutorial = document.querySelector('.btn--tutorial')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')
const score0El = document.querySelector('#score--0')
const score1El = document.getElementById('score--1') //outra maneira de fazer o msm de cima
const diceEl = document.querySelector('.dice')
const coroaEl = document.querySelector('.coroa')
const current0El = document.getElementById('current--0')
const current1El = document.getElementById('current--1')
const player0El = document.querySelector('.player--0')
const player1El = document.querySelector('.player--1')
const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const btnCloseModal = document.querySelector('.close-modal')

console.log(diceEl)

//condições iniciais
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden')
let currentScore = 0;
let activePlayer = 0;
let playing = true;
let scores = [0,0];

const switchPlayer = function (){
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active')
    player1El.classList.toggle('player--active')
}

btnRoll.addEventListener('click', function() {
if (playing) {    //1. Gerar um numero aleatorio para o dado
    const dice = Math.trunc(Math.random() * 6) + 1

    //2. Mostrar o dado
    diceEl.classList.remove('hidden')
    diceEl.src = `dice-${dice}.png`

    //3. Check se o numero do dado é 1. Se for, mudar para o próximo player

    if (dice !== 1) {
        //Adicionar o dadao a pontuação atual
        currentScore += dice;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    } else {
        //mudar o player e setar a pontuação atual para 0
        switchPlayer()
        // current0El.textContent = 0;
        // .textContent = 0;
    }}

})

btnHold.addEventListener('click', function() {
    if (playing){//1. Adicionar o score atual para o score do player que tá ativo
    scores[activePlayer] += currentScore;
    document.querySelector('.player--active .score').textContent = scores[activePlayer]
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    //2. Check se o player score >= 100
    if (scores[activePlayer] >= 20){
        diceEl.classList.add('hidden');
        coroaEl.style.left = activePlayer===0 ? '25%' : '75%'
        coroaEl.classList.remove('hidden');
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        playing = false
    } else{
        switchPlayer()
    }}
})

btnNew.addEventListener('click',function() {
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');
    document.querySelector(`.player--0`).classList.add('player--active');
    score0El.textContent = 0;
    score1El.textContent = 0;
    diceEl.classList.add('hidden')
    coroaEl.classList.add('hidden')
    currentScore = 0;
    activePlayer = 0;
    playing = true;
    scores = [0,0];
})

btnTutorial.addEventListener('click',function(){
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
})

const closeModal = function() {
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}

btnCloseModal.addEventListener('click', closeModal)
overlay.addEventListener('click', closeModal)

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal()
    }
})
