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
  position: sticky;
  top: 0px;
  width: 100%;
  margin-right: 12px;
  display: inline-flex;
  flex-direction: row;
  height: fit-content;
  background: var(--foreground);
  overflow: hidden;
  box-shadow: var(--elevation1);
}
</style>
