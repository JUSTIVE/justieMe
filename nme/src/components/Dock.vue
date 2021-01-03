<template>
  <div class="dock">
    <div class="tint" />
    <Contact />
  </div>
</template>

<script>
import Contact from './dock/contact.vue'
export default {
  components: {
    Contact
  }
}
</script>

<style lang="scss" scoped>
.dock {
  display: flex;
  width: calc(100% - 900px);
  left: 450px;
  position: absolute;
  height: 48px;
  top: calc(100vh - 60px);
  border-radius: 7px;
  backdrop-filter: blur(7px);
  overflow: hidden;
  .tint {
    position: absolute;
    background: var(--accent);
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: 0.2;
  }
}

@media (max-width: 1200px) {
  .dock {
    left: 0px;
    width: calc(100% - 20px);
  }
}
</style>
