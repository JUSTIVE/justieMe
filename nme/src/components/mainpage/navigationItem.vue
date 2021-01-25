<template>
  <div class="navigation">
    {{ icon }}
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
.navigation {
  width: 200px;
  display: flex;
  flex-direction: column;
  border-radius: var(--global-radius);
  background: var(--foreground);
  color: var(--text-color);
}
</style>
