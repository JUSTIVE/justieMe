// /////////////////////////////////////collapsing navbar
// function collapseNavbar() {

// };
// $(window).scroll(collapseNavbar);
// $(document).ready(collapseNavbar);
window.scrollTo(0,1);

$(function() {
    $('a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

$(".navbar-collapse ul li a").click(function() {
	"dropdown-toggle active" != $(this).attr("class") && "dropdown-toggle" != $(this).attr("class") && $(".navbar-toggle:visible").click()
});

// $(function () {
//     if ($(".navbar").offset().top > 10) {
//        $(".navbar-fixed-top").addClass("na-collapse");
//       // $(".navbar-fixed-top").animate({backgroundColor : "#FFC107" },300);
//     } else {
//        $(".navbar-fixed-top").removeClass("na-collapse");
//        // $(".navbar-fixed-top").animate({backgroundColor : "rgba(0,0,0,0)"},300);
//     }
// });

// $("#twitter").hover(function(){
//     // $(this).css("color","#1dcaff");
//     $(this).animate({color : "#1dcaff"},300);
//   },function(){
//     $(this).animate({color : "#424242"},300);
//     // s$(this).css("color","#424242");
// });

// $("#github").hover(function(){
//   $(this).animate({color : "#848484"},300);
//     // $(this).css("color","#848484");
//   },function(){
//     $(this).animate({color : "#424242"},300);
//     // $(this).css("color","#424242");
// });


// $("#soundcloud").hover(function(){
//     // $(this).css("color","#ff3a00");
//     $(this).animate({color : "#ff3a00"},300);
//   },function(){
//     $(this).animate({color : "#424242"},300);
//     // $(this).css("color","#424242");
// });
$(".fa-2x").hover(function(){
    // $(this).css("color","#ff3a00");
    $(this).animate({color : "#ffc107"},300);
  },function(){
    $(this).animate({color : "#424242"},300);
    // $(this).css("color","#424242");
});

$("#mailto").hover(function(){
    $(this).animate({color: "#FFC107"},500);
  },function(){
    // $(this).css("color","#424242");
    $(this).animate({color: "#424242"},500);
});

$(".round").hover(function(){
  $(this).animate({backgroundColor: "#ffa000"},300)
},function(){
  $(this).animate({backgroundColor: "#FFC107"},300)
});
