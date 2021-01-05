<template>
  <div class="mainpane" :class="{ hidden: !paneopen }"></div>
</template>

<script>
export default {
  props: {
    paneopen: Boolean
  }
}
</script>

<style lang="scss" scoped>
.mainpane {
  position: absolute;
  top: 20px;
  background: var(--accent-darker);
  width: calc(100% - 900px);
  height: calc(100% - 92px);
  left: 450px;
  border-radius: 4px;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  opacity: 0.99;
  transform-origin: bottom left;
  &.hidden {
    opacity: 0;
    transform: translate(0, 0) scale(0.8);
    transform-origin: bottom left;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  }
}
@media (max-width: 1200px) {
  .mainpane {
    width: calc(100% - 20px);
    left: 0px;
  }
}
</style>
