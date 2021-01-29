<template>
  <div class="Hero">{{ $store.state.langpack[$store.state.language].name }}</div>
  <!-- <img class="selfie" src="./../../assets/image/profile.jpg" /> -->
</template>

<script>
export default {}
</script>

<style>
.Hero {
  margin: 12px;
  color: var(--text-color);
  z-index: 1;
  height: fit-content;
  font-size: var(--font-size4);
  font-weight: bold;
}
@media (max-width: 768px) {
  .Hero {
    font-size: var(--font-size3);
  }
}
</style>
