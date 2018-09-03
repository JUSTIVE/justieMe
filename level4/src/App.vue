<template>
  <div id="app">
    <pangea/>
  </div>
</template>

<script>
import pangea from "./components/pangea.vue";

export default {
  name: "app",
  components: {
    pangea
  }
};
</script>

<style lang="scss">
body {
  margin: 0px;
}
#app {
  // font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0px;
}
</style>
