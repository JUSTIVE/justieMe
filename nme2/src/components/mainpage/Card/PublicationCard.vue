<template>
  <div class="PublicationCard row">
    <slot name="cardHero" class="cardHero" />
    <div class="cardTextArea">
      <div class="cardTitle">{{ publication.name }}</div>
      <div class="cardSubTitle">{{ publication.journal }}</div>
      <div class="cardSubTitle">{{ publication.author }}</div>
      <div>
        <a
          v-for="(quoteItem, index) in Object.entries(publication.quote)"
          :key="index"
          :href="quoteItem[1]"
          :v-if="quoteItem[2] !== ''"
          class="quotelink"
        >
          <span class="quote">
            {{ quoteItem[0] }}
          </span>
        </a>
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
.cardTitle {
  font-size: var(--font-size5);
  color: var(--text-color);
  font-weight: bold;
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
.cardSubTitle {
  font-size: var(--font-size6);
  color: var(--text-color);
  opacity: 0.6;
}
</style>
