<template>
  <div class="home">
    <!-- <Profile /> -->
    <Navigation :navigations="naviationTabs" />
    <router-view />
  </div>
</template>

<script>
import Navigation from '@/components/mainpage/navigation.vue'
// import MainRoute from '@/components/MainRoute.vue'
export default {
  name: 'Home',
  components: {
    Navigation
  },
  data() {
    return {
      naviationTabs: [{ name: 'Profile', icon: 'hero' }]
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  width: calc(100% - 800px);
  transform: translateX(400px);
  height: 100%;
  margin-top: 90px;
}
@media (max-width: 1500px) {
  .home {
    width: calc(100% - 400px);
    transform: translateX(200px);
  }
}
@media (max-width: 1200px) {
  .home {
    width: calc(100% - 100px);
    transform: translateX(50px);
  }
}
@media (max-width: 768px) {
  .home {
    width: 100%;
    transform: translateX(0px);
  }
}
</style>
