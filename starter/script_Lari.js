
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');


// condições iniciais
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
let currentScore = 0;
let activePlayer = 0;
const scores = [0,0];
// scores = [1,2];
let playing = true;

const switchPlayer = function () {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}

btnRoll.addEventListener('click', function() {

if (playing) {
// 1. Gerar um número randomico para o dado

const dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

// 2. Mostrar o dado

diceEl.classList.remove('hidden');
diceEl.src = `dice-${dice}.png`;

// 3. Check se o número do dado é 1. Se for, mudar para o próximo player.

if (dice !== 1) {
    // Adicionar o dado a pontuação atual

    // currentScore = currentScore + dice;
    currentScore += dice;

    // current0El.textContent = currentScore;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    } else {
        switchPlayer();
        // mudar o player e setar a pontuação atual pra 0
        // document.getElementById(`current--${activePlayer}`).textContent = 0;
        // currentScore = 0;
        // activePlayer = activePlayer === 0 ? 1 : 0;
        // player0El.classList.toggle('player--active');
        // player1El.classList.toggle('player--active');

        // current0El.textContent = 0;
    }}
});

btnHold.addEventListener('click', function () {
    if (playing) {
    // 1. Adicionar o score atual pra o score do player que tá ativo
    scores[activePlayer] += currentScore;
    // scores[0] = scores[0] + currentScore;

    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

    // 2. Check se o player score >= 100

    if (scores[activePlayer] >= 20) {
        diceEl.classList.add('hidden');
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        playing = false;
    } else {
        switchPlayer();
    }}
});





