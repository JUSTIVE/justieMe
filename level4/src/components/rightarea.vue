<template>
  <div class="rightarea">
    <div id="tab">
      <tabitem v-for="(tab, index) in tabs" :key="index" v-on:click="tab_click($event)"/>
      <!-- <div class=tab-item v-for="(tab, index) in tabs" :key="index" v-on:click="tab_click($event)"> -->
        <!-- <div class="tab-icon" v-bind:style="tab.style"></div> -->
        <!-- <span>{{tab.title}}</span> -->
      <!-- </div> -->
    </div>
    <template v-if="currenttab=='0'">
      <projects/>
    </template> 
  </div>
</template>

<script>
import projects from "./rightarea/projects.vue";
import tabitem from "./rightarea/tab.vue";
export default {
  name: "rightarea",
  data: function() {
    return {
      currenttab: 0
    };
  },
  methods: {
    tab_click: function(event) {
      alert(event.target);
      this.currenttab = event.target.index;
    }
  },
  components: {
    projects,
    tabitem
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
}
span:focus {
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
