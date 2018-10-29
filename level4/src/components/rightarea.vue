<template>
  <div class="rightarea">
    <div class="rightarea-inner">
      <div id="tab">
        <div class=tab-item v-for="(tab, index) in tabs" :key="index" v-on:click="currenttab=index;">
          <div class="tab-icon" >
            <span>{{tab.title}}</span>
            <div class="underbar" v-bind:style="tab.style"/>
          </div>
        </div>
      </div>
      <div id="rightarea-content">
        <template v-if="currenttab=='0'">
          <projects/>
        </template> 
        <template v-if="currenttab=='1'">
          <publications/>
        </template> 
        <template v-if="currenttab=='2'">
          <experiences/>
        </template> 
      </div>
    </div>
  </div>
</template>

<script>
import projects from "./rightarea/projects.vue";
import publications from "./rightarea/publications.vue";
import experiences from "./rightarea/experiences.vue";
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
    projects,
    publications,
    experiences
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
  width: 100%;
  height: 25px;
  padding: 4px;
  border-radius: 4px;
}
.tab-icon:hover {
  background: hsl(230, 30%, 16%);
}
.underbar {
  width: 100%;
  height: 2px;
}
.rightarea {
  position: relative;
  width: 75%;
  height: 70%;
  background: #151827;
  border-radius: 16px;
  box-shadow: 0px 16px 64px 8px rgba(0, 0, 0, 0.35);
}
.rightarea-inner {
  width: 100%;
  height: 100%;
  display: inline-flex;
  flex-direction: row;
  align-items: left;
  justify-content: center;
  overflow: hidden;
}
#rightarea-content {
  padding: 32px 32px 32px 0px;
  overflow: hidden;
  width: 90%;
  height: calc(100%-64px);
}
.tab-item {
  display: inline-flex;
  flex-direction: row;
  vertical-align: baseline;
}
#tab {
  padding-left: 16px;
  padding-right: 16px;
  background: hsl(228, 33%, 9%);
  display: inline-flex;
  flex-direction: column;
  height: 100%;
  width: auto;
  align-items: baseline;
  justify-content: space-evenly;
  overflow: hidden;
  overflow-y: scroll;
  border-radius: 16px;
}
@media (max-width: 768px) {
  #tab {
    flex-direction: row;
    height: auto;
    padding-top: 8px;
    padding-bottom: 8px;
    overflow-x: scroll;
    overflow-y: hidden;
    justify-content: flex-start;
    border-radius: 0px;
  }
  .tab-icon {
    margin-right: 16px;
  }
  .rightarea {
    width: 100%;
    height: 60%;
    border-radius: 0px;
  }
  .rightarea-inner {
    width: 100%;
    flex-direction: column;
  }
  #rightarea-content {
    width: 100%;
    height: 100%;
  }
}
</style>
