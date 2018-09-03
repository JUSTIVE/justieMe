<template>
  <div class="rightarea">
    <div class="rightarea-container">
    </div>
  </div>
</template>

<script>
export default {
  name: "rightarea"
};
</script>

<style scoped lang="scss">
.rightarea {
  display: inline-flex;
  width: 50%;
  height: 100%;
}
@media (max-width: 768px) {
  .rightarea {
    width: 100%;
    height: 50%;
  }
}
</style>
