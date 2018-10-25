<template>
    <div class="projects">
      <ul id="project-list">
        <li class="project-list-item" v-for="(project,index) in projects" :key="index" v-on:click ="currentProject=index;clickProject(index);getMD('https://raw.githubusercontent.com/JUSTIVE/'+project.name+'/master/README.md')">
            <h6 class="project-name">{{project.name}}</h6>
            <h6 class="project-description">{{project.description}}</h6>
            <div>
              <h6 class="project-lang" v-for="lang in project.language" :key="lang.id">{{lang}}</h6>
            </div>
        </li>
      </ul>
      <div class="project-content">
          <!-- <h1 style="webkit-margin-before:0px;" >{{projectTitle}}</h1> -->
          <VueMarkdown class="project-description" v-bind:source="projectDescription"/>
      </div>
    </div>            
</template>

<script>
import projectDataJson from "./project.json";
import axios from "axios";
import VueMarkdown from "vue-markdown";
export default {
  name: "projects",
  data: function() {
    return {
      projectTitle: "TITLE",
      currentProject: 0,
      projectDescription: "click any project to view description",
      projects: projectDataJson,
      status: ""
    };
  },
  methods: {
    clickProject: function(id) {
      this.projectTitle = this.projects[id].name;
      this.projectDescription = this.projects[id].description;
    },
    getMD: function(link) {
      axios.get(link).then(
        response => {
          this.projectDescription = response.data;
        },
        error => {
          this.projectDescription = "seem to be private repo";
          this.status = error;
        }
      );
    }
  },
  components: {
    VueMarkdown
  }
};
</script>

<style lang="scss">
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
  word-break: break-all;
  word-wrap: break-word;
}
h6 {
  -webkit-margin-before: 0px;
  -webkit-margin-after: 0px;
  font-size: 12px;
  font-weight: 500;
}
ul {
  list-style: none;
  -webkit-margin-before: 0px;
  -webkit-padding-start: 0px;
}
p {
  word-break: break-all;
  word-wrap: break-word;
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
  font-weight: 700;
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
  overflow-y: scroll;
  padding-right: 8px;
}
.project-description {
  font-family: "Source Code Pro", monospace;
  h1 {
    font-size: 20px;
  }
  h2 {
    font-size: 18px;
  }
  h3 {
    font-size: 16px;
  }
  h4,
  h5,
  h6 {
    font-size: 14px;
  }
  p {
    font-size: 12px;
  }
  
}
</style>
