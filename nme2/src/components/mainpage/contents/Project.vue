<template>
  <div class="project">
    <div class="languageFilters">
      <div class="languageFiltersInner">
        <span v-for="(item, index) in $store.getters.projectLanguages" :key="index + 'p'" class="languageChip">
          {{ item }}
        </span>
      </div>
    </div>
    <div class="projectContent">
      <ProjectCard v-for="(item, index) in $store.getters.projectAll" :item="item" :key="index" />
    </div>
  </div>
</template>

<script>
import ProjectCard from '../Card/ProjectCard.vue'
export default {
  components: {
    ProjectCard
  }
}
</script>

<style lang="scss" scoped>
.project {
  display: flex;
  flex-direction: row-reverse;
  flex: 1;
}
.languageFilters {
  position: sticky;
  width: 100px;
  margin-left: 12px;
  height: fit-content;
  justify-content: center;
  align-items: flex-start;
  display: inline-flex;
  flex-direction: column;
  top: 0px;
  color: var(--text-color);
  background: var(--foreground);
  margin-bottom: 12px;
  border-radius: var(--global-radius);
  z-index: 1;
}
.languageChip {
  width: 76px;
  height: 24px;
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  padding: 4px 12px;
  font-size: var(--font-size6);
  &:hover {
    background: var(--foreground-hover);
  }
}
.projectContent {
  flex: 1;
  display: flex;
  flex-direction: column;
}
@media (max-width: 499px) {
  .project {
    margin-top: -12px;
    flex-direction: column;
    height: auto;
    // height: min-content;
  }
  .languageFilters {
    width: 100%;
    top: 51px;
    border-radius: 0px;
    margin: 0px;
    overflow: auto;
    margin-bottom: 12px;
    &::-webkit-scrollbar {
      display: none;
    }
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
  .languageFiltersInner {
    width: fit-content;
    display: flex;
    flex: 1;
  }
  .languageChip {
    justify-content: center;
    padding: 0px;
    height: 48px;
  }
  .projectContent {
    height: fit-content;
  }
}
</style>
