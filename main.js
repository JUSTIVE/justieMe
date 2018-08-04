var leftpane = document.getElementById("left-area");
var bodyrect = document.getElementsByClassName("item-card")[0].getBoundingClientRect();
var nom= document.getElementById('nom').style;

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
        leftpane.style.opacity = bodyrect.top/window.innerHeight;    
        console.log("aas");
    }
    else{
        leftpane.style.opacity = 1;
    }
};

var nameAutoSize = ()=>{
    if(window.innerWidth<720){
        var bodyrect = document.getElementsByClassName("item-card")[0].getBoundingClientRect();
        leftpane.style.opacity = vh(70)/window.innerHeight;
        fontsize = 140;
        lineheight = 110;
    }
    else{
        fontsize=lineheight= Math.min(vw(9),vh(2)*vh(2)*0.4);
        leftpane.style.opacity = 1;
    }
    nom.fontSize=fontsize+'px';
    nom.lineHeight=lineheight+'px';
};

window.onscroll = leftpaneAutoOpacity;
// window.onresize = leftpaneAutoOpacity;
window.addEventListener("resize",nameAutoSize,"after");
window.onload = nameAutoSize;


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
        "a visualization Catmull-Rom Spline")
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

class Quote{
    constructor(MLA,APA,ISO690){
        this.MLA=MLA;
        this.APA=APA;
        this.ISO690=ISO690;
    }
}

class MyPaper{
    constructor(doi,name,author,journal,quote){
        this.doi=doi;
        this.name=name;
        this.author=author;
        this.journal=journal;
        this.quote=quote;
    }
}

////////////////////////////////////////////////////////////////////////
var PaperIndex=0;
var PaperCategory=[
    "International Journal",
    "Domestic Journal",
    "International Conference",
    "Domestic Conference"
]

var PaperData=[
    [//International Journals
        new MyPaper(
            doi="",
            name="Parallel cloth simulation with effective collision detection for interactive AR application",
            author="Minsang Kim, Nak-Jun Sung, Sang-Joon Kim, Yoo-Joo Choi, Min Hong",
            journal="Multimedia Tools and Applications , 2018. 05.(SCIE)",
            quote=""
        ),
        new MyPaper(
            doi="",
            name="Parallel cloth simulation with effective collision detection for interactive AR application",
            author="Minsang Kim, Nak-Jun Sung, Sang-Joon Kim, Yoo-Joo Choi, Min Hong",
            journal="Multimedia Tools and Applications , 2018. 05.(SCIE)",
            quote=""
        ),
    ],
    [//Domestic Journal

    ],
    [//International Conference
        
    ],
    [//Domestic Conference
        new MyPaper(
            doi="",
            name="안드로이드 디자인 서포트 라이브러리를 이용한 음악 재생 어플리케이션 구현",
            author="김민상, 엽효섭, 홍민",
            journal="2015년도 한국인터넷정보학회 추계학술발표대회 논문집, 2015.10, 227-228",
            quote=new Quote(
                MLA='김민상, 염효섭, and 홍민. "안드로이드 디자인 서포트 라이브러리를 이용한 음악 재생 어플리케이션 구현." 한국인터넷정보학회 학술발표대회 논문집 (2015): 227-228.',
                APA="김민상, 염효섭, & 홍민. (2015). 안드로이드 디자인 서포트 라이브러리를 이용한 음악 재생 어플리케이션 구현. 한국인터넷정보학회 학술발표대회 논문집, 227-228.",
                ISO690 ="김민상; 염효섭; 홍민. 안드로이드 디자인 서포트 라이브러리를 이용한 음악 재생 어플리케이션 구현. 한국인터넷정보학회 학술발표대회 논문집, 2015, 227-228."
            )
        )
    ],
]

var papercategoryButton=document.getElementById("paper-category");
papercategoryButton.addEventListener("click",()=>{
    PaperIndex = PaperIndex+1>3?0:PaperIndex+1;
    papercategoryButton.innerText = PaperCategory[PaperIndex];
    
    var paperTemplate = document.querySelector("#paper-template");
    var paperCard = document.getElementById("paper-card");
    for (var i=0;i<PaperData[PaperIndex].length;i++){
        paperTemplate.content.querySelector('a').href=PaperData[PaperIndex][i].doi;
        paperTemplate.content.querySelector(".paper-name").innerHTML =PaperData[PaperIndex][i].name;
        paperTemplate.content.querySelector(".paper-description").innerHTML =PaperData[PaperIndex][i].author;
        var clone = document.importNode(paperTemplate.content,true);
        paperCard.appendChild(clone);    
    };
});



