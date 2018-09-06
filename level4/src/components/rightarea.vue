<template>
  <div class="rightarea">
    <div id="tab">
      <div class=tab-item v-for="tab in tabs" :key="tab.id">
        <div class="tab-icon" v-bind:style="tab.style"></div>
        <button>{{tab.title}}</button>
      </div>
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
        {
          title: "personal projects",
          style: {
            background: "#ffC107"
          }
        },
        {
          title: "publications",
          style: {
            background: "#e25282"
          }
        },
        {
          title: "experiences",
          style: {
            background: "#fa8764"
          }
        },
        {
          title: "skills",
          style: {
            background: "#ce76dd"
          }
        },
        {
          title: "activities",
          style: {
            background: "#6fa6ff"
          }
        },
        {
          title: "techies",
          style: {
            background: "#ade46e"
          }
        }
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
.tab-icon {
  background: red;
  width: 12px;
  height: 12px;
  border-radius: 8px;
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
.tab-item {
  display: inline-flex;
  flex-direction: row;
  align-items: center;
}
#tab {
  display: inline-flex;
  height: 56px;
  width: 90%;
  align-items: baseline;
  justify-content: space-between;
  overflow: hidden;
  overflow-x: scroll;
}
@media (max-width: 768px) {
  #tab {
    padding-top: 8px;
  }
  .rightarea {
    width: 100%;
    height: 50%;
  }
}
</style>
