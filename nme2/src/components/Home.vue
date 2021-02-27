<template>
  <div class="home">
    <NavigationList :navigations="this.$store.state.navigationTabs" class="navigation" />
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
  display: flex;
  flex-direction: column-reverse;
  height: 100%;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
.navigation {
  z-index: 2;
}
.content {
  flex: 1;
  transition: all 0.2s cubic-bezier(0.25, 0.8, 0.25, 1);
  overflow-y: scroll;
  padding: 8px;
  &::-webkit-scrollbar {
    visibility: hidden;
    width: 0px;
  }
}
</style>
