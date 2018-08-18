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

var leftpaneAutoOpacity = function(){
    if(window.innerWidth<1024){
        var bodyrect = document.getElementsByClassName("item-card")[0].getBoundingClientRect();
        leftpane.style.opacity = Math.max(bodyrect.top/window.innerHeight,0);    
    }
    else{
        leftpane.style.opacity = 1;
    }
};

var nameAutoSize = function(){
    if(window.innerWidth<1024){
        var bodyrect = document.getElementsByClassName("item-card")[0].getBoundingClientRect();
        leftpane.style.opacity = vh(70)/window.innerHeight;
        fontsize = 140;
        lineheight = 110;
    }
    else{
        fontsize=lineheight= Math.min(vw(9),vh(2)*vh(2)*0.4)*0.7;
        leftpane.style.opacity = 1;
    }
    nom.fontSize=fontsize+'px';
    nom.lineHeight=lineheight+'px';
};

window.onscroll = leftpaneAutoOpacity;
window.addEventListener("resize",nameAutoSize,"after");
window.onload = nameAutoSize;


function Myproject(link,name,description,language){
    this.link=link;
    this.name=name;
    this.description=description;
    this.language=language;
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

function MyPaper(doi,name,author,journal,quote){
    this.doi=doi;
    this.name=name;
    this.author=author;
    this.journal=journal;
    this.quote=quote;
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
        new MyPaper( //MTAP
            doi="", 
            name="Parallel cloth simulation with effective collision detection for interactive AR application", 
            author="Minsang Kim, Nak-Jun Sung, Sang-Joon Kim, Yoo-Joo Choi, Min Hong", 
            journal="Multimedia Tools and Applications , 2018. 05.(SCIE)", 
            quote={
                AMA:"Kim, M., Sung, N. J., Kim, S. J., Choi, Y. J., & Hong, M. (2018). Parallel cloth simulation with effective collision detection for interactive AR application. Multimedia Tools and Applications, 1-18.",
                MLA:'Kim, Minsang, et al. "Parallel cloth simulation with effective collision detection for interactive AR application." Multimedia Tools and Applications (2018): 1-18.',
                ISO690:"KIM, Minsang, et al. Parallel cloth simulation with effective collision detection for interactive AR application. Multimedia Tools and Applications, 2018, 1-18."
            }
        ), 
        new MyPaper(
            doi="",
            name="REAL-TIME COLLISION RESPONSE BETWEEN CLOTH AND SPHERE OBJECT IN UNITY",
            author="Min Sang Kim, Wook Song, Yoo-Joo Choi, Min Hong",
            journal="Journal of Theoretical and Applied Information Technology(Under Review)",
            quote={
                AMA:"",
                MLA:"",
                ISO690:""
            }
        ),
        new MyPaper(
            doi="",
            name="Optimization of Material Properties for Coherent Behavior across Multi-resolution Cloth Models",
            author="Nak-Jun Sung, Shane Transue, Min Sang Kim, Yoo-Joo Choi, Min-Hyung Choi and Min Hong",
            journal="KSII TRANSACTIONS ON INTERNET AND INFORMATION SYSTEMS(Accepted)",
            quote={
                AMA:"",
                MLA:"",
                ISO690:""
            }
        )
    ], 
    [//Domestic Journal 
        new MyPaper(//KTSDE
            doi="https://doi.org/10.3745/KTSDE.2017.6.10.479", 
            name="OpenGL과 Unity간의 GPU를 이용한 Particle Simulation의 성능 비교",
            author="김민상, 성낙준, 최유주, 홍민", 
            journal="정보처리학회논문지. 소프트웨어 및 데이터 공학, 6권 10호",
            quote={
                AMA:"김민상, 성낙준, 최유주, & 홍민. (2017). OpenGL 과 Unity 간의 GPU 를 이용한 Particle Simulation 의 성능 비교. 정보처리학회논문지. 소프트웨어 및 데이터 공학, 6(10), 479-486.",
                MLA:'김민상, et al. "OpenGL 과 Unity 간의 GPU 를 이용한 Particle Simulation 의 성능 비교." 정보처리학회논문지. 소프트웨어 및 데이터 공학 6.10 (2017): 479-486.',
                ISO690:"김민상, et al. OpenGL 과 Unity 간의 GPU 를 이용한 Particle Simulation 의 성능 비교. 정보처리학회논문지. 소프트웨어 및 데이터 공학, 2017, 6.10: 479-486."
            }
        ),
        new MyPaper(//KTSDE
            doi="https://doi.org/10.3745/KTSDE.2018.7.1.25",
            name="변형 물체를 위한 GPU 기반 병렬 충돌 감지",
            author="성낙준, 김민상, 홍 민, 최유주",
            journal="정보처리학회논문지. 소프트웨어 및 데이터 공학, 7권 1호",
            quote={
                AMA:"성낙준, 김민상, 홍민, & 최유주. (2018). 변형 물체를 위한 GPU 기반 병렬 충돌 감지. 정보처리학회논문지. 소프트웨어 및 데이터 공학, 7(1), 25-32.",
                MLA:'성낙준, et al. "변형 물체를 위한 GPU 기반 병렬 충돌 감지." 정보처리학회논문지. 소프트웨어 및 데이터 공학 7.1 (2018): 25-32.',
                ISO690:'성낙준, et al. 변형 물체를 위한 GPU 기반 병렬 충돌 감지. 정보처리학회논문지. 소프트웨어 및 데이터 공학, 2018, 7.1: 25-32.'
            }
        ),
        new MyPaper(//JKSII
            doi="http://dx.doi.org/10.7472/jksii.2014.00.00",
            name="데스크탑에서의 OpenGL과 Unity간의 성능 비교",
            author="김민상, 홍 민",
            journal="Journal of Internet Computing and Services(JICS) 2014. Apr.: 14(0): 1-10",
            quote={
                AMA:"",
                MLA:"",
                ISO690:""
            }
        ),
        new MyPaper(
            doi="",
            name="체감형 가상현실 H/W 기술 동향",
            author="김민상, 성낙준, 최유주, 홍 민",
            journal="정보처리학회지 특집원고-실감미디어 기술 및 서비스",
            quote={
                AMA:"",
                MLA:"",
                ISO690:""
            }
        )
    ], 
    [//International Conference
        new MyPaper(//APIC
            doi="",
            name="Real-Time Cloth Simulation using Unity shader",
            author="Kim Min Sang, Nak-Jun Sung, Min Hong, Yoo-Joo Choi",
            journal="KSII The 12th Asia Pacific International Conference on Information Science and Technology(APIC-IST) 2017.",
            quote={
                AMA:"",
                MLA:"",
                ISO690:""
            }
        ),
        new MyPaper(//CUTE
            doi="https://doi.org/10.1007/978-981-10-5041-1_26", 
            name="Implementation of Sitting Posture Monitoring System with Kinect",
            author="Dong-Jun Shin, Min-Sang Kim, Wook Song, Se Dong Min, Min Hong", 
            journal="Advanced Multimedia and Ubiquitous Engineering", 
            quote={
                AMA:"Shin, D. J., Kim, M. S., Song, W., Min, S. D., & Hong, M. (2017). Implementation of Sitting Posture Monitoring System with Kinect. In Advanced Multimedia and Ubiquitous Engineering (pp. 144-150). Springer, Singapore.",
                MLA:'Shin, Dong-Jun, et al. "Implementation of Sitting Posture Monitoring System with Kinect." Advanced Multimedia and Ubiquitous Engineering. Springer, Singapore, 2017. 144-150.',
                ISO690:"SHIN, Dong-Jun, et al. Implementation of Sitting Posture Monitoring System with Kinect. In: Advanced Multimedia and Ubiquitous Engineering. Springer, Singapore, 2017. p. 144-150."
            }
        ),
        new MyPaper(//ICONI 2017
            doi="", 
            name="Comparison in Performance of Parallel Deformable Object Simulation between OpenGL and Unity",
            author="Min-Hyung Choi, Min Sang Kim, Nak-Jun Sung, Yoo-Joo Choi, Min Hong", 
            journal="KSII The 9th International Conference on Internet (ICONI) 2017 Symposium.", 
            quote={
                AMA:"Choi, M. H., Kim, M. S., Sung, N. J., Choi, Y. J., & Hong, M. (2017). Comparison in Performance of Parallel Deformable Object Simulation between OpenGL and Unity.",
                MLA:'Choi, Min-Hyung, et al. "Comparison in Performance of Parallel Deformable Object Simulation between OpenGL and Unity." (2017).',
                ISO690:"CHOI, Min-Hyung, et al. Comparison in Performance of Parallel Deformable Object Simulation between OpenGL and Unity. 2017."
            }
        ),
        new MyPaper(
            doi="",
            name="Parallel Collision Detection Algorithm with GLSL 4.3",
            author="Nak-Jun Sung, Min Hong, Min Sang Kim and Yoo-Joo Choi",
            journal="KSII The 9th International Conference on Internet (ICONI) 2017 Symposium.",
            quote={
                AMA:"",
                MLA:"",
                ISO690:""
            }
        )
    ], 
    [//Domestic Conference 
        new MyPaper(
            doi="",
            name="안드로이드 디자인 서포트 라이브러리를 이용한 음악 재생 어플리케이션 구현",
            author="김민상, 염효섭, 홍 민",
            journal="2015년도 한국인터넷정보학회 추계학술발표대회 논문집 제16권 2호",
            quote={
                MLA:'김민상, 염효섭, and 홍민. "안드로이드 디자인 서포트 라이브러리를 이용한 음악 재생 어플리케이션 구현." 한국인터넷정보학회 학술발표대회 논문집 (2015): 227-228.',
                APA:"김민상, 염효섭, & 홍민. (2015). 안드로이드 디자인 서포트 라이브러리를 이용한 음악 재생 어플리케이션 구현. 한국인터넷정보학회 학술발표대회 논문집, 227-228.",
                ISO690:"김민상; 염효섭; 홍민. 안드로이드 디자인 서포트 라이브러리를 이용한 음악 재생 어플리케이션 구현. 한국인터넷정보학회 학술발표대회 논문집, 2015, 227-228."  
            }
        ),
        new MyPaper(
            doi="",
            name="강체 기반의 2D 포켓볼 시뮬레이션 구현",
            author="김민상, 최영환, 홍 민",
            journal="2016년도 한국인터넷정보학회 춘계학술발표대회 논문집 제17권 제1호, 2016.4, 241-242",
            quote={
                AMA:'김민상, 염효섭, & 홍민. (2015). 안드로이드 디자인 서포트 라이브러리를 이용한 음악 재생 어플리케이션 구현. 한국인터넷정보학회 학술발표대회 논문집, 227-228.',
                MLA:'김민상, 염효섭, and 홍민. "안드로이드 디자인 서포트 라이브러리를 이용한 음악 재생 어플리케이션 구현." 한국인터넷정보학회 학술발표대회 논문집 (2015): 227-228.',
                ISO690:'김민상; 염효섭; 홍민. 안드로이드 디자인 서포트 라이브러리를 이용한 음악 재생 어플리케이션 구현. 한국인터넷정보학회 학술발표대회 논문집, 2015, 227-228.'
            }
        ),
        new MyPaper(
            doi="",
            name="데스크탑에서의 OpenGL 과 Unity 3D간의 성능 비교",
            author="김민상, 성낙준, 최유주, 홍 민",
            journal="2017년도 정보처리학회 춘계학술대회",
            quote={
                AMA:"",
                MLA:"",
                ISO690:""
            }
        ),
        new MyPaper(
            doi="",
            name="키넥트와 라즈베리파이를 활용한제스처 인식 시스템 설계",
            author="성낙준, 김민상, 홍 민",
            journal="2017년도 한국인터넷정보학회 추계학술발표대회 논문집 제18권2호",
            quote={
                AMA:"",
                MLA:"",
                ISO690:""
            }
        ),
        new MyPaper(
            doi="",
            name="라즈베리파이를 활용한 스마트 스케줄러",
            author="김민상, 문준영, 홍 민",
            journal="2017년도 한국인터넷정보학회 추계학술발표대회 논문집 제18권2호",
            quote={
                AMA:"",
                MLA:"",
                ISO690:""
            }
        ),
        new MyPaper(
            doi="",
            name="HMD를 활용한 가상현실 FPS게임 콘텐츠 개발",
            author="이성진, 김민상, 홍 민",
            journal="2018년도 한국인터넷정보학회 춘계학술발표대회 논문집 제19권1호",
            quote={
                AMA:"",
                MLA:"",
                ISO690:""
            }
        )
    ],
]
var quotelist=["AMA","MLA","ISO690"];
function quoteAction(journal,number,quotetype){
    var copytext = PaperData[journal][number].quote[quotelist[quotetype]];
    var dummytextarea=document.getElementsByClassName("paper-hide")[0];
    dummytextarea.value=copytext;
    dummytextarea.select();
    document.execCommand('copy');
    alert("copied to clipboard");
}

var papercategoryButton=document.getElementById("paper-category");
var paperTemplate = document.querySelector("#paper-template");
var paperCard = document.getElementById("paper-card");
var paperInstanciate=function(){
    paperCard.innerHTML="";
    for (var i=0;i<PaperData[PaperIndex].length;i++){
        paperTemplate.content.querySelector(".paper_link").href=PaperData[PaperIndex][i].doi;
        paperTemplate.content.querySelector(".paper-name").innerHTML =PaperData[PaperIndex][i].name;
        paperTemplate.content.querySelector(".paper-author").innerHTML =PaperData[PaperIndex][i].author;
        paperTemplate.content.querySelector(".paper-journal").innerHTML =PaperData[PaperIndex][i].journal;
        paperTemplate.content.querySelector(".AMA").id='0'+i;
        paperTemplate.content.querySelector(".MLA").id='1'+i;
        paperTemplate.content.querySelector(".ISO690").id='2'+i;
        var clone = document.importNode(paperTemplate.content,true);
        paperCard.appendChild(clone);    
    };
    
    for(var j=0;j<quotelist.length;j++){
        var templist=document.getElementsByClassName(quotelist[j]);
        for(var i=0;i<templist.length;i++){
            templist[i].addEventListener("click",function(e){
                quoteAction(PaperIndex,(e.target.id+"").slice(1),(e.target.id+"")[0]);
            });
        };
    };

}
papercategoryButton.addEventListener("click",function(){
    PaperIndex = PaperIndex+1>3?0:PaperIndex+1;
    papercategoryButton.innerText = PaperCategory[PaperIndex]; 
    paperInstanciate();
});
paperInstanciate();

var getHTML = function ( url, callback ) {
	// Feature detection
	if ( !window.XMLHttpRequest ) return;
	// Create new request
	var xhr = new XMLHttpRequest();
	// Setup callback
	xhr.onload = function() {
		if ( callback && typeof( callback ) === 'function' ) {
			callback( this.responseXML );
		}
	}
	// Get the HTML
	xhr.open( 'GET', url );
	xhr.responseType = 'document';
	xhr.send();
};




var techieslink=[];
var TechiesData=[];
