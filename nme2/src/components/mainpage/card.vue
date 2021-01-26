<template>
  <div class="Card"></div>
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
  padding: 12px;
}
</style>
