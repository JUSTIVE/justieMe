<template>
  <div class="Overview">
    <Card />
    <Card>
      <Calendar slot="content" />
    </Card>
  </div>
</template>

<script>
import Card from '../Card/card.vue'
import Calendar from './Overview/Calendar.vue'
export default {
  components: {
    Card,
    Calendar
  },
  async mounted() {
    console.log('activated')
    let axios = require('axios')

    let response = await axios.get('https://githubapi.ryanchristian.dev/user/JUSTIVE')
    console.log(response.data)
    this.$store.commit('UPDATE_CALENDAR', response.data)
  }
}
</script>

<style lang="scss" scoped>
.Overview {
  border-radius: var(--global-radius);
  height: fit-content;
}
</style>
