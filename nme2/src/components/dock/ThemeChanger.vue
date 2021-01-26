<template>
  <div class="ThemeChanger">
    <div class="rail"></div>
    <div class="handle" @click="themeChange" :class="$store.state.theme">
      <span v-if="$store.state.theme == 'light'">🌝</span>
      <span v-else>🌚</span>
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
.rail {
  width: 56px;
  background: var(--background);
  height: var(--font-size2);
  border-radius: var(--font-size2);
}
.handle {
  z-index: 1;
  cursor: pointer;
  position: absolute;
  margin-top: calc(-1 * var(--font-size2));
  font-size: calc(var(--font-size3) - 4px) !important;
  transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
  box-shadow: var(--elevation1);
  &.light {
    transform: translateX(2px);
  }
  &.dark {
    transform: translateX(27px);
  }
}
</style>
