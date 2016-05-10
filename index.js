var yo = require('yo-yo')

var frame = new Frame(render)
window.requestAnimationFrame(frame.render)

var fps = 3
function Frame (render) {
  this.then = 0
  this.loop = () => window.requestAnimationFrame(this.render)

  this.render = now => {
    if (now < this.then + (1000 / fps)) {
      this.loop()
      return
    }
    console.log('60fp')
    render()
    this.then = now
    this.loop()
  }
}

var protoLed = {
  icon: 'square icon',
  color: 'white',
  fontSize: '1em'
}
var amount = 1024
var leds = []
for (let i = 0; i < amount; i++) {
  leds[i] = {
    color: protoLed.color || 'white',
    proto: protoLed
  }
}

function genHtmlLeds (leds) {
  return yo`<div class="ui fluid container" id=container>
    ${leds.map(function (led) {
      return yo`<div style="display: inline; position: relative;">
        <i class="square icon"
          style="color: ${led.color}; font-size: ${led.proto.fontSize}"></i>
        <i class="square outline icon"
          style="left: 0; position: absolute; font-size: ${led.proto.fontSize}"></i>
      </div>`
    })}
  </div>`
}
var htmlLeds = genHtmlLeds(leds)
document.getElementById('leds').appendChild(htmlLeds)

window.setTimeout(() => {
  console.log('timeout')
  protoLed.fontSize = '28px'
  yo.update(htmlLeds, genHtmlLeds(leds))
}, 4000)

function render (delta) {
}
