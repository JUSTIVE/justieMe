<template>
  <div class="pangea" v-on:scroll="onscroll">
    <div id="pangea-container">
        <leftarea/>
        <rightarea/>
        <contacts/>
    </div>
  </div>
  
</template>

<script>
import leftarea from "./leftarea.vue";
import rightarea from "./rightarea.vue";
import contacts from "./leftarea/contacts.vue";
export default {
  name: "pangea",
  components: {
    leftarea,
    rightarea,
    contacts
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
* {
  -webkit-font-smoothing: antialiased;
}
.pangea {
  // background: transparent;
  // background: #292d3e;
  background: white;
  margin-top: 5vh;
  margin-left: 5vw;
  // width: 90vw;
  // height: 90vh;
  border-radius: 16px;
  width: 90vw;
  height: 90vh;
  // box-shadow: 0px 16px 64px 8px rgba(71, 60, 138, 0.35);
  overflow: hidden;
}
#decorator {
  height: 100%;
  display: block;
  float: left;
}
.deco-rect {
  float: left;
  width: 40vw;
  height: 40vw;
  background: linear-gradient(
    135deg,
    rgba(236, 202, 101, 1) 20%,
    rgba(255, 193, 7, 1) 100%
  );
  border-radius: 15vw;
}
#deco-rect1 {
  transform: translateX(5vw) translateY(-30vw) rotate(60deg);
}
#deco-rect2 {
  transform: translateX(-60vw) translateY(50vw) rotate(240deg);
}
#deco-rect3 {
  transform: translateX(85vw) translateY(-15vw) rotate(150deg);
}
#pangea-container {
  position: relative;
  // top: -90vh;
  display: flex;
  width: 90%;
  height: 90%;
  align-items: center;
  margin-left: 5%;
  margin-top: 5%;
}
@media (max-width: 768px) {
  .pangea {
    margin: 0px;
    width: 100vw;
    height: 100vh;
    padding: 0px;
    border-radius: 0px;
  }
  #pangea-container {
    flex-direction: column;
    width: 100%;
    margin-top: 0px;
    margin-left: 0%;
    height: 100%;
  }
}
</style>
