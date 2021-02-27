<template>
  <div class="Hero">
    <img src="@/assets/image/profile2.jpg" class="heroImage" />
    <span>
      {{ $store.state.langpack[$store.state.language].name }}
    </span>
  </div>
</template>

<script>
export default {}
</script>

<style>
.Hero {
  color: var(--text-color);
  z-index: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: var(--font-size4);
  font-weight: bold;
}
.heroImage {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  margin-right: 12px;
}
@media (max-width: 768px) {
  .Hero {
    font-size: var(--font-size3);
  }
}
</style>
