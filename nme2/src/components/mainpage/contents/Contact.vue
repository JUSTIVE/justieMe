<template>
  <div class="link column">
    <SimpleCard :title="$store.state.langpack[$store.state.language].Contacts.Github" subtitle="JUSTIVE">
      <a
        href="https://github.com/JUSTIVE"
        id="github"
        @mouseover="hover('github')"
        class="contact-icons"
        slot="cardHero"
      >
        <svg viewBox="0 0 24 24" class="contact-icons">
          <rect xmlns="http://www.w3.org/2000/svg" width="24" height="24" rx="15%" fill="#1B1817" />
          <path
            xmlns="http://www.w3.org/2000/svg"
            fill="#fff"
            style="transform:scale(0.046875)"
            d="M335 499c14 0 12 17 12 17H165s-2-17 12-17c13 0 16-6 16-12l-1-50c-71 16-86-28-86-28-12-30-28-37-28-37-24-16 1-16 1-16 26 2 40 26 40 26 22 39 59 28 74 22 2-17 9-28 16-35-57-6-116-28-116-126 0-28 10-51 26-69-3-6-11-32 3-67 0 0 21-7 70 26 42-12 86-12 128 0 49-33 70-26 70-26 14 35 6 61 3 67 16 18 26 41 26 69 0 98-60 120-117 126 10 8 18 24 18 48l-1 70c0 6 3 12 16 12z"
          />
        </svg>
      </a>
    </SimpleCard>
    <SimpleCard :title="$store.state.langpack[$store.state.language].Contacts.GMail" subtitle="Ben Kim">
      <a href="mailto:ben399399@gmail.com" id="mail" @mouseover="hover('mail')" class="contact-icons" slot="cardHero">
        <svg viewBox="0 0 24 24" class="contact-icons">
          <rect xmlns="http://www.w3.org/2000/svg" width="24" height="24" rx="15%" fill="#fff" />
          <path
            xmlns="http://www.w3.org/2000/svg"
            style="transform:scale(0.046875)"
            d="M158 391v-142l-82-63V361q0 30 30 30"
            fill="#4285f4"
          />
          <path
            xmlns="http://www.w3.org/2000/svg"
            style="transform:scale(0.046875)"
            d="M 154 248l102 77l102-77v-98l-102 77l-102-77"
            fill="#ea4335"
          />
          <path
            xmlns="http://www.w3.org/2000/svg"
            style="transform:scale(0.046875)"
            d="M354 391v-142l82-63V361q0 30-30 30"
            fill="#34a853"
          />
          <path
            xmlns="http://www.w3.org/2000/svg"
            style="transform:scale(0.046875)"
            d="M76 188l82 63v-98l-30-23c-27-21-52 0-52 26"
            fill="#c5221f"
          />
          <path
            xmlns="http://www.w3.org/2000/svg"
            style="transform:scale(0.046875)"
            d="M436 188l-82 63v-98l30-23c27-21 52 0 52 26"
            fill="#fbbc04"
          />
        </svg>
      </a>
    </SimpleCard>
    <SimpleCard :title="$store.state.langpack[$store.state.language].Contacts.Unsplash" subtitle="JUSTIVE">
      <a
        href="https://unsplash.com/@justive_"
        id="unsplash"
        @mouseover="hover('unsplash')"
        class="contact-icons"
        slot="cardHero"
      >
        <svg viewBox="0 0 24 24">
          <rect xmlns="http://www.w3.org/2000/svg" width="24" height="24" rx="15%" fill="#1B1817" />
          <path
            fill="#fff"
            style="transform:scale(0.5) translate(8px,8px)"
            d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"
          ></path>
        </svg>
      </a>
    </SimpleCard>
  </div>
</template>

<script>
import SimpleCard from '../Card/SimpleCard.vue'
export default {
  components: { SimpleCard },
  data() {
    return {
      hoverItem: ''
    }
  },
  methods: {
    hover(value) {
      this.hoverItem = value
    }
  }
}
</script>

<style lang="scss" scoped>
.link {
  border-radius: var(--global-radius);
  display: flex;
  flex-direction: column;
  text-align: start;
  height: fit-content;
  border-radius: 5px;
  z-index: 1;
  a {
    width: 48px;
  }
  svg {
    height: 36px;
    width: 36px;
    margin: 6px;
  }
}
.contact-icons {
  width: 48px;
  height: 48px;
}
</style>
