<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
  <div class="root" :data-theme="theme">
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
    this.updateTheme()
  },
  watch: {
    themeValue(newValue) {
      this.theme = newValue ? 'light' : 'dark'
      this.updateTheme()
    }
  },
  data() {
    return {
      themeValue: false,
      theme: 'dark'
    }
  },
  methods: {
    updateTheme() {
      document.documentElement.setAttribute('data-theme', this.theme)
    }
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
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  border-radius: var(--global-radius);
}
</style>
