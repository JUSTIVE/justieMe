<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
  <div class="root" :data-theme="theme">
    <Arctail />
    <router-view />
    <Dock />
  </div>
</template>
<script>
import Arctail from './components/Arctail.vue'
import Dock from './components/Dock.vue'
export default {
  components: {
    Arctail,
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
html {
  background: var(--background);
  overflow: hidden;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
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
}
@media (max-width: 1200px) {
  .root {
    width: 100%;
    transform: translateX(10px);
  }
}
@media (max-width: 768px) {
  .root {
    width: 100%;
    transform: translateX(10px);
  }
}
</style>
