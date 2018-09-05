<template>
  <div class="rightarea">
    <div id="tab">
      <button v-for="tab in tabs" :key="tab.id">{{tab}}</button>
    </div>
    <projects/>
    <!-- <div class="rightarea-container">
      
    </div> -->
    
  </div>
</template>

<script>
import projects from "./rightarea/projects.vue";
export default {
  name: "rightarea",
  data: function() {
    return {
      tabs: [
        "projects",
        "publications",
        "experiences",
        "skills",
        "activities",
        "techies"
      ]
    };
  },
  components: {
    projects
  }
};
</script>

<style scoped lang="scss">
ul {
  -webkit-margin-before: 0px;
  -webkit-margin-after: 0px;
  -webkit-padding-start: 0px;
}
button {
  width: auto;
  height: auto;
  border: 0px;
  background: transparent;
  color: #f8f1f1;
  font-family: "Source Code Pro", monospace;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
}
button:focus {
  outline-style: none;
  cursor: pointer;
}
.rightarea {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100%;
  background: #151827;
  border-radius: 16px;
}
#tab {
  height: 56px;
  // background: red;
  width: 90%;
  align-items: baseline;
  justify-content: space-around;
}
@media (max-width: 768px) {
  .rightarea {
    width: 100%;
    height: 50%;
  }
}
</style>
