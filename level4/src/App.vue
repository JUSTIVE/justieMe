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
@import url("https://fonts.googleapis.com/css?family=Source+Code+Pro");
@import url("https://fonts.googleapis.com/css?family=Jura");
a {
  text-decoration: none !important;
  text-decoration-style: none !important;
}
a:hover {
  color: white;
  text-decoration: none;
  cursor: pointer;
}
body {
  margin: 0px;
  background: #364069;
}
#app {
  // font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0px;
}
</style>
