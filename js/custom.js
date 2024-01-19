$(document).ready(function () {


	var $carousel = $('.slider');

var settings = {
  dots: false,
  arrows: false,
  slide: '.slick-slideshow__slide',
  slidesToShow: 1,
  centerMode: true,
  centerPadding: '450px',
  loop:true,
  speed:2000,
  autoplay:true,
   responsive: [
    {
      breakpoint: 1199,
      settings: {
      	centerPadding: '350px',
      }
    },
    {
      breakpoint: 1024,
      settings: {
      	centerPadding: '0',
      }
    },
    
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
};

$('.scroller-left').click(function(){
  $('.slider').slick('slickPrev');
})

$('.scroller-right').click(function(){
  $('.slider').slick('slickNext');
});

function setSlideVisibility() {
  //Find the visible slides i.e. where aria-hidden="false"
  var visibleSlides = $carousel.find('.slick-slideshow__slide[aria-hidden="false"]');
  //Make sure all of the visible slides have an opacity of 1
  $(visibleSlides).each(function() {
    $(this).css('opacity', 1);
  });

  //Set the opacity of the first and last partial slides.
  $(visibleSlides).first().prev().css('opacity', 0);
}

$carousel.slick(settings);
$carousel.slick('slickGoTo', 1);
setSlideVisibility();

$carousel.on('afterChange', function() {
  setSlideVisibility();
});


	$(".hamburger").click(function() {
  $(this).toggleClass('close');
});



$(window).on("load",function(){ 
  $(".loader").delay(1500).fadeOut(500);
  
});





$('.navigation-toggle').click(function(){
  $('.navgation').toggleClass('expanded');
  $('.scroll-content').toggleClass('overflowScroll');
  //$('.scroller').toggleClass('overflowScroll');
});







 



/*$(window).scroll(function(){
		  $('.parallax-image, .work-item').each(function(){
				if ($(this).offset().top < $(window).scrollTop()) {
      			var difference = $(window).scrollTop() - $(this).offset().top ;
			    var half = (difference / 2) + 'px',
               		transform = 'translate3d( 0, ' + half + ',0)';
			    $(this).find('img').css('transform', transform);
    		} else {
      			$(this).find('img').css('transform', 'translate3d(0,0,0)');
		    }
		  });
});*/


/*
$(window).scroll(parallax);

function parallax() {
  var scrolledTop = $(window).scrollTop();
  var viewPortHeight = $(window).height();

  $('.parallax-image img').run(function(){

    var parallaxSlow = this;

    var distance = parallaxSlow.offset();

    var slowFactor = ( scrolledTop - distance.top + (viewPortHeight / 2) ) / 24;

    var opacityFactor = 1 - ( ( (scrolledTop - distance.top) / parallaxSlow.height() ) * 0.8 );
    
    parallaxSlow.css({
      'MozTransform': 'translateY(' + slowFactor + 'px )',
      'webkitTransform': 'translateY(' + slowFactor + 'px )',
      'msTransform': 'translateY(' + slowFactor + 'px )',
      'transform': 'translateY(' + slowFactor + 'px )',
      //'opacity': opacityFactor
    });
  });

  $('.parallax-image img').run(function(){

    var parallaxZoom = this;

    var distance = parallaxZoom.offset();

    var zoomFactor = 1 + ( ( scrolledTop - distance.top + viewPortHeight ) * 0.0001 ) ;

    var opacityFactor = 1 + ( ( (scrolledTop - distance.top) / parallaxZoom.height() ) * 0.2 );
    console.log(opacityFactor)
    parallaxZoom.css({
      'webkitTransform': 'scale(' + zoomFactor + ') translate3d(0,0,0)',
      'MozTransform': 'scale(' + zoomFactor + ') translate3d(0,0,0)',
      'msTransform': 'scale(' + zoomFactor + ') translate3d(0,0,0)',
      'transform': 'scale(' + zoomFactor + ') translate3d(0,0,0)',
      'opacity': opacityFactor
    });
  });

}
*/



/*$("body").mCustomScrollbar({
  mouseWheelPixels: 280,
  autoDraggerLength:false,
  setTop: "-100px",
});*/



gsap.registerPlugin(ScrollTrigger);
// Setup
const scroller = document.querySelector('.scroller');
const bodyScrollBar = Scrollbar.init(scroller, { damping: .11, delegateTo: document});
ScrollTrigger.scrollerProxy(".scroller", {
  scrollTop(value) {
  	//console.log(value + arguments)
    if (arguments.length) {
      bodyScrollBar.scrollTop = value;
    }
    return bodyScrollBar.scrollTop;
  },

   


});

bodyScrollBar.addListener(ScrollTrigger.update);
ScrollTrigger.defaults({ scroller: scroller });


   document.querySelector(".work-item-home") &&
        $(".work-item").each(function () {
            var t = $(this).find(".work-item__image"),
                e = $(this).find(".work-media");
            gsap.to(t, { y: "0", ease: "none", duration: 1, scrollTrigger: { trigger: this, scrub: !0, start: "top bottom", end: "top 25%" } }),
                gsap.to(e, { scale: 1, ease: "none", duration: 1, scrollTrigger: { trigger: this, scrub: !0, start: "top bottom", end: "top 25%" } });
        })


/*const highlight = document.getElementById("highlight-style");
gsap.utils.toArray(".text-highlight").forEach((highlight) => {
  ScrollTrigger.create({
    trigger: highlight,
    start: "-100px center",
    onEnter: () => highlight.classList.add("active")
  });
});
*/

let st = ScrollTrigger.create({
        trigger: ".trigger",
        start: "top",
      end: "+=500",
         onEnter: () => $('.social_icon').addClass("lasChild")
        //  toggleClass: {targets: ".tagline", className: "active"},
      });


/*let sts = ScrollTrigger.create({
        trigger: ".trigger",
        start: "top",
       // end: "+=500",
         onEnter: () => $('.social_icon').removeClass("lasChild")
      });
*/





var heroTrigger = ScrollTrigger.create({
  trigger: '.scroller',
 // pin:true,
 // animation:action,
  //start: "0",
  //end: "+=1000", // enough before end of animation
  onLeave: () => heroTrigger.disable()
})



const sections = document.querySelectorAll('section');

sections.forEach((section, index) => {
  gsap.to(section, {autoAlpha: 1,
    scrollTrigger: {
      trigger: section,
      start: 'top bottom-=100',
    //  toggleActions: 'play none none reverse',
      // markers: true
    }
  });
  
  ScrollTrigger.create({
    trigger: section,
    id: index+1,
    start: 'top center',
    end: () => `+=${section.clientHeight + 30}`,
   // toggleActions: 'play reverse none reverse',
    toggleClass: {targets: ".tagline", className: "is-active"},
    // markers: true
  })
  
})





});






// // The actual animations and ScrollTriggers
// gsap.to('section.grey .text', { 
//   rotation: 360,
//   scrollTrigger: {
//     trigger: "section.grey",
//     start: "top top", 
//     end: () => "+=" + innerHeight,
//     pin: true,
//     scrub: true,
//     markers: true
//   }
// });

// gsap.from("section.red .text", {
//   x: -500,
//   opacity: 0,
//   scrollTrigger: {
//     trigger: "section.red",
//     start:"top 50%",     
//     toggleActions: "play none none reset",
//     // markers:true
//   },
// });





// Only necessary to correct marker position - not needed in production
// if (document.querySelector('.gsap-marker-scroller-start')) {		
//   const markers = gsap.utils.toArray('[class *= "gsap-marker"]');	

//   bodyScrollBar.addListener(({ offset }) => {  
//     gsap.set(markers, { marginTop: -offset.y })
//   });
// }
