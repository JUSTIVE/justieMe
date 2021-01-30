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
  margin-bottom: 12px;
  background: var(--foreground);
  border-radius: var(--global-radius);
  box-shadow: var(--elevation1);
  transition: all 0.2s cubic-bezier(0.25, 0.8, 0.25, 1);
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
