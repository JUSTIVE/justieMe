<template>
  <div class="PublicationCard row">
    <slot name="cardHero" class="cardHero" />
    <div class="cardTextArea">
      <div class="cardCategory">{{ publication.category }}</div>
      <div class="cardTitle">{{ publication.name }}</div>
      <div class="cardSubTitle">{{ publication.journal }}</div>
      <div class="cardSubTitle">{{ publication.author }}</div>
      <div class="cardQuote">
        <span v-for="(quoteItem, index) in Object.entries(publication.quote)" :key="index" class="quotelink">
          <span class="quote" v-if="quoteItem[1] !== ''">
            {{ quoteItem[0] }}
          </span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    publication: Object
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/theme.scss';
.PublicationCard {
  @include cardy();
  display: flex;
  padding: 12px;
  margin-bottom: 12px;
}
.cardHero {
  width: 48px;
  height: 48px;
}
.cardTextArea {
  display: flex;
  flex-direction: column;
  margin-left: 12px;
  line-height: 18px;
  justify-content: center;
}
.cardCategory {
  font-size: var(--font-size6);
  color: var(--text-color);
  opacity: 0.4;
  margin-bottom: 8px;
}
.cardTitle {
  font-size: var(--font-size5);
  color: var(--text-color);
  font-weight: bold;
  margin-bottom: 12px;
}
.cardSubTitle {
  font-size: var(--font-size6);
  color: var(--text-color);
  line-height: 14px;
  opacity: 0.6;
}
.cardQuote {
  margin-top: 8px;
  display: flex;
}
.quotelink {
  text-decoration: none;
}
.quote {
  color: var(--accent);
  font-size: var(--font-size6);
  font-weight: normal;
  margin-right: 8px;
}
</style>
