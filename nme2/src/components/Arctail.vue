<template>
  <div class="Arctail_container">
    <canvas ref="canvas" class="Arctail" id="arctail" width="3000" height="3000"> </canvas>
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
      color: undefined,
      ctx: undefined,
      dynamicPalette: ['#FF4A4A', '#FFD14A', '#FFFFFA', '#1C1C5C', '#05050F']
    }
  },
  created() {
    const size = 500
    this.stars = Array(size)
    this.speed = Array(size)
    this.position = Array(size)
    this.color = Array(size)
    for (var i = 0; i < size; i++) {
      this.stars[i] = Math.random() * Math.PI * 1.5
      this.speed[i] = Math.random() * 0.008
      this.position[i] = 0
      this.color[i] = Math.floor(Math.random() * 4)
    }
  },
  mounted() {
    let self = this
    this.ctx = self.$refs.canvas.getContext('2d')
    setInterval(() => {
      this.doRender()
    }, 1)
  },
  methods: {
    render(index) {
      const speed = 1
      this.ctx.beginPath()
      this.ctx.lineWidth = this.speed[index] * 500
      this.ctx.strokeStyle = '#88888811'
      this.ctx.lineCap = 'round'
      this.ctx.arc(
        1000,
        1000,
        index * 4.5,
        this.position[index] + Math.PI * speed,
        this.stars[index] + this.position[index] + Math.PI * speed
      )
      this.ctx.stroke()

      this.ctx.beginPath()
      this.ctx.strokeStyle = this.dynamicPalette[this.color[index]]
      this.ctx.lineCap = 'round'
      this.ctx.arc(
        1000,
        1000,
        index * 4.5,
        this.position[index] + Math.PI * speed + this.stars[index],
        this.stars[index] + 0.02 + this.position[index] + Math.PI * speed
      )
      this.ctx.stroke()
      this.position[index] += this.speed[index]
    },
    constellation() {
      this.ctx.beginPath()
      this.ctx.moveTo(1000, 1000)
      for (var i = 0; i < 500; i++) {
        this.ctx.lineTo(Math.cos(this.position[i]) * i * 4 + 1000, Math.sin(this.position[i]) * i * 4 + 1000)
      }
      this.ctx.lineWidth = 1
      this.ctx.strokeStyle = '#ffffff05'
      this.ctx.stroke()
    },
    doRender() {
      this.ctx.clearRect(0, 0, 3000, 3000)
      for (var i = 0; i < 500; i++) {
        this.render(i)
      }
      // this.constellation()
    }
  }
}
</script>

<style>
.Arctail_container {
  position: absolute;
  width: 3000px;
  height: 3000px;
  left: 0px;
  overflow: hidden;
}
.Arctail {
  position: absolute;
  left: 0px;
}
</style>
