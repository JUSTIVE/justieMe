var leftpane = document.getElementById("left-area");
var bodyrect = document.getElementsByClassName("item-card")[0].getBoundingClientRect();

function vh(v) {
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    return (v * h) / 100;
}

function vw(v) {
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    return (v * w) / 100;
}

var leftpaneAutoOpacity = ()=>{
    if(window.innerWidth<720){
        var bodyrect = document.getElementsByClassName("item-card")[0].getBoundingClientRect();
        leftpane.style.opacity = (bodyrect.top)/window.innerHeight;
    }
    else{
        var nom= document.getElementById('nom').style;
        targetvalue= Math.min(vw(9),vh(2)*vh(2)*0.4);
        nom.fontSize=targetvalue+'px';
        nom.lineHeight=targetvalue+'px';
        leftpane.style.opacity = 1;
    }
};

window.onscroll = leftpaneAutoOpacity;
// window.onresize = leftpaneAutoOpacity;
window.addEventListener("resize",leftpaneAutoOpacity,"after");
window.onload = leftpaneAutoOpacity;


class Myproject{
    constructor(link,name,description){
        this.link=link;
        this.name=name;
        this.description=description;
    }
}

var ProjectData = [
    new Myproject(
        link="https://github.com/JUSTIVE/GLRERENDERER_LEGACYCHECKER",
        name="GLRERENDERER_LEGACYCHECKER",
        description="Obj model viewers"),
    new Myproject(
        link="https://github.com/JUSTIVE/PROJECT_GAMEMAKER-V2",
        name="PROJECT_GAMEMAKER-V2",
        description="Game company simulation game"),
    new Myproject(
        link="https://github.com/JUSTIVE/OS-ya-master---Copy",
        name="OS-Ya",
        description="Single thread CPU scheduling simulation"),
    new Myproject("https://github.com/JUSTIVE/ballRollPool",
        "ballRollPool",
        "2D rigid body pocketball simulation"),
    new Myproject("https://github.com/JUSTIVE/Daisy-Chain",
        "Daisy Chain",
        "A game made with Unity"),
    new Myproject("https://github.com/JUSTIVE/splay",
        "sPlay",
        "JAVA swing GUI based CS quiz program"),
    new Myproject("https://github.com/JUSTIVE/VIPMETHOD",
        "VIPMETHOD",
        "Smart scheduler using UWP on Raspberry Pi"),
    new Myproject("https://github.com/JUSTIVE/tictactoe",
        "TICTACTOE",
        "Android tic tac toe Game"),
    new Myproject("https://github.com/JUSTIVE/SmartBadmintonTrainingSystem",
        "SmartBadmintonTrainingSystem",
        "Badminton training system"),
    new Myproject("https://github.com/JUSTIVE/graphics-Catmull-RomSpline",
        "GRAPHICS-CATMULL-ROMSPLINE",
        "a visualization Catmull-Rom Spline with OpenGL and GLUT library")
];


var projectTemplate = document.querySelector("#project-template");
var projectCard = document.getElementById("project-card");

for (var i=0;i<ProjectData.length;i++){
    projectTemplate.content.querySelector('a').href=ProjectData[i].link;
    projectTemplate.content.querySelector(".project-name").innerHTML =ProjectData[i].name;
    projectTemplate.content.querySelector(".project-description").innerHTML =ProjectData[i].description;
    var clone = document.importNode(projectTemplate.content,true);
    projectCard.appendChild(clone);    
};

