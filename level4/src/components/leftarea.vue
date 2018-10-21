<template>
  <div class="leftarea">
    <div id="hero">
        <h1>{{name}}</h1>
        <ul id="hero-desc">
          <li v-for="desc in description" :key="desc.id">
              <h4 class="duration">{{desc.duration}}</h4>
              <h4 class="spec">{{desc.spec}}</h4>
              <br>
          </li>
        </ul>
        <h4>{{interests}}</h4>
    </div>
    
    <div class="contacts">
      
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
        "His research interests are in computer graphics, physically-based modeling and simulation, android applications, and deep learning"
    };
  }
};
</script>

<style scoped lang="scss">
h1 {
  color: white;
  font-family: "Source Code Pro", monospace;
  font-weight: 700;
  font-size: 48px;
  -webkit-margin-before: 0px;
}
h4 {
  color: #9aa0bf;
  font-family: "Source Code Pro", monospace;
  font-weight: 300;
  font-size: 12px;
  -webkit-margin-before: 0px;
  -webkit-margin-after: 0px;
}
ul {
  -webkit-margin-start: 0px;
  -webkit-padding-start: 0px;
}
li {
  list-style: none;
}
#hero {
  display: inline-flex;
  flex-direction: column;
}
#hero-desc {
  overflow-y: scroll;
}
.duration {
  color: #c78de5;
}
.spec {
  color: #b9e879;
}
.leftarea {
  backdrop-filter: blur(calc(12px));
  background: #292d3e;
  padding: 48px;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  width: 25%;
  height: 60%;
  box-shadow: 0px 16px 64px 8px rgba(0, 0, 0, 0.35);
  border-radius: 16px;
  z-index: 4;
}
.contacts {
  height: 64px;
  width: 100%;
  background-color: hsl(229, 20%, 10%);
  z-index: 2;
  margin-top: auto;
  border-radius: 8px;
  display: inline-flex;
  justify-content: space-between;
}
@media (max-width: 768px) {
  h1 {
    margin-block-end: 8px;
  }
  h4 {
    font-size: 12px;
  }
  #hero {
    margin: 10%;
    margin-top: 20px;
  }
  .leftarea {
    justify-content: center;
    display: inline-flex;
    width: 100vw;
    height: 30%;
  }
}
</style>
