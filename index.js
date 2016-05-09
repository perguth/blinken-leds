var frame = new Frame(render)
window.requestAnimationFrame(frame.render)

function Frame (render) {
  this.then = 0
  this.loop = () => window.requestAnimationFrame(this.render)
  this.delta = now => now - this.then

  this.render = now => {
    render(this.delta(now))
    this.then = now
    this.loop()
  }
}

function render (delta) {
  console.log('delta!', delta)
}
