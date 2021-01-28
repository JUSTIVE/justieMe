<template>
  <div class="Card">
    <slot name="content"> </slot>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'simple'
    }
  }
}
</script>

<style lang="scss" scoped>
.Card {
  background: var(--foreground);
  border-radius: var(--global-radius);
  box-shadow: var(--elevation1);
  padding: 12px;
  margin-bottom: 12px;
}
</style>
