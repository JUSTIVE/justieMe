<template>
  <div class="publication">
    <div class="filters">
      <div
        v-for="(item, index) in publicationFilters"
        :key="index + 'f'"
        class="publicationFilter"
        :class="{ enabled: item.enabled }"
        @click="filterClick(index)"
      >
        <span class="highlighter"></span>
        <span class="filtername">{{ item.title }}</span>
      </div>
    </div>
    <div class="publicationContents">
      <PublicationCard v-for="(item, index) in FilteredPulications" :key="index + 'c'" :publication="item" />
    </div>
  </div>
</template>

<script>
import PublicationCard from '../Card/PublicationCard.vue'
export default {
  components: {
    PublicationCard
  },
  computed: {
    publicationFilters() {
      return this.$store.getters.publicationFilters
    },
    FilteredPulications() {
      return this.$store.getters.publicationAll
    }
  },
  methods: {
    filterClick(index) {
      this.$store.commit('UPDATE_PUBLICATION_FILTER', index)
    }
  }
}
</script>

<style lang="scss" scoped>
.publication {
  display: flex;
  flex-direction: row-reverse;
}
.publicationContents {
  display: flex;
  flex-direction: column;
  padding-bottom: 92px;
  flex: 1;
}
.filters {
  position: sticky;
  display: flex;
  flex-direction: column;
  top: 0px;
  background: var(--foreground);
  height: fit-content;
  margin-left: 12px;
  width: 200px;
  color: var(--text-color);
  font-weight: normal;
  font-size: var(--font-size5);
  border-radius: var(--global-radius);
  box-shadow: var(--elevation1);
  overflow: hidden;
}
.publicationFilter {
  display: flex;
  padding: 12px;
  height: 24px;
  justify-content: start;
  align-items: center;
  opacity: 0.5;
  transition: all 0.2s cubic-bezier(0.25, 0.8, 0.25, 1);
  font-size: var(--font-size6);
  filter: saturate(0);
  &:hover {
    cursor: pointer;
    background: var(--foreground-hover);
  }
  &.enabled {
    opacity: 1;
    filter: saturate(1);
  }
}
.highlighter {
  width: 10px;
  height: 10px;
  margin-right: 10px;
  background: var(--accent);
  border-radius: var(--global-radius);
}
@media (max-width: 1600px) {
  .publication {
    flex-direction: column;
  }
  .filters {
    position: sticky;
    width: 100%;
    height: 48px;
    flex-direction: row;
    margin: 0px;
    margin-bottom: 12px;
    justify-content: space-evenly;
    z-index: 1;
    overflow: initial;
  }
  .publicationFilter {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    &:first-of-type {
      border-top-left-radius: var(--global-radius);
      border-bottom-left-radius: var(--global-radius);
    }
    &:last-of-type {
      border-top-right-radius: var(--global-radius);
      border-bottom-right-radius: var(--global-radius);
    }
  }
}
@media (max-width: 768px) {
  .publication {
    margin-top: -12px;
    flex-direction: column;
  }
  .filters {
    position: sticky;
    top: 51px;
    width: 100%;
    margin: 0px;
    border-radius: 0px;
    margin-bottom: 12px;
    justify-content: space-evenly;
    z-index: 1;
  }
  .publicationFilter {
    width: initial;
    display: inline-flex;
    flex: 1;
  }
}
@media (max-width: 400px) {
  .filters {
    height: 60px !important;
  }
  .publicationFilter {
    flex-direction: column-reverse;
    height: 40px;
    padding-top: 6px;
    padding-bottom: 0px;
    justify-content: space-between;
    text-align: center;
  }
  .highlighter {
    height: 2px;
    width: 18px;
    // margin-top: 4px;
    margin-right: 0px;
  }
}
</style>
