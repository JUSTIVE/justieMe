<template>
  <div class="Overview">
    <Card>
      <Calendar slot="content" />
    </Card>
    <Card style="height:2000px" />
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
  mounted() {
    console.log('activated')
    let axios = require('axios')

    axios.get('https://githubapi.ryanchristian.dev/user/JUSTIVE').then((response) => {
      console.log(response.data)
      this.$store.commit('UPDATE_CALENDAR', response.data)
      console.log(this.$route)
    })
  }
}
</script>

<style lang="scss" scoped>
.Overview {
  border-radius: var(--global-radius);
  height: fit-content;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
