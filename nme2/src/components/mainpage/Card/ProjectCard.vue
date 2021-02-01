<template>
  <div class="ProjectCard row">
    <slot name="cardHero" class="cardHero" />
    <img src="@/assets/image/profile.jpg" class="cardImage" />
    <div class="cardTextArea">
      <div class="cardTitle">{{ item.name }}</div>
      <div class="cardSubTitle">{{ item.description }}</div>
      <div class="languages">
        <span v-for="(language, index) in item.language" :key="index + 'l'" class="language">
          <div class="colorBead" :class="`${language}-lang`"></div>
          <span class="languageName">{{ language }}</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: Object
  },
  data() {
    return {
      thumbnail: undefined
    }
  },
  mounted() {
    // const ogs = require('open-graph-scraper-lite')
    // const options = {
    //   url: this.item.link,
    //   headers: {
    //     'Access-Control-Allow-Origin': '*',
    //     Vary: 'Origin'
    //   }
    // }
    // ogs(options).then((data) => {
    //   const { error, result, response } = data
    //   console.log('error:', error) // This is returns true or false. True if there was a error. The error it self is inside the results object.
    //   console.log('result:', result) // This contains all of the Open Graph results
    //   console.log('response:', response) // This contains the HTML of page
    // })
    let axios = require('axios')

    axios
      .fetch(this.item.link, {
        'Access-Control-Allow-Origin': '*'
      })
      .then((response) => {
        console.log(response.data)
        // this.$store.commit('UPDATE_CALENDAR', response.data)
        // console.log(this.$route)
      })
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/theme.scss';
.ProjectCard {
  @include cardy();
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
}
.cardHero {
  width: 48px;
  height: 48px;
}
.cardImage {
  height: 200px;
  border-top-right-radius: var(--global-radius);
  border-top-left-radius: var(--global-radius);
  object-fit: cover;
}
.cardTextArea {
  padding: 12px;
  display: flex;
  flex-direction: column;
  // margin-left: 12px;
  line-height: 18px;
  justify-content: center;
}
.cardTitle {
  font-size: var(--font-size5);
  color: var(--text-color);
  font-weight: bold;
}
.cardSubTitle {
  font-size: var(--font-size6);
  color: var(--text-color);
  opacity: 0.6;
}
.languages {
  color: var(--text-color);
  font-size: 10px;
  margin-top: 8px;
}
.language {
  display: inline-flex;
  background: var(--foreground2);
  padding-right: 8px;
  margin-right: 8px;
  border-radius: 3px;
  align-items: center;
  justify-content: flex-start;
}
.languageName {
  line-height: var(--font-size6);
}
.colorBead {
  width: 10px;
  height: 14px;
  margin-right: 8px;
  display: inline-block;
  background: var(--accent);
  border-radius: 3px;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
}
</style>
