var timer = {
  seconds: 0,
  minutes: 0,
  hours: 0,
  id: null
}

function start() {
  timer.id = setInterval(function() {
    if (timer.seconds !== 60) {
      timer.seconds++
    }
    if (timer.seconds === 60) {
      timer.seconds = 0
      timer.minutes++
    }
    if (timer.minutes === 60) {
      timer.minutes = 0
      timer.hours++
    }
  }, 1000)
}

function stop() {
  clearInterval(timer.id)
}

function clear() {
  stop()
  timer.seconds = 0
  timer.minutes = 0
  timer.hours = 0
}

function render() {
  setInterval(function() {
    $seconds = document.querySelector('#seconds')
    $seconds.textContent = timer.seconds + " seconds"
    $minutes = document.querySelector('#minutes')
    $minutes.textContent = timer.minutes + " minutes"
    $hours = document.querySelector('#hours')
    $hours.textContent = timer.hours + " hours"
  }, 1000)
}

var $start = document.querySelector('#start')
$start.addEventListener('click', start)

var $stop = document.querySelector('#stop')
$stop.addEventListener('click', stop)

var $clear = document.querySelector('#clear')
$clear.addEventListener('click', clear)

render()
