<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
  <div class="root" :data-theme="$store.state.theme">
    <Dock />

    <router-view />
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
  margin: 0px;
}
.root {
  background: var(--background);
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
</style>
