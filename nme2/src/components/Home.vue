<template>
  <div class="home row">
    <NavigationList :navigations="this.$store.state.navigationTabs" />
    <transition name="fade" mode="out-in">
      <router-view class="content" />
    </transition>
  </div>
</template>

<script>
import NavigationList from '@/components/mainpage/navigation/navigation.vue'
export default {
  name: 'Home',
  components: {
    NavigationList
  }
}
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
.home {
  width: calc(100% - 800px);
  transform: translateX(400px) translateY(104px);
  height: 100%;
  display: flex;
}
.content {
  flex: 1;
  transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
}
@media (max-width: 1500px) {
  .home {
    width: calc(100% - 400px);
    transform: translateX(200px) translateY(104px);
  }
}
@media (max-width: 1200px) {
  .home {
    width: calc(100% - 100px);
    transform: translateX(50px) translateY(104px);
  }
}
@media (max-width: 768px) {
  .home {
    width: 100%;
    transform: translateX(0px) translateY(104px);
  }
}
</style>
