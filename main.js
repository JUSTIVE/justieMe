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
    if(window.innerWidth<1024){
        var bodyrect = document.getElementsByClassName("item-card")[0].getBoundingClientRect();
        leftpane.style.opacity = bodyrect.top/window.innerHeight;    
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
window.addEventListener("resize",nameAutoSize,"after");
window.onload = nameAutoSize;


class Myproject{
    constructor(link,name,description,language){
        this.link=link;
        this.name=name;
        this.description=description;
        this.language=language;
    }
}

var ProjectData = [
    new Myproject(
        link="https://github.com/JUSTIVE/GLRERENDERER_LEGACYCHECKER",
        name="GLRERENDERER_LEGACYCHECKER",
        description="Obj model viewers",
        language=[
            "c",
        ]),
    new Myproject(
        link="https://github.com/JUSTIVE/PROJECT_GAMEMAKER-V2",
        name="PROJECT_GAMEMAKER-V2",
        description="Game company simulation game",
        language=[
            "cpp",
        ]),
    new Myproject(
        link="https://github.com/JUSTIVE/OS-ya-master---Copy",
        name="OS-Ya",
        description="Single thread CPU scheduling simulation",
        language=[
            "csharp",
        ]),
    new Myproject("https://github.com/JUSTIVE/ballRollPool",
        "ballRollPool",
        "2D rigid body pocketball simulation",language=[
            "cpp",
        ]),
    new Myproject("https://github.com/JUSTIVE/Daisy-Chain",
        "Daisy Chain",
        "A game made with Unity",
        language=[
            "csharp","shaderlab","hlsl"
        ]),
    new Myproject("https://github.com/JUSTIVE/splay",
        "sPlay",
        "JAVA swing GUI based CS quiz program",
        language=[
            "java",
        ]),
    new Myproject("https://github.com/JUSTIVE/VIPMETHOD",
        "VIPMETHOD",
        "Smart scheduler using UWP on Raspberry Pi",
        language=[
            "csharp",
        ]),
    new Myproject("https://github.com/JUSTIVE/tictactoe",
        "TICTACTOE",
        "Android tic tac toe Game",
        language=[
            "java",
        ]),
    new Myproject("https://github.com/JUSTIVE/SmartBadmintonTrainingSystem",
        "SmartBadmintonTrainingSystem",
        "Badminton training system",
        language=[
            "csharp",
        ]),
    new Myproject("https://github.com/JUSTIVE/graphics-Catmull-RomSpline",
        "GRAPHICS-CATMULL-ROMSPLINE",
        "a visualization Catmull-Rom Spline",
        language=[
            "cpp",
        ]),
    new Myproject("https://github.com/JUSTIVE/framelessCounter",
        "FramelessCounter",
        "a frameless wpf timer always on top",
        language=[
            "csharp"
        ])
];


var projectTemplate = document.querySelector("#project-template");
var projectCard = document.getElementById("project-card");

for (var i=0;i<ProjectData.length;i++){
    projectTemplate.content.querySelector('a').href=ProjectData[i].link;
    projectTemplate.content.querySelector(".project-name").innerHTML =ProjectData[i].name;
    projectTemplate.content.querySelector(".project-description").innerHTML =ProjectData[i].description;
    var langs =projectTemplate.content.querySelector(".project-lang");
    for(var j=0;j<ProjectData[i].language.length;j++){
        var tempLang= document.createElement("div");
        tempLang.className="language "+ProjectData[i].language[j]+"-lang";
        langs.appendChild(tempLang);

        var tempLang= document.createElement("div");
        tempLang.innerText=ProjectData[i].language[j];
        tempLang.className="lang-text";
        langs.appendChild(tempLang);
    }
    var clone = document.importNode(projectTemplate.content,true);
    projectCard.appendChild(clone);    
    langs.innerHTML="";
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
            quote=new Quote(
                AMA="Kim, M., Sung, N. J., Kim, S. J., Choi, Y. J., & Hong, M. (2018). Parallel cloth simulation with effective collision detection for interactive AR application. Multimedia Tools and Applications, 1-18.",
                MLA='Kim, Minsang, et al. "Parallel cloth simulation with effective collision detection for interactive AR application." Multimedia Tools and Applications (2018): 1-18.',
                ISO690="KIM, Minsang, et al. Parallel cloth simulation with effective collision detection for interactive AR application. Multimedia Tools and Applications, 2018, 1-18."
            )
        ), 
        
    ], 
    [//Domestic Journal 
        new MyPaper( 
            doi="https://doi.org/10.3745/KTSDE.2017.6.10.479", 
            name="OpenGL과 Unity간의 GPU를 이용한 Particle Simulation의 성능 비교",
            author="김민상, 성낙준, 최유주, 홍민", 
            journal="정보처리학회논문지. 소프트웨어 및 데이터 공학, 6권 10호", 
            quote=new Quote(
                AMA="김민상, 성낙준, 최유주, & 홍민. (2017). OpenGL 과 Unity 간의 GPU 를 이용한 Particle Simulation 의 성능 비교. 정보처리학회논문지. 소프트웨어 및 데이터 공학, 6(10), 479-486.",
                MLA='김민상, et al. "OpenGL 과 Unity 간의 GPU 를 이용한 Particle Simulation 의 성능 비교." 정보처리학회논문지. 소프트웨어 및 데이터 공학 6.10 (2017): 479-486.',
                ISO690="김민상, et al. OpenGL 과 Unity 간의 GPU 를 이용한 Particle Simulation 의 성능 비교. 정보처리학회논문지. 소프트웨어 및 데이터 공학, 2017, 6.10: 479-486."
            )
        ),
       
    ], 
    [//International Conference 
        new MyPaper(//CUTE
            doi="https://doi.org/10.1007/978-981-10-5041-1_26", 
            name="Implementation of Sitting Posture Monitoring System with Kinect",
            author="Dong-Jun Shin, Min-Sang Kim, Wook Song, Se Dong Min, Min Hong", 
            journal="Advanced Multimedia and Ubiquitous Engineering", 
            quote=new Quote(
                AMA="Shin, D. J., Kim, M. S., Song, W., Min, S. D., & Hong, M. (2017). Implementation of Sitting Posture Monitoring System with Kinect. In Advanced Multimedia and Ubiquitous Engineering (pp. 144-150). Springer, Singapore.",
                MLA='Shin, Dong-Jun, et al. "Implementation of Sitting Posture Monitoring System with Kinect." Advanced Multimedia and Ubiquitous Engineering. Springer, Singapore, 2017. 144-150.',
                ISO690="SHIN, Dong-Jun, et al. Implementation of Sitting Posture Monitoring System with Kinect. In: Advanced Multimedia and Ubiquitous Engineering. Springer, Singapore, 2017. p. 144-150."
            )
        ),
        new MyPaper(//ICONI
            doi="", 
            name="Comparison in Performance of Parallel Deformable Object Simulation between OpenGL and Unity",
            author="Min-Hyung Choi, Min Sang Kim, Nak-Jun Sung, Yoo-Joo Choi, Min Hong", 
            journal="KSII The 9th International Conference on Internet (ICONI) 2017 Symposium.", 
            quote=new Quote(
                AMA="Choi, M. H., Kim, M. S., Sung, N. J., Choi, Y. J., & Hong, M. (2017). Comparison in Performance of Parallel Deformable Object Simulation between OpenGL and Unity.",
                MLA='Choi, Min-Hyung, et al. "Comparison in Performance of Parallel Deformable Object Simulation between OpenGL and Unity." (2017).',
                ISO690="CHOI, Min-Hyung, et al. Comparison in Performance of Parallel Deformable Object Simulation between OpenGL and Unity. 2017."
            )
        ),
    ], 
    [//Domestic Conference 
        new MyPaper(//KTSDE
            doi="https://doi.org/10.3745/KTSDE.2017.6.10.479", 
            name="OpenGL과 Unity간의 GPU를 이용한 Particle Simulation의 성능 비교",
            author="김민상, 성낙준, 최유주, 홍민", 
            journal="정보처리학회논문지. 소프트웨어 및 데이터 공학, 6권 10호", 
            quote=new Quote(
                AMA="김민상, 성낙준, 최유주, & 홍민. (2017). OpenGL 과 Unity 간의 GPU 를 이용한 Particle Simulation 의 성능 비교. 정보처리학회논문지. 소프트웨어 및 데이터 공학, 6(10), 479-486.",
                MLA='김민상, et al. "OpenGL 과 Unity 간의 GPU 를 이용한 Particle Simulation 의 성능 비교." 정보처리학회논문지. 소프트웨어 및 데이터 공학 6.10 (2017): 479-486.',
                ISO690="김민상, et al. OpenGL 과 Unity 간의 GPU 를 이용한 Particle Simulation 의 성능 비교. 정보처리학회논문지. 소프트웨어 및 데이터 공학, 2017, 6.10: 479-486."
            )
        ),
    ],
]

var papercategoryButton=document.getElementById("paper-category");
var paperTemplate = document.querySelector("#paper-template");
var paperCard = document.getElementById("paper-card");
var paperInstanciate=function(){
    paperCard.innerHTML="";
    for (var i=0;i<PaperData[PaperIndex].length;i++){
        paperTemplate.content.querySelector('a').href=PaperData[PaperIndex][i].doi;
        paperTemplate.content.querySelector(".paper-name").innerHTML =PaperData[PaperIndex][i].name;
        paperTemplate.content.querySelector(".paper-author").innerHTML =PaperData[PaperIndex][i].author;
        paperTemplate.content.querySelector(".paper-journal").innerHTML =PaperData[PaperIndex][i].journal;
        var clone = document.importNode(paperTemplate.content,true);
        paperCard.appendChild(clone);    
    };
}

papercategoryButton.addEventListener("click",()=>{
    PaperIndex = PaperIndex+1>3?0:PaperIndex+1;
    papercategoryButton.innerText = PaperCategory[PaperIndex]; 
    console.log(PaperIndex);
    paperInstanciate();
});
paperInstanciate();

var TechiesData=[];
var url = new URL(document.location.href+"/techies/");

var temp =new URLSearchParams(url.search.slice(1));
console.log(temp);