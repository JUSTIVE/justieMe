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
.simpleCard {
  display: flex;
  padding: 12px;
}
.cardHero {
  width: 48px;
  height: 48px;
}
.cardTextArea {
  display: flex;
  flex-direction: column;
}
.cardTitle {
  font-size: var(--font-size5);
  color: var(--text-color);
}
.cardSubTitle {
  font-size: var(--font-size5);
  color: var(--text-color);
}
</style>
