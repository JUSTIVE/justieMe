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
@import '@/assets/style/theme.scss';
.Card {
  @include cardy();
  padding: 12px;
  margin-bottom: 12px;
}
</style>
