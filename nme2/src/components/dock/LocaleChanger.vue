<template>
  <div class="localeChanger" @click="updateLocale">{{ locales[$store.state.language] }}</div>
</template>

<script>
export default {
  data() {
    return {
      locales: ['🇺🇸', '🇰🇷', '🇯🇵', '🇫🇷']
    }
  },
  methods: {
    updateLocale() {
      this.$store.commit('UPDATE_LOCALE')
    }
  }
}
</script>

<style lang="scss" scoped>
.localeChanger {
  cursor: pointer;
  color: var(--text-color);
  font-size: var(--font-size5);
}
</style>
