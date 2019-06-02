<template>
  <div class="pangea" v-on:scroll="onscroll">
    <Profile/>
    <!-- <contacts/> -->
  </div>
</template>

<script>
import Profile from "./Profile.vue";
import rightarea from "./rightarea.vue";
// import contacts from "./leftarea/contacts.vue";
export default {
  name: "pangea",
  components: {
    Profile,
    rightarea
    // contacts
  },
  methods: {
    onscroll: function() {
      var pangea = document.getElementsByClassName("pangea")[0];
      pangea.style.height = "100vh";
    }
  }
};
</script>


<style scoped lang="scss">
.pangea {
  height: 100%;
  width: 100%;
}
</style>
