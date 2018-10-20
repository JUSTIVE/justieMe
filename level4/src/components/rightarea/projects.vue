<template>
    <div class="projects">
      <ul id="project-list">
        <li class="project-list-item" v-for="(project,index) in projects" :key="index" v-on:click ="currentProject=index;clickProject(index);">
            <h6 class="project-name">{{project.name}}</h6>
            <h6 class="project-description">{{project.description}}</h6>
            <div>
              <h6 class="project-lang" v-for="lang in project.language" :key="lang.id">{{lang}}</h6>
            </div>
        </li>
      </ul>
      <div class="project-content">
          <h1 style="webkit-margin-before:0px;" >{{projectTitle}}</h1>
          <p class="project-description">
            {{projectDescription}}
          </p>
      </div>
    </div>            
</template>

<script>
export default {
  name: "projects",
  data: function() {
    return {
      projectTitle: "TITLE",
      currentProject: 0,
      projectDescription: "",
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
        },
        {
          link: "https://github.com/JUSTIVE/Flutters",
          name: "Flutters",
          description: "flutter challenges, tests, and so on",
          language: ["dart"]
        }
      ]
    };
  },
  methods: {
    clickProject: function(id) {
      this.projectTitle = this.projects[id].name;
      this.projectDescription = this.projects[id].description;
    }
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
  display: inline-block;
  color: #769ecd;
  font-family: "Source Code Pro", monospace;
  overflow: hidden;
}
h6 {
  -webkit-margin-before: 0px;
  -webkit-margin-after: 0px;
  font-size: 12px;
}
ul {
  list-style: none;
  -webkit-margin-before: 0px;
  -webkit-padding-start: 0px;
}
#project-list {
  -webkit-padding-start: 10px;
  height: 100%;
  overflow: hidden;
  overflow-y: scroll;
}
.projects {
  display: flex;
  flex-direction: row;
  height: 100%;
  // margin-left: 5%;
  // margin-right: 5%;
  // align-items: center;
}
.project-list-item {
  border-width: 4px;
  border-radius: 4px;
  padding: 8px;
  margin-bottom: 16px;
}
.project-list-item:hover {
  background: hsl(230, 28%, 26%);
}
.project-name {
  color: #769ecd;
}
.project-description {
  color: #9aa0bf;
}
.project-lang {
  color: #fcd970;
}
.project-content {
  margin-left: 16px;
  width: 90%;
  height: 100%;
  overflow: hidden;
}
.project-description {
  font-family: "Source Code Pro", monospace;
  color: #9aa0bf;
}
</style>
