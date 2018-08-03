var leftpane = document.getElementById("left-area");
var bodyrect = document.getElementsByClassName("item-card")[0].getBoundingClientRect();

var leftpaneAutoOpacity = () => {
    var bodyrect = document.getElementsByClassName("item-card")[0].getBoundingClientRect();
    leftpane.style.opacity = bodyrect.top / window.innerHeight;
};

window.onscroll = leftpaneAutoOpacity;
window.onresize = leftpaneAutoOpacity;

class Myproject {
    constructor(link, name, description) {
        this.link = link;
        this.name = name;
        this.description = description;
    }
}

var ProjectData = [new Myproject(link = "https://github.com/JUSTIVE/GLRERENDERER_LEGACYCHECKER", name = "GLRERENDERER_LEGACYCHECKER", description = "Obj model viewers"), new Myproject(link = "https://github.com/JUSTIVE/PROJECT_GAMEMAKER-V2", name = "PROJECT_GAMEMAKER-V2", description = "Game company simulation game"), new Myproject(link = "https://github.com/JUSTIVE/OS-ya-master---Copy", name = "OS-Ya", description = "Single thread CPU scheduling simulation"), new Myproject("https://github.com/JUSTIVE/ballRollPool", "ballRollPool", "2D rigid body pocketball simulation"), new Myproject("https://github.com/JUSTIVE/Daisy-Chain", "Daisy Chain", "A game made with Unity"), new Myproject("https://github.com/JUSTIVE/splay", "sPlay", "JAVA swing GUI based CS quiz program"), new Myproject("https://github.com/JUSTIVE/VIPMETHOD", "VIPMETHOD", "Smart scheduler using UWP on Raspberry Pi"), new Myproject("https://github.com/JUSTIVE/tictactoe", "TICTACTOE", "Android tic tac toe Game"), new Myproject("https://github.com/JUSTIVE/SmartBadmintonTrainingSystem", "SmartBadmintonTrainingSystem", "Badminton training system"), new Myproject("https://github.com/JUSTIVE/graphics-Catmull-RomSpline", "GRAPHICS-CATMULL-ROMSPLINE", "a visualization Catmull-Rom Spline with OpenGL and GLUT library")];

var projectTemplate = document.querySelector("#project-template");
var projectCard = document.getElementById("project-card");

for (var i = 0; i < ProjectData.length; i++) {
    projectTemplate.content.querySelector('a').href = ProjectData[i].link;
    projectTemplate.content.querySelector(".project-name").innerHTML = ProjectData[i].name;
    projectTemplate.content.querySelector(".project-description").innerHTML = ProjectData[i].description;
    var clone = document.importNode(projectTemplate.content, true);
    projectCard.appendChild(clone);
};
