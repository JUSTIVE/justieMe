<template>
  <div class="navigationItem" @click="navigateTo" :class="{ active: $route.name == item.path }">
    <IconM :type="item.icon" :size="16" />
    <span class="name">{{ item.name }}</span>
  </div>
</template>

<script>
export default {
  props: {
    item: Object
  },
  methods: {
    navigateTo() {
      if (this.$router.history.current.name != this.item.path) {
        this.$router.push(this.item.path)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.navigationItem {
  width: 173px;
  display: inline-flex;
  background: var(--foreground);
  color: var(--text-color);
  height: 24px;
  justify-content: start;
  align-items: center;
  padding: 12px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  border-left: solid 3px transparent;
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
  &.active {
    border-left: solid 3px var(--accent);
    border-bottom: hidden;
  }
  .name {
    font-size: var(--font-size5);
  }
}
@media (max-width: 768px) {
  .navigationItem {
    justify-content: center;
    padding: 6px 6px 18px 6px;
    align-items: center;
    border-bottom: solid 3px transparent;
    border-left: none !important;
    flex-direction: column;
    &.active {
      border-bottom: solid 3px var(--accent);
    }
    /deep/span {
      font-size: var(--font-size4) !important;
      margin: 5px;
    }
    .name {
      font-size: var(--font-size6) !important;
      margin: 2px;
    }
  }
}
</style>
