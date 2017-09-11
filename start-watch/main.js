var timer = {
  seconds: 0,
  id: null
}

function start() {
  timer.id = setInterval(function() {
    timer.seconds++
  }, 1000)
}

function stop() {
  clearInterval(timer.id)
}

function clear() {
  stop()
  timer.seconds = 0
}

function render() {
  setInterval(function() {
    if (timer.seconds < 60) {
      $seconds = document.querySelector('#seconds')
      $seconds.textContent = timer.seconds + " seconds "
    }
    else if (timer.seconds >= 60) {
      $seconds.textContent = Math.floor(timer.seconds / 60) + " minutes " + (timer.seconds % 60) + " seconds "
    }
    else if (timer.seconds >= 3600) {
      $seconds.textContent = Math.floor(timer.seconds / 3600) + " hours " + Math.floor((timer.seconds % 3600) / 60) + " minutes " + (timer.seconds % 60) + " seconds "
    }
  }, 16)
}

function onetime (node, type, callback) {
  node.addEventListener(type, function(e) {
    e.target.removeEventListener(e.type, arguments.callee)
    return callback(e)
  })
}

var $start = document.querySelector('#start')
onetime($start, 'click', start)

var $stop = document.querySelector('#stop')
$stop.addEventListener('click', stop)

var $clear = document.querySelector('#clear')
$clear.addEventListener('click', clear)

var $limitS = document.querySelector('#numberS')

render()
