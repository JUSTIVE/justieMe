<template>
<div class="publication">
  <ul class="publication-list" v-for="(paperCategory,index) in papers" :key="index"><!--should be called 4 times-->
    <h6 class="publication-category">{{paperCategory.name}}</h6>
    <ul class="publication-sublist" v-for="(paperInstance,subindex) in paperCategory.data" :key="subindex" v-on:click="currentPublications=(index, subindex)">
      <h6 class="publication-name">{{paperInstance.name}}</h6>
      <h6 class="publication"></h6>
    </ul>
  </ul>
</div>
</template>
<script>
export default {
  name: "publications",
  data: function() {
    return {
      currentPublications: (0, 0),
      papers: [
        {
          name: "International Journals",
          data: [
            {
              //MTAP
              doi: "",
              name:
                "Parallel cloth simulation with effective collision detection for interactive AR application",
              author:
                "Minsang Kim, Nak-Jun Sung, Sang-Joon Kim, Yoo-Joo Choi, Min Hong",
              journal: "Multimedia Tools and Applications , 2018. 05.(SCIE)",
              quote: {
                AMA:
                  "Kim, M., Sung, N. J., Kim, S. J., Choi, Y. J., & Hong, M. (2018). Parallel cloth simulation with effective collision detection for interactive AR application. Multimedia Tools and Applications, 1-18.",
                MLA:
                  "Kim, Minsang, et al. 'Parallel cloth simulation with effective collision detection for interactive AR application.' Multimedia Tools and Applications (2018): 1-18.",
                ISO690:
                  "KIM, Minsang, et al. Parallel cloth simulation with effective collision detection for interactive AR application. Multimedia Tools and Applications, 2018, 1-18."
              }
            },
            {
              doi: "",
              name:
                "REAL-TIME COLLISION RESPONSE BETWEEN CLOTH AND SPHERE OBJECT IN UNITY",
              author: "Min Sang Kim, Wook Song, Yoo-Joo Choi, Min Hong",
              journal:
                "Journal of Theoretical and Applied Information Technology(Under Review)",
              quote: {
                AMA: "",
                MLA: "",
                ISO690: ""
              }
            },
            {
              doi: "http://doi.org/10.3837/tiis.2018.08.029",
              name:
                "Optimization of Material Properties for Coherent Behavior across Multi-resolution Cloth Models",
              author:
                "Nak-Jun Sung, Shane Transue, Min Sang Kim, Yoo-Joo Choi, Min-Hyung Choi and Min Hong",
              journal:
                "KSII TRANSACTIONS ON INTERNET AND INFORMATION SYSTEMS(Accepted)",
              quote: {
                AMA: "",
                MLA: "",
                ISO690: ""
              }
            }
          ]
        },
        {
          name: "Domestic Journal",
          data: [
            {
              //KTSDE
              doi: "https://doi.org/10.3745/KTSDE.2017.6.10.479",
              name:
                "OpenGL과 Unity간의 GPU를 이용한 Particle Simulation의 성능 비교",
              author: "김민상, 성낙준, 최유주, 홍민",
              journal:
                "정보처리학회논문지. 소프트웨어 및 데이터 공학, 6권 10호",
              quote: {
                AMA:
                  "김민상, 성낙준, 최유주, & 홍민. (2017). OpenGL 과 Unity 간의 GPU 를 이용한 Particle Simulation 의 성능 비교. 정보처리학회논문지. 소프트웨어 및 데이터 공학, 6(10), 479-486.",
                MLA:
                  "김민상, et al. 'OpenGL 과 Unity 간의 GPU 를 이용한 Particle Simulation 의 성능 비교.' 정보처리학회논문지. 소프트웨어 및 데이터 공학 6.10 (2017): 479-486.",
                ISO690:
                  "김민상, et al. OpenGL 과 Unity 간의 GPU 를 이용한 Particle Simulation 의 성능 비교. 정보처리학회논문지. 소프트웨어 및 데이터 공학, 2017, 6.10: 479-486."
              }
            },
            {
              //KTSDE
              doi: "https://doi.org/10.3745/KTSDE.2018.7.1.25",
              name: "변형 물체를 위한 GPU 기반 병렬 충돌 감지",
              author: "성낙준, 김민상, 홍 민, 최유주",
              journal: "정보처리학회논문지. 소프트웨어 및 데이터 공학, 7권 1호",
              quote: {
                AMA:
                  "성낙준, 김민상, 홍민, & 최유주. (2018). 변형 물체를 위한 GPU 기반 병렬 충돌 감지. 정보처리학회논문지. 소프트웨어 및 데이터 공학, 7(1), 25-32.",
                MLA:
                  "성낙준, et al. '변형 물체를 위한 GPU 기반 병렬 충돌 감지.' 정보처리학회논문지. 소프트웨어 및 데이터 공학 7.1 (2018): 25-32.",
                ISO690:
                  "성낙준, et al. 변형 물체를 위한 GPU 기반 병렬 충돌 감지. 정보처리학회논문지. 소프트웨어 및 데이터 공학, 2018, 7.1: 25-32."
              }
            },
            {
              //JKSII
              doi: "http://dx.doi.org/10.7472/jksii.2014.00.00",
              name: "데스크탑에서의 OpenGL과 Unity간의 성능 비교",
              author: "김민상, 홍 민",
              journal:
                "Journal of Internet Computing and Services(JICS) 2014. Apr.: 14(0): 1-10",
              quote: {
                AMA: "",
                MLA: "",
                ISO690: ""
              }
            },
            {
              doi: "",
              name: "체감형 가상현실 H/W 기술 동향",
              author: "김민상, 성낙준, 최유주, 홍 민",
              journal: "정보처리학회지 특집원고-실감미디어 기술 및 서비스",
              quote: {
                AMA: "",
                MLA: "",
                ISO690: ""
              }
            }
          ]
        },
        {
          name: "International Conference",
          data: [
            {
              //APIC
              doi: "",
              name: "Real-Time Cloth Simulation using Unity shader",
              author: "Kim Min Sang, Nak-Jun Sung, Min Hong, Yoo-Joo Choi",
              journal:
                "KSII The 12th Asia Pacific International Conference on Information Science and Technology(APIC-IST) 2017.",
              quote: {
                AMA: "",
                MLA: "",
                ISO690: ""
              }
            },
            {
              //CUTE
              doi: "https://doi.org/10.1007/978-981-10-5041-1_26",
              name:
                "Implementation of Sitting Posture Monitoring System with Kinect",
              author:
                "Dong-Jun Shin, Min-Sang Kim, Wook Song, Se Dong Min, Min Hong",
              journal: "Advanced Multimedia and Ubiquitous Engineering",
              quote: {
                AMA:
                  "Shin, D. J., Kim, M. S., Song, W., Min, S. D., & Hong, M. (2017). Implementation of Sitting Posture Monitoring System with Kinect. In Advanced Multimedia and Ubiquitous Engineering (pp. 144-150). Springer, Singapore.",
                MLA:
                  "Shin, Dong-Jun, et al. 'Implementation of Sitting Posture Monitoring System with Kinect.' Advanced Multimedia and Ubiquitous Engineering. Springer, Singapore, 2017. 144-150.",
                ISO690:
                  "SHIN, Dong-Jun, et al. Implementation of Sitting Posture Monitoring System with Kinect. In: Advanced Multimedia and Ubiquitous Engineering. Springer, Singapore, 2017. p. 144-150."
              }
            },
            {
              //ICONI 2017
              doi: "",
              name:
                "Comparison in Performance of Parallel Deformable Object Simulation between OpenGL and Unity",
              author:
                "Min-Hyung Choi, Min Sang Kim, Nak-Jun Sung, Yoo-Joo Choi, Min Hong",
              journal:
                "KSII The 9th International Conference on Internet (ICONI) 2017 Symposium.",
              quote: {
                AMA:
                  "Choi, M. H., Kim, M. S., Sung, N. J., Choi, Y. J., & Hong, M. (2017). Comparison in Performance of Parallel Deformable Object Simulation between OpenGL and Unity.",
                MLA:
                  "Choi, Min-Hyung, et al. 'Comparison in Performance of Parallel Deformable Object Simulation between OpenGL and Unity. (2017).",
                ISO690:
                  "CHOI, Min-Hyung, et al. Comparison in Performance of Parallel Deformable Object Simulation between OpenGL and Unity. 2017."
              }
            },
            {
              doi: "",
              name: "Parallel Collision Detection Algorithm with GLSL 4.3",
              author: "Nak-Jun Sung, Min Hong, Min Sang Kim and Yoo-Joo Choi",
              journal:
                "KSII The 9th International Conference on Internet (ICONI) 2017 Symposium.",
              quote: {
                AMA: "",
                MLA: "",
                ISO690: ""
              }
            }
          ]
        },
        {
          name: "Domestic Conference",
          data: [
            {
              doi: "",
              name:
                "안드로이드 디자인 서포트 라이브러리를 이용한 음악 재생 어플리케이션 구현",
              author: "김민상, 염효섭, 홍 민",
              journal:
                "2015년도 한국인터넷정보학회 추계학술발표대회 논문집 제16권 2호",
              quote: {
                MLA:
                  '김민상, 염효섭, and 홍민. "안드로이드 디자인 서포트 라이브러리를 이용한 음악 재생 어플리케이션 구현." 한국인터넷정보학회 학술발표대회 논문집 (2015): 227-228.',
                APA:
                  "김민상, 염효섭, & 홍민. (2015). 안드로이드 디자인 서포트 라이브러리를 이용한 음악 재생 어플리케이션 구현. 한국인터넷정보학회 학술발표대회 논문집, 227-228.",
                ISO690:
                  "김민상; 염효섭; 홍민. 안드로이드 디자인 서포트 라이브러리를 이용한 음악 재생 어플리케이션 구현. 한국인터넷정보학회 학술발표대회 논문집, 2015, 227-228."
              }
            },
            {
              doi: "",
              name: "강체 기반의 2D 포켓볼 시뮬레이션 구현",
              author: "김민상, 최영환, 홍 민",
              journal:
                "2016년도 한국인터넷정보학회 춘계학술발표대회 논문집 제17권 제1호, 2016.4, 241-242",
              quote: {
                AMA:
                  "김민상, 염효섭, & 홍민. (2015). 안드로이드 디자인 서포트 라이브러리를 이용한 음악 재생 어플리케이션 구현. 한국인터넷정보학회 학술발표대회 논문집, 227-228.",
                MLA:
                  "김민상, 염효섭, and 홍민. '안드로이드 디자인 서포트 라이브러리를 이용한 음악 재생 어플리케이션 구현.' 한국인터넷정보학회 학술발표대회 논문집 (2015): 227-228.",
                ISO690:
                  "김민상; 염효섭; 홍민. 안드로이드 디자인 서포트 라이브러리를 이용한 음악 재생 어플리케이션 구현. 한국인터넷정보학회 학술발표대회 논문집, 2015, 227-228."
              }
            },
            {
              doi: "",
              name: "데스크탑에서의 OpenGL 과 Unity 3D간의 성능 비교",
              author: "김민상, 성낙준, 최유주, 홍 민",
              journal: "2017년도 정보처리학회 춘계학술대회",
              quote: {
                AMA: "",
                MLA: "",
                ISO690: ""
              }
            },
            {
              doi: "",
              name: "키넥트와 라즈베리파이를 활용한제스처 인식 시스템 설계",
              author: "성낙준, 김민상, 홍 민",
              journal:
                "2017년도 한국인터넷정보학회 추계학술발표대회 논문집 제18권2호",
              quote: {
                AMA: "",
                MLA: "",
                ISO690: ""
              }
            },
            {
              doi: "",
              name: "라즈베리파이를 활용한 스마트 스케줄러",
              author: "김민상, 문준영, 홍 민",
              journal:
                "2017년도 한국인터넷정보학회 추계학술발표대회 논문집 제18권2호",
              quote: {
                AMA: "",
                MLA: "",
                ISO690: ""
              }
            },
            {
              doi: "",
              name: "HMD를 활용한 가상현실 FPS게임 콘텐츠 개발",
              author: "이성진, 김민상, 홍 민",
              journal:
                "2018년도 한국인터넷정보학회 춘계학술발표대회 논문집 제19권1호",
              quote: {
                AMA: "",
                MLA: "",
                ISO690: ""
              }
            }
          ]
        }
      ]
    };
  }
};
</script>
