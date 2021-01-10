<template>
  <div>
    {{ comm }}
  </div>
</template>

<script>
export default {
  async created() {
    this.comm = await this.axios.get('http://github-calendar.herokuapp.com/commits/JUSTIVE')
  },
  data() {
    return {
      comm: ''
    }
  }
}
</script>

<style></style>
