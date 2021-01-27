<template>
  <div class="Overview">
    <Card />
  </div>
</template>

<script>
import Card from '../card.vue'
export default {
  components: {
    Card
  },
  mounted() {
    console.log('activated')
    let axios = require('axios')

    axios.get('https://githubapi.ryanchristian.dev/user/JUSTIVE').then((response) => {
      console.log(response.data)
    })
  },
  activated() {}
}
</script>

<style lang="scss" scoped>
.Overview {
  background: var(--foreground);
  border-radius: var(--global-radius);
  box-shadow: var(--elevation1);
  height: fit-content;
}
</style>
