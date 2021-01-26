<template>
  <div class="ThemeChanger">
    <div class="rail" :class="$store.state.theme"></div>
    <div class="handle" @click="themeChange" :class="$store.state.theme">
      <span v-if="$store.state.theme == 'light'">🌚</span>
      <span v-else>🌝</span>
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
  height: var(--font-size2);
  border-radius: var(--font-size2);
  transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
}
.handle {
  z-index: 1;
  cursor: pointer;
  position: absolute;
  margin-top: calc((-1 * var(--font-size2)) + 2px);
  font-size: calc(var(--font-size3) - 4px) !important;
  transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
  border-radius: 36px;
  height: 22px;
  width: 22px;
  background: var(--foreground);
  // background: red;
  span {
    position: absolute;
    margin-top: -5px;
    transform: translateX(-3px);
    // opacity: 0.5;
  }
  &.light {
    transform: translateX(6px) translateY(3px);
    box-shadow: 0 0px 10px rgb(108, 205, 219);
  }
  &.dark {
    transform: translateX(27px) translateY(3px);
    box-shadow: 0 0px 10px rgb(250, 193, 7);
  }
}
</style>
