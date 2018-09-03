<template>
  <div class="rightarea">
    <button>up</button>
    <projects/>
    <!-- <div class="rightarea-container">
      
    </div> -->
    <button>down</button>
  </div>
</template>

<script>
import projects from "./rightarea/projects.vue";
export default {
  name: "rightarea",
  components: {
    projects
  }
};
</script>

<style scoped lang="scss">
.rightarea {
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  width: 50%;
  height: 100%;
}
@media (max-width: 768px) {
  .rightarea {
    width: 100%;
    height: 50%;
  }
}
button {
  width: 5%;
  height: 5%;
  border: 0px;
}
</style>
