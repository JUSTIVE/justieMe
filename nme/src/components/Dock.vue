<template>
  <div class="dock">
    <div class="tint" />
    <div class="activator" @click="activate" :class="{ activated: activated }">〈</div>
    <Contact />
  </div>
</template>

<script>
import Contact from './dock/contact.vue'
export default {
  props: {
    activated: Boolean
  },
  components: {
    Contact
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
  margin: 6px;
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
    border-radius: 4px;
    transition: all 0.2s cubic-bezier(0.25, 0.8, 0.25, 1);
  }
}
.dock {
  display: flex;
  justify-content: space-between;
  width: calc(100% - 900px);
  left: 450px;
  position: absolute;
  height: 48px;
  top: calc(100vh - 60px);
  border-radius: 4px;
  overflow: hidden;

  .tint {
    position: absolute;
    background: var(--accent-dark);
    width: 100%;
    height: 100%;
    // z-index: -1;
  }
}

@media (max-width: 1200px) {
  .dock {
    left: 0px;
    width: calc(100% - 20px);
  }
}
</style>
