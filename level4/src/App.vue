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
@import url('https://fonts.googleapis.com/css?family=Oswald:400,700&display=swap');
* {
  font-family: "Oswald", sans-serif;
}
body {
  width: 100%;
  height: 100vh;
  margin: 0px;
}
#app {
  background: #efefef;
  width: 100%;
  height: 100%;
}
</style>
