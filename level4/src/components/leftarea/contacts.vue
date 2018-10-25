<template>
  <div class="contacts">
    <a v-for="(contact,index) in contactData" :key="index" v-bind:href=contact.link>
      <svg class="contact-svg">
        <path class="contact-icons" v-bind:d=contact.icon></path>
      </svg>
    </a>
  </div>
</template>
<script>
import contactDataJson from "./contact.json";
export default {
  name: "contacts",
  data: function() {
    return {
      contactData: contactDataJson
    };
  }
};
</script>
<style lang="scss" scoped>
.contact-icon {
  fill: white;
}
.contact-svg {
  width: 24px;
  height: 24px;
  fill: hsl(0, 0%, 80%);
}
.contacts {
  height: 64px;
  width: 100%;
  background-color: hsl(229, 20%, 10%);
  z-index: 2;
  margin-top: auto;
  border-radius: 8px;
  display: inline-flex;
  justify-content: space-evenly;
  align-items: center;
}
@media (max-width: 768px) {
  .contacts {
    width: 90%;
    height: 48px;
    margin-left: 5%;
  }
}
</style>
