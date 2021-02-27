<template>
  <div class="root" :data-theme="$store.state.theme">
    <div class="innerMain">
      <Dock />
      <router-view />
    </div>
  </div>
</template>
<script>
import Dock from './components/Dock.vue'
export default {
  components: {
    Dock
  },
  created() {
    let themeValue = localStorage.getItem('theme') ?? 'light'
    let language = localStorage.getItem('language') ?? 0

    this.$store.commit('UPDATE_THEME', themeValue)
    this.$store.commit('UPDATE_LOCALE', language)

    localStorage.setItem('theme', this.$store.state.theme)
    localStorage.setItem('language', this.$store.state.language)
  }
}
</script>

<style lang="scss">
@import './assets/style/theme.scss';
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@500&display=swap');
html {
  @include maximize;
  background: var(--background);
  overflow: hidden;
}
* {
  font-family: 'Noto Sans KR', sans-serif;
  user-select: none;
}
#app {
  -webkit-font-smoothing: antialiased;
  text-align: center;

  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
body {
  @include maximize;
  @include row;
  background: var(--background);
  margin: 0px;
}
.innerMain {
  width: 40vw;
  height: 80vh;
  @include column;
  border-radius: var(--radius3);
  background: var(--foreground);
  margin: auto auto;
  overflow: hidden;
  box-shadow: var(--elevation1);
}
.root {
  @include column(center, center);
  @include maximize;
  margin: auto auto;
  background: var(--background);
}
@media (max-width: 600px) {
  .innerMain {
    @include maximize;
    border-radius: 0px;
  }
}
</style>
