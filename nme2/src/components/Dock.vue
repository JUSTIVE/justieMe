<template>
  <div class="dock">
    <div class="left row">
      <Hero />
    </div>
    <div class="right row ">
      <ThemeChanger style="margin-right:8px;" />
      <LocaleChanger />
    </div>
  </div>
</template>
<script>
import Hero from './dock/Hero.vue'
import ThemeChanger from './dock/ThemeChanger.vue'
import LocaleChanger from './dock/LocaleChanger.vue'
export default {
  components: {
    Hero,
    ThemeChanger,
    LocaleChanger
  },
  methods: {
    activate() {}
  }
}
</script>

<style lang="scss" scoped>
.activator {
  width: 36px;
  height: 36px;
  margin: 12px;
  margin-left: 0px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
  z-index: 2;
  -webkit-user-select: none;
  transition: all 0.2s cubic-bezier(0.25, 0.8, 0.25, 1);
  transform: rotateZ(90deg);
  cursor: pointer;
  &.activated {
    transform: rotateZ(270deg);
  }
  &:hover {
    background-color: var(--accent-light);
    border-radius: var(--global-radius);
    transition: all 0.2s cubic-bezier(0.25, 0.8, 0.25, 1);
  }
}
.row {
  display: inline-flex;
}

.left {
  height: 100%;
}
.dock {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  background: var(--foreground);
  padding: 0px 20px;
}
</style>
