<template>
  <div class="ThemeChanger">
    <div class="rail" :class="$store.state.theme"></div>
    <div class="handle" @click="themeChange">
      <span class="lighter" :class="$store.state.theme"></span>
      <span class="shadow" :class="$store.state.theme"></span>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    themeChange() {
      if (this.$store.state.theme == 'light') this.$store.commit('UPDATE_THEME', 'dark')
      else this.$store.commit('UPDATE_THEME', 'light')
    }
  }
}
</script>

<style lang="scss" scoped>
.ThemeChanger {
  overflow: hidden;
}
.rail {
  width: 56px;
  background: var(--background);
  // background: red;
  height: var(--font-size2);
  border-radius: var(--font-size2);
  transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
}
.handle {
  z-index: 1;
  // position: absolute;
  cursor: pointer;
  margin-top: calc((-1 * var(--font-size2)) + 6px);
  font-size: calc(var(--font-size3) - 4px) !important;

  border-radius: 36px;
  overflow: hidden;
  height: 24px;
  width: 48px;
  // background: var(--foreground);
  // background: red;
  // span {
  //   position: absolute;
  //   margin-top: -5px;
  //   transform: translateX(-3px);
  //   // opacity: 0.5;
  // }
}
.lighter {
  position: absolute;
  width: 20px;
  height: 20px;
  background: #ffc107;
  border-radius: 50%;
  transform: translateX(6px);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &.dark {
    transform: translateX(28px);
  }
}
.shadow {
  position: absolute;
  width: 20px;
  height: 20px;
  background: var(--background);
  // background: red;
  border-radius: 50%;
  transform: translateX(-10px) scale(0.1);
  transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);

  &.dark {
    transform: translate(22px, -3px) scale(1);
  }
}
</style>
