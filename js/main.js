// /////////////////////////////////////collapsing navbar
// function collapseNavbar() {
    
// };
$(window).scroll(collapseNavbar);
$(document).ready(collapseNavbar);

$(function() {
    $('a.page-scroll').bind('click', function(event) {
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

function collapseNavbar() {
    if ($(".navbar").offset().top > 200) {
       $(".navbar-fixed-top").addClass("na-collapse");
      //$(".navbar-fixed-top").animate({backgroundColor : "#FFC107" },500);
    } else {
       $(".navbar-fixed-top").removeClass("na-collapse");
       //$(".navbar-fixed-top").animate({backgroundColor : 'rgba(0,0,0,0)'},500);
    }
}


$("#twitter").hover(function(){
    $(this).css("color","#1dcaff");
  },function(){
    $(this).css("color","#424242");
});

$("#github").hover(function(){
    $(this).css("color","#848484");
  },function(){
    $(this).css("color","#424242");
});


$("#soundcloud").hover(function(){
    $(this).css("color","#ff3a00");
  },function(){
    $(this).css("color","#424242");
});

$("#mailto").hover(function(){
    $(this).animate({color: "#FFC107"},500);
  },function(){
    // $(this).css("color","#424242");
    $(this).animate({color: "#424242"},500);
});