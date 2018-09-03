<template>
  <div class="leftarea">
    <div id="hero">
        <h1>{{name}}</h1>
        <li v-for="desc in description" :key="desc.id">
            <h4>
                {{desc.duration}}<br>
                {{desc.spec}}
            </h4>
        </li>
    </div>
  </div>
</template>

<script>
export default {
  name: "leftarea",
  data: function() {
    return {
      name: "KIM MIN SANG",
      description: [
        {
          duration: "2014~2017",
          spec:
            "B.S in Dept of Computer Software Engineering in Soonchunhyang University."
        },
        {
          duration: "2017~Current",
          spec:
            "M.S Course in Dept of Computer Science in Soonchunhyang University."
        }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css?family=Source+Code+Pro");
h1 {
  color: white;
  font-family: "Source Code Pro", monospace;
}
h4 {
  color: white;
  font-family: "Source Code Pro", monospace;
}
li {
  list-style: none;
}
.leftarea {
  padding: 20%;
  padding-left: 15%;
  justify-content: center;
  display: inline-flex;
  width: 50%;
  height: 100%;
}
</style>
