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
        <h4>{{interests}}</h4>
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
      ],
      interests:
        "His research interests are in computer graphics, physically-based modeling and simulation, and android applications."
    };
  }
};
</script>

<style scoped lang="scss">
h1 {
  color: white;
  font-family: "Source Code Pro", monospace;
  font-weight: 300;
}
h4 {
  color: white;
  font-family: "Source Code Pro", monospace;
  font-weight: 300;
  font-size: 12px;
}

li {
  list-style: none;
}
#hero {
  margin: 20%;
  margin-top: 50%;
}
.leftarea {
  justify-content: center;
  display: inline-flex;
  width: 50%;
  height: 100%;
}
@media (max-width: 768px) {
  #hero {
    margin-top: 20%;
  }
  .leftarea {
    justify-content: center;
    display: inline-flex;
    width: 100vw;
    height: 50%;
  }
}
</style>
