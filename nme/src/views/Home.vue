<template>
  <div class="home">
    <Profile />
  </div>
</template>

<script>
// @ is an alias to /src
import Profile from '@/components/Profile.vue'

export default {
  name: 'Home',
  components: {
    Profile
  }
}
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
}
</style>
