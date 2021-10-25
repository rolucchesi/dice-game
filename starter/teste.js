
const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')
const score0El = document.querySelector('#score--0')
const score1El = document.getElementById('score--1') //outra maneira de fazer o msm de cima
const diceEl = document.querySelector('.dice')
const current0El = document.getElementById('current--0')
const current1El = document.getElementById('current--1')
const player0El = document.querySelector('player--0')
const player1El = document.querySelector('player--1')

console.log(diceEl)

//condições iniciais
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden')
let currentScore = 0;
let activePlayer = 0;
const scores = [0,0];

btnRoll.addEventListener('click', function() {
    //1. Gerar um numero aleatorio para o dado
    const dice = Math.trunc(Math.random() * 6) + 1

    //2. Mostrar o dado
    diceEl.classList.remove('hidden')
    diceEl.src = `dice-${dice}.png`

    //3. Check se o numero do dado é 1. Se for, mudar para o próximo player

    if (dice !== 1) {
        //Adicionar o dada a pontuação atual
        currentScore += dice;
        current0El.textContent = currentScore;
    } else {
        //mudar o player e setar a pontuação atual para 0
        document.getElementById(`current--${activePlayer}`).textContent = 0;
        currentScore = 0;
        activePlayer = activePlayer === 0 ? 1 : 0;
        player0El.classList.toggle('player--active')
        player1El.classList.toggle('player--active')
        // current0El.textContent = 0;
        // .textContent = 0;
    }

})

btnHold.addEventListener('click', function() {
    //1. Adicionar o score atual para o score do player que tá ativo
    document.querySelector('.score').textContent += currentScore
    //2. Check se o player score >= 20
})