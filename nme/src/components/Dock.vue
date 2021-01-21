<template>
  <div class="dock">
    <div class="tint" />
    <div class="row">
      <Introduction />
      <div class="activator" @click="activate" :class="{ activated: activated }">
        〈
      </div>
    </div>
    <Contact />
  </div>
</template>
<script>
import Contact from './dock/contact.vue'
import Introduction from './dock/Introduction.vue'
export default {
  props: {
    activated: Boolean
  },
  components: {
    Contact,
    Introduction
  },
  methods: {
    activate() {
      this.$emit('activatePane')
    }
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
  width: calc(100% - 900px);
  transform: translateX(450px);
  position: absolute;
  height: 60px;
  top: calc(100vh - 72px);
  border-radius: var(--global-radius);
  overflow: hidden;
  transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
  backdrop-filter: blur(8px);
  .tint {
    position: absolute;
    background: var(--dock-tint);
    opacity: 0.2;

    width: 100%;
    height: 100%;
    // z-index: -1;
  }
}

@media (max-width: 1500px) {
  .dock {
    width: calc(100% - 300px);
    transform: translateX(150px);
  }
}
@media (max-width: 768px) {
  .dock {
    width: calc(100% - 20px);
    transform: translateX(10px);
  }
}
</style>
