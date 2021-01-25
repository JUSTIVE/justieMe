<template>
  <div class="navigation">
    <NavigationItem
      v-for="(item, index) of navigations"
      :key="index"
      @click="ItemClick()"
      :icon="item.icon"
      :name="item.name"
    />
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
      this.$emit('navigationClick', { item })
    }
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
}
</style>
