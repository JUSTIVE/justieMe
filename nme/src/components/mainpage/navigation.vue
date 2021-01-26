<template>
  <div class="navigation">
    <NavigationItem v-for="(item, index) of navigation" :key="index" @click="ItemClick()" :icon="' '" :name="' '" />
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
  },
  methods: {
    ItemClick(item) {
      this.$emit('NavigationClick', item)
    }
  }
}
</script>

<style lang="scss" scoped>
.navigation {
  width: 200px;
  display: flex;
  flex-direction: column;
  border-radius: var(--global-radius);
  background: var(--foreground);
}
</style>
