<template>
  <div class="tabitem ">
    <div class="tab-icon" v-bind:style="tab.style"></div>
    <span>{{tab.title}}</span>
  </div>
</template>

<script>
export default {
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
  }
};
</script>
