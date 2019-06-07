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
  
  bottom:16px;
  height: 64px;
  width: 300px;
  z-index: 0;
  margin-bottom: 16px;
  border-radius: 8px;
  display: inline-flex;
  justify-content: space-evenly;
  box-shadow: 0px 5px 15px hsla(228, 32%, 15%, 0.3);
  align-items: center;
}
@media (max-width: 768px) {
  .contacts {
    width: 60%;
    height: 48px;
    background-color: hsl(228, 32%, 20%);
    // margin-left: 5%;
  }
}
</style>
