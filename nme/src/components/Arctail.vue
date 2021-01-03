<template>
  <div class="Arctail_container">
    <canvas ref="canvas" class="Arctail" id="arctail" width="4000" height="4000"> </canvas>
  </div>
</template>

<script>
export default {
  name: 'Arctail',
  data() {
    return {
      stars: undefined,
      speed: undefined,
      position: undefined,
      ctx: undefined
    }
  },
  created() {
    this.stars = []
    this.speed = []
    this.position = []
    for (var i = 0; i < 500; i++) {
      this.stars.push(Math.random() * 1)
      this.speed.push(Math.random() * 0.005)
      this.position.push(0)
    }
  },
  mounted() {
    let self = this
    this.ctx = self.$refs.canvas.getContext('2d')
    setInterval(() => {
      this.doRender()
    }, 7)
  },
  methods: {
    render(canvasContext, index) {
      const speed = 1
      canvasContext.beginPath()
      canvasContext.lineWidth = this.speed[index] * 1000
      canvasContext.strokeStyle = '#88888822'
      canvasContext.lineCap = 'round'
      canvasContext.arc(
        1000,
        1000,
        index * 4.5,
        this.position[index] + Math.PI * speed,
        this.stars[index] + this.position[index] + Math.PI * speed
      )
      canvasContext.stroke()

      canvasContext.beginPath()
      canvasContext.strokeStyle = '#fa726888'
      canvasContext.lineCap = 'round'
      canvasContext.arc(
        1000,
        1000,
        index * 4.5,
        this.position[index] + Math.PI * speed + this.stars[index],
        this.stars[index] + 0.02 + this.position[index] + Math.PI * speed
      )
      canvasContext.stroke()
      this.position[index] += this.speed[index]
      // this.position[index] = this.position[index]
    },
    doRender() {
      this.ctx.clearRect(0, 0, this.ctx.canvas.clientWidth * 4, this.ctx.canvas.clientHeight * 4)

      for (var i = 0; i < 500; i++) {
        this.render(this.ctx, i)
      }
    }
  }
}
</script>

<style>
.Arctail_container {
  position: absolute;
  width: 4000px;
  height: 4000px;
  left: 0px;
  overflow: hidden;
}
.Arctail {
  position: absolute;
  left: 0px;
  /* width: 100vw; */
  /* height: 100vh; */
  /* opacity: 0.1; */
}
</style>
