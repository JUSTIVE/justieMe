<template>
  <div class="simpleCard row">
    <slot name="cardHero" class="cardHero" />
    <div class="cardTextArea">
      <div class="cardTitle">{{ title }}</div>
      <div class="cardSubTitle">{{ subtitle }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    subtitle: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/theme.scss';
.simpleCard {
  @include cardy();
  display: flex;
  padding: 12px;
  margin-bottom: 12px;
}
.cardHero {
  width: 48px;
  height: 48px;
}
.cardTextArea {
  display: flex;
  flex-direction: column;
  margin-left: 12px;
  line-height: 18px;
  justify-content: center;
}
.cardTitle {
  font-size: var(--font-size5);
  color: var(--text-color);
  font-weight: bold;
}
.cardSubTitle {
  font-size: var(--font-size6);
  color: var(--text-color);
  opacity: 0.6;
}
</style>
