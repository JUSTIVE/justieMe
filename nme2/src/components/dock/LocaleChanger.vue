<template>
  <div class="localeChanger" @click="updateLocale"><img class="locale" :src="locales[$store.state.language]" /></div>
</template>

<script>
export default {
  data() {
    return {
      locales: [
        'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/joypixels/275/flag-united-states_1f1fa-1f1f8.png',
        'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/joypixels/275/flag-south-korea_1f1f0-1f1f7.png',
        '🇯🇵',
        '🇫🇷'
      ]
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
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}
.locale {
  width: 30px;
  height: 30px;
}
</style>
