var leftpane = document.getElementById("left-area");
// var rightpane = document.getElementsByClassName("item-card")[0].offsetTop();

var bodyrect = document.getElementsByClassName("item-card")[0].getBoundingClientRect();

// var log = 
//     setTimeout(() => {
//         console.log(bodyrect.top);
//         log;
//     }, 500);


window.onscroll = ()=>{
    var bodyrect = document.getElementsByClassName("item-card")[0].getBoundingClientRect();
    leftpane.style.opacity = (bodyrect.top)/window.innerHeight
    // console.log(leftpane.style.opacity );
};
