<template>
  <div class="rightarea">
    <div class="rightarea-inner">
      <div id="tab">
        <!-- <tabitem v-for="(tab, index) in tabs" :key="index" v-on:click="tab_click($event)"/> -->
        <div class=tab-item v-for="(tab, index) in tabs" :key="index" v-on:click="currenttab=index;">
          <div class="tab-icon" v-bind:style="tab.style">
            <span>{{tab.title}}</span>
          </div>
        </div>
      </div>
      <div id="rightarea-content">
        <template v-if="currenttab=='0'">
          <projects/>
        </template> 
      </div>
    </div>
  </div>
</template>

<script>
import projects from "./rightarea/projects.vue";
export default {
  name: "rightarea",
  data: function() {
    return {
      currenttab: 0,
      tabs: [
        {
          title: "projects",
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
span {
  width: auto;
  height: auto;
  border: 0px;
  background: transparent;
  color: #f8f1f1;
  font-family: "Source Code Pro", monospace;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  top: -12px;
}
span:focus {
  outline-style: none;
  cursor: pointer;
}
.tab-icon {
  // display: inline-flex;
  background: red;
  width: 100%;
  height: 25px;
  padding: 4px;
  border-radius: 4px;
}
.rightarea {
  padding: 32px 32px 32px 0px;
  width: 75%;
  height: calc(100%-32px);
  background: #151827;
  border-radius: 4px;
}
.rightarea-inner {
  width: 100%;
  height: 100%;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
#rightarea-content {
  width: 85%;
  height: 100%;
}
.tab-item {
  // width: 100%;
  display: inline-flex;
  flex-direction: row;
  vertical-align: baseline;
}
#tab {
  padding-left: 16px;
  display: inline-flex;
  flex-direction: column;
  height: 90%;
  width: 10%;
  align-items: baseline;
  justify-content: space-evenly;
  overflow: hidden;
  overflow-y: scroll;
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
