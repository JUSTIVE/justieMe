<template>
  <div class="home row">
    <NavigationList :navigations="naviationTabs" @navigationClick="navigate" />
    <router-view class="content" />
  </div>
</template>

<script>
import NavigationList from '@/components/mainpage/navigation.vue'
export default {
  name: 'Home',
  components: {
    NavigationList
  },
  data() {
    return {
      naviationTabs: [
        { name: 'Profile', icon: 'person' },
        { name: 'Contact', icon: 'person' }
      ]
    }
  },
  methods: {
    navigate(name) {
      console.log(name)
      this.$router.push(name)
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  width: calc(100% - 800px);
  transform: translateX(400px);
  height: 100%;
  padding-top: 104px;
  display: flex;
}
.content {
  flex: 1;
  padding: 0px 36px;
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
