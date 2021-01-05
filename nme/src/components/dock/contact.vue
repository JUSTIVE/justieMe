<template>
  <div class="link">
    <div class="focuser" :class="hoverItem"></div>
    <a href="https://github.com/JUSTIVE" id="github" @mouseover="hover('github')">
      <svg style="width:24px;height:24px" viewBox="0 0 24 24">
        <path
          class="contact-icons"
          d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"
        ></path>
      </svg>
    </a>
    <a href="https://www.facebook.com/ben.kim.37" id="facebook" @mouseover="hover('facebook')">
      <svg style="width:24px;height:24px" viewBox="0 0 24 24">
        <path
          class="contact-icons"
          d="M17,2V2H17V6H15C14.31,6 14,6.81 14,7.5V10H14L17,10V14H14V22H10V14H7V10H10V6A4,4 0 0,1 14,2H17Z"
        ></path>
      </svg>
    </a>
    <a href="https://www.linkedin.com/in/minsang-kim-7b1512117/" id="linkedin" @mouseover="hover('linkedin')">
      <svg style="width:24px;height:24px" viewBox="0 0 24 24">
        <path
          class="contact-icons"
          d="M21,21H17V14.25C17,13.19 15.81,12.31 14.75,12.31C13.69,12.31 13,13.19 13,14.25V21H9V9H13V11C13.66,9.93 15.36,9.24 16.5,9.24C19,9.24 21,11.28 21,13.75V21M7,21H3V9H7V21M5,3A2,2 0 0,1 7,5A2,2 0 0,1 5,7A2,2 0 0,1 3,5A2,2 0 0,1 5,3Z"
        ></path>
      </svg>
    </a>
    <a href="mailto:ben399399@gmail.com" id="mail" @mouseover="hover('mail')">
      <svg style="width:24px;height:24px" viewBox="0 0 24 24">
        <path
          class="contact-icons"
          d="M20,18H18V9.25L12,13L6,9.25V18H4V6H5.2L12,10.25L18.8,6H20M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z"
        ></path>
      </svg>
    </a>
    <a href="https://unsplash.com/@justive_" id="unsplash" @mouseover="hover('unsplash')">
      <svg style="width:24px;height:24px" viewBox="0 0 24 24">
        <path
          class="contact-icons"
          style="transform:scale(0.65)"
          d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"
        ></path>
      </svg>
    </a>
  </div>
</template>

<script>
export default {
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
.focuser {
  z-index: -1;
  background: var(--accent);
  position: absolute;
  width: 0px;
  height: 0px;
  transition: all 0.2s cubic-bezier(0.25, 0.8, 0.25, 1);
  transform-origin: bottom center;
  transition-delay: 1s;
  border-radius: 7px;
  &.github {
    transform: translateX(0px);
  }
  &.facebook {
    transform: translateX(36px);
  }
  &.linkedin {
    transform: translateX(72px);
  }
  &.mail {
    transform: translateX(108px);
  }
  &.unsplash {
    transform: translateX(144px);
  }
}

.link {
  align-self: flex-end;
  display: inline-flex;
  text-align: start;
  color: white;
  margin: 6px;
  height: 36px !important;
  border-radius: 5px;
  z-index: 1;
  &:hover {
    .focuser {
      width: 36px;
      height: 36px;
      transition: all 0.2s cubic-bezier(0.25, 0.8, 0.25, 1);
    }
  }
  svg {
    height: 36px;
    margin: 6px;
  }
  .contact-icons {
    fill: white;
  }
}
</style>
