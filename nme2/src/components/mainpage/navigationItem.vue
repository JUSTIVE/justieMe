<template>
  <div class="navigationItem">
    <IconM :type="icon" />
    {{ name }}
  </div>
</template>

<script>
export default {
  props: {
    icon: String,
    name: String
  }
}
</script>

<style lang="scss" scoped>
.navigationItem {
  width: 200px;
  display: flex;

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
    margin-right: 10px;
  }
  /deep/i {
    color: var(--text-color);
  }
}
</style>
