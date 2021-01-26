<template>
  <div class="navigationItem" @click="navigateTo">
    <IconM :type="item.icon" :size="16" />
    <span>{{ item.name }}</span>
  </div>
</template>

<script>
export default {
  props: {
    item: Object
  },
  methods: {
    navigateTo() {
      console.log('navigationClick', this.item)
      this.$router.push(this.item.path)
    }
  }
}
</script>

<style lang="scss" scoped>
.navigationItem {
  width: 200px;
  display: inline-flex;

  background: var(--foreground);
  color: var(--text-color);
  height: 24px;
  justify-content: start;
  align-items: center;
  padding: 12px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    background: var(--foreground-hover);
  }
  /deep/span {
    margin: 6px;
    margin-right: 10px;
  }
  i {
    color: var(--text-color);
  }
}
</style>
