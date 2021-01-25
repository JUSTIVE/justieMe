<template>
  <div class="dock">
    <div class="row">
      <Hero />
    </div>
  </div>
</template>
<script>
import Hero from './dock/Hero.vue'
export default {
  components: {
    Hero
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
  width: 100%;
  position: absolute;
  height: 80px;
  overflow: hidden;
  transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
  background: var(--foreground);
  margin-bottom: 10px;
}
</style>
