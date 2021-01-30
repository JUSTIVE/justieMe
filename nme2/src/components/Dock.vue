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
  z-index: 1;
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

.dock {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: calc(100% - 800px);
  position: absolute;
  height: 80px;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  background: var(--foreground);
  margin-bottom: 10px;
  padding: 0px 400px;
}
@media (max-width: 1600px) {
  .dock {
    width: calc(100% - 400px);
    padding: 0px 200px;
  }
}
@media (max-width: 1200px) {
  .dock {
    width: calc(100% - 100px);
    padding: 0px 50px;
  }
}
@media (max-width: 768px) {
  .dock {
    width: calc(100% - 24px);
    padding: 0px 12px;
  }
  .right {
    margin-right: 12px;
  }
}
</style>
