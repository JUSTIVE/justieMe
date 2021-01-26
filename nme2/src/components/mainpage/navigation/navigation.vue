<template>
  <div class="navigation">
    <NavigationItem v-for="(item, index) of navigations" :key="index" :item="item" />
  </div>
</template>

<script>
import NavigationItem from './navigationItem.vue'
export default {
  components: {
    NavigationItem
  },
  props: {
    navigations: Array
  }
}
</script>

<style lang="scss" scoped>
.navigation {
  width: 200px;
  margin-right: 24px;
  display: inline-flex;
  flex-direction: column;
  height: fit-content;
  border-radius: var(--global-radius);
  background: var(--foreground);
  overflow: hidden;
  box-shadow: var(--elevation1);
}
</style>
