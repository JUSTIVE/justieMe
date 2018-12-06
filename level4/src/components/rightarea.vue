<template>
  <div class="rightarea">
    <div class="rightarea-inner">
      <div id="tab">
        <div class=tab-item v-for="(tab, index) in tabs" :key="index" v-on:click="currenttab=index;currentitem=tab.title;">
          <div class="tab-icon" >
            <span>{{tab.title}}</span>
            <div class="underbar" v-bind:style="tab.style"/>
          </div>
        </div>
      </div>
      <div id="rightarea-content">
        <h1>{{currentitem.toUpperCase()}}</h1>
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
      currentitem: "projects",
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
h1 {
  color: white;
  padding-left: 8px;
}
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
  font-family: "Source code Pro", monospace;
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
  display: inline-flex;
  flex-direction: column;
  // width: 100%;
  height: 25px;
  padding: 4px;
  border-radius: 4px;
}
.tab-icon:hover {
  background: hsla(230, 30%, 16%, 0.2);
}
.underbar {
  width: 100%;
  height: 2px;
}
.rightarea {
  position: relative;
  width: 80%;
  height: 90%;
  background: #364069;
  box-shadow: 0px 16px 64px 8px rgba(0, 0, 0, 0.3);
  border-radius: 32px;
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
  display: inline-flex;
  flex-direction: column;
  padding: 32px 32px 32px 0px;
  padding-left: 16px;
  overflow: hidden;
  width: 90%;
  height: calc(100%-64px);
}
.tab-item {
  display: inline-block;
  flex-direction: row;
  vertical-align: baseline;
  margin: 0px 8px 0px 8px;
}
#tab {
  padding-left: 16px;
  padding-right: 32px;
  // background: hsl(228, 33%, 9%);
  display: inline-flex;
  flex-direction: column;
  height: 100%;
  width: auto;
  align-items: baseline;
  justify-content: space-evenly;
  // overflow: hidden;
  overflow-y: scroll;
  border-radius: 32px 0px 0px 32px;
}
@media (max-width: 768px) {
  h1 {
    padding-left: 24px;
  }
  #tab {
    flex-direction: row;
    height: 48px;
    padding-top: 8px;
    padding-bottom: 8px;
    overflow-x: scroll;
    overflow-y: hidden;
    justify-content: flex-start;
  }
  .tab-item {
    height: 24px;
  }
  .tab-icon {
    margin-right: 4px;
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
    padding-top: 0px;
    padding-left: 0px;
    padding-bottom: 8px;
    width: 100%;
    height: 100%;
  }
}
</style>
