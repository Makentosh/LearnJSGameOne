let $start = document.querySelector('#start')
let $game = document.querySelector('#game')
let $time = document.querySelector('#time')
let $timeHeader = document.querySelector('#time-header')
let $resultHeader = document.querySelector('#result-header')
let $result = document.querySelector('#result')
let $gameTime = document.querySelector('#game-time')

$start.addEventListener('click', startGame)

$game.addEventListener('click', handleBoxClick)

$gameTime.addEventListener('input', setGameTime)

function show($el) {
    $el.classList.remove('hide')
}

function hide($el) {
    $el.classList.add('hide')
}

let score = 0
let isGameStarted = false

function startGame() {
    $gameTime.setAttribute('disabled', 'true')
    
    setGameTime()
    score = 0
    isGameStarted = true
    $game.style.backgroundColor = '#fff'
    hide($start)

    let interval = setInterval(function(){
        var time = parseFloat($time.textContent)

        if(time <= 0 ) {
            clearInterval(interval)
            endGame()
        } else {
            $time.textContent = (time - 0.1).toFixed(1)
        }
    }, 100)

    renderBox()
}

function setGamescore() {
    $result.textContent = score.toString()
}

function setGameTime() {
    let time = parseInt($gameTime.value)
    $time.textContent = time.toFixed(1)
    show($timeHeader)
    hide($resultHeader)
}



function endGame() {

    $gameTime.removeAttribute('disabled')
    isGameStarted = false
    setGamescore()
    show($start)
    $game.style.backgroundColor = '#ccc'
    $game.innerHTML = ''
    hide($timeHeader)
    show($resultHeader)
}



function handleBoxClick(event) {

    if(!isGameStarted) {
        return
    }
    if(event.target.dataset.box) {
        score++
        renderBox();
    }
}


function renderBox() {

   $game.innerHTML = ''
   let box = document.createElement('div')
   let boxSize = getRandom(30, 100)
   let gameSize = $game.getBoundingClientRect()
   let maxTop = gameSize.height - boxSize
   let maxLeft = gameSize.width - boxSize

   let randomColor = getRandom(100, 999)

   box.style.height = box.style.width = boxSize + 'px'
   box.style.position = 'absolute'
   box.style.backgroundColor = '#' + randomColor
   box.style.top = getRandom(0, maxTop) + 'px'
   box.style.left = getRandom(0, maxLeft) + 'px'
   box.style.cursor = 'pointer'
   box.setAttribute('data-box', 'true')
   $game.insertAdjacentElement("afterbegin", box)
}



function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}


function rating() {

    let clientAnswer = prompt('Введите оценку по 100 бальной шкале')
    
    if(clientAnswer >= 90 ) {
        alert('Ваша оценка А')
    } else if (clientAnswer >= 80) {
        alert('Ваша оценка B')
    } else if (clientAnswer >= 80) {
        alert('Ваша оценка B')
    } else if (clientAnswer >= 70) {
        alert('Ваша оценка C')
    } else if (clientAnswer >= 60) {
        alert('Ваша оценка D')
    } else {
        alert('Ваша оценка F')
    }

  
    
}

rating()