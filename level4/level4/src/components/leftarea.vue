<template>
  <div class="leftarea">
    <div id="hero">
        <h1>{{name}}</h1>
        <h3>{{description}}</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "leftarea",
  data: function() {
    return {
      name: "KIM MIN SANG",
      description: ""
    };
  }
};
</script>

<style scoped lang="scss">
.leftarea {
  align-items: center;
  justify-content: center;
  display: inline-flex;
  width: 50%;
  height: 100%;
}
</style>
