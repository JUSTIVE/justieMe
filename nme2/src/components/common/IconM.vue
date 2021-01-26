<template>
  <span
    :style="
      `width:${size}px;
      height:${size}px;
      font-size:${size}px`
    "
  >
    <i class="material-icons" :style="`font-size:${size}px`" :color="color">
      {{ type }}
    </i>
  </span>
</template>
<script>
export default {
  name: 'IconM',
  props: {
    type: String,
    size: {
      type: Number,
      default: 24
    },
    color: String
  }
}
</script>
<style lang="scss" scoped>
@font-face {
  font-family: 'Material Icons';
  src: url('../../assets/font/MaterialIconsRound-Regular.woff');
}
.material-icons {
  font-family: 'Material Icons';
  font-weight: lighter;
  font-style: normal;
  display: inline-block;
  line-height: 0;
  text-transform: none;
  letter-spacing: normal;
  word-wrap: normal;
  white-space: nowrap;
  direction: ltr;
  user-select: none;
}
</style>
