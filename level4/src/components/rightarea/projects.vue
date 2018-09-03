<template>
    <div class="projects">
        <div class="frame">
            <h1>TITLE</h1>
        </div>
        
        <ul id="project-list">
            <li v-for="project in projects" :key="project.id" >
                <h6>{{project.name}}</h6>
            </li>
        </ul>
    </div>            
</template>

<script>
export default {
  name: "projects",
  data: function() {
    return {
      projects: [
        {
          link: "https://github.com/JUSTIVE/GLRERENDERER_LEGACYCHECKER",
          name: "GLRERENDERER_LEGACYCHECKER",
          description: "Obj model viewers",
          language: ["c"]
        },
        {
          link: "https://github.com/JUSTIVE/PROJECT_GAMEMAKER-V2",
          name: "PROJECT_GAMEMAKER-V2",
          description: "Game company simulation game",
          language: ["cpp"]
        },
        {
          link: "https://github.com/JUSTIVE/OS-ya-master---Copy",
          name: "OS-Ya",
          description: "Single thread CPU scheduling simulation",
          language: ["csharp"]
        },
        {
          link: "https://github.com/JUSTIVE/ballRollPool",
          name: "ballRollPool",
          description: "2D rigid body pocketball simulation",
          language: ["cpp"]
        },
        {
          link: "https://github.com/JUSTIVE/Daisy-Chain",
          name: "Daisy Chain",
          description: "A game made with Unity",
          language: ["csharp", "shaderlab", "hlsl"]
        },
        {
          link: "https://github.com/JUSTIVE/splay",
          name: "sPlay",
          description: "JAVA swing GUI based CS quiz program",
          language: ["java"]
        },
        {
          link: "https://github.com/JUSTIVE/VIPMETHOD",
          name: "VIPMETHOD",
          description: "Smart scheduler using UWP on Raspberry Pi",
          language: ["csharp"]
        },
        {
          link: "https://github.com/JUSTIVE/tictactoe",
          name: "TICTACTOE",
          description: "Android tic tac toe Game",
          language: ["java"]
        },
        {
          link: "https://github.com/JUSTIVE/SmartBadmintonTrainingSystem",
          name: "SmartBadmintonTrainingSystem",
          description: "Badminton training system",
          language: ["csharp"]
        },
        {
          link: "https://github.com/JUSTIVE/graphics-Catmull-RomSpline",
          name: "GRAPHICS-CATMULL-ROMSPLINE",
          description: "a visualization Catmull-Rom Spline",
          language: ["cpp"]
        },
        {
          link: "https://github.com/JUSTIVE/framelessCounter",
          name: "FramelessCounter",
          description: "a frameless wpf timer always on top",
          language: ["csharp"]
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
a,
li,
u {
  text-decoration-style: none;
  text-decoration: none !important;
  font-family: "Source Code Pro", monospace;
  color: white;
}
::-webkit-scrollbar {
  width: 0px;
}
h1 {
  color: white;
  font-family: "Source Code Pro", monospace;
}
h6 {
  -webkit-margin-before: 0px;
  font-size: 12px;
}
ul {
  list-style: none;
  -webkit-margin-before: 0px;
}
#project-list {
  -webkit-padding-start: 10px;
  height: 70%;
  overflow: hidden;
  overflow-y: scroll;
}
.projects {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: auto;
  margin-left: 5%;
  margin-right: 5%;
}
.frame {
  padding:8px;
  width: 50%;
  border-width: 3px;
  border: white;
  border-style: solid;
}
</style>
