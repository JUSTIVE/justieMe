<template>
  <div class="mainpane" :class="{ hidden: !paneopen }">
    <Commit />
  </div>
</template>

<script>
import Commit from './mainpage/commits.vue'
export default {
  components: {
    Commit
  },
  props: {
    paneopen: Boolean
  },
  data() {
    return {
      navigations: [
        {
          name: 'projects',
          path: ''
        },
        {
          name: 'publications',
          path: ''
        },
        {
          name: 'experiences',
          path: ''
        },
        {
          name: 'activies',
          path: ''
        },
        {
          name: 'skills',
          path: ''
        },
        {
          name: 'posts',
          path: ''
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.mainpane {
  position: absolute;
  top: 20px;
  background: #121212;
  width: calc(100% - 900px);
  height: calc(100% - 108px);
  left: 450px;
  border-radius: 4px;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  opacity: 0.99;
  transform-origin: bottom left;
  &.hidden {
    opacity: 0;
    transform: translate(0, 0) scale(0.8);
    transform-origin: bottom left;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  }
}
@media (max-width: 1200px) {
  .mainpane {
    width: calc(100% - 20px);
    left: 0px;
  }
}
</style>
