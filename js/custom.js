$(document).ready(function() {
	
	//about-tab

	$( ".about-tab" ).tabs();


	//testimonial-slider

	//banner-slider

  $('.testimonial-content-slide').slick({
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


  //news-blog  slider


$('.news-blog-slide').slick({
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});



//resource slide
$('.resources-slider').slick({
  dots: true,
  infinite: true,
  speed: 300,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


//home-download slider

$('.home-download-content').slick({
  dots: true,
  infinite: true,
  speed: 300,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 2,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


     //inner mission accordion

    $( ".inner-mission-accordion" ).accordion();



    //menu
    $(".menubtn").click(function() {
       $('.menuholder').addClass("menuholderadd");
  });
  $(".cross").click(function() {
       $('.menuholder').removeClass("menuholderadd");
       $(".subcross").parents('.hashchild').children('.submenu').removeClass('submenu1');
  });

     $(".hashchild .newadd").click(function() {
       $(this).parents('.hashchild').children('.submenu').addClass('submenu1');
  });
  $(".subcross").click(function() {
       $(this).parents('.hashchild').children('.submenu').removeClass('submenu1');
  });


  //sticky-header

  $(window).scroll(function() {
          stickyHeader();
      });
      function stickyHeader() {
         if ($(this).scrollTop() > 90){
                 $('body').addClass("sticky"); 
         } else { 
             $('body').removeClass("sticky"); 
         } 
    }


      //preloader
      
    $(".loader").delay(2000).fadeOut("slow");
  $("#overlayer").delay(2000).fadeOut("slow");

//wow

new WOW().init();


  //lazyloading

  $(".lazyScrollLoading").lazyScrollLoading({
    lazyItemSelector : ".lazyItem",
    onLazyItemFirstVisible : function(e, $lazyItems, $firstVisibleLazyItems) {
      $firstVisibleLazyItems.each(function() {
        this.innerHTML = this.getAttribute("data-lazytext");
      });
    }
  });




});


