$(document).ready(function(){

  // menu
  $('#mobile-menu').meanmenu({
    meanScreenWidth: "991",
    meanMenuContainer: '.mobile-menu'
  });

      //testimonial-active
      $('.single-testimonial').slick({
        infinite: true,
        arrows:true,
        dots:false,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow:'.arrow_prev',
        nextArrow:'.arrow_next',
      });

      //contact page testimonial
      // $('.single_testimonial').slick({
      //   infinite: true,
      //   arrows:true,
      //   dots:false,
      //   slidesToShow: 2,
      //   slidesToScroll: 1,
      //   prevArrow:'.arrow_prev',
      //   nextArrow:'.arrow_next',
      // });



      $('.single_testimonial').slick({
        infinite: true,
        arrows:true,
        dots:false,
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow:'.arrow_prev',
        nextArrow:'.arrow_next',
        responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });


      // project Image Popup
      $('.view-project-popup').magnificPopup({
        type: 'image'
      });

      
        // counter
        $('.counter').counterUp({
          delay: 10,
          time: 1000
      });

      //home2 projects
      $('.home2-projects').slick({
        infinite: true,
        arrows:false,
        dots:true,
        slidesToShow: 4,
        slidesToScroll: 2,
        prevArrow:'.arrow_prev',
        nextArrow:'.arrow_next',
        responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });


      // home 2 testimonial 
      $('.home2-testimonial-active').slick({
        infinite: true,
        arrows:true,
        dots:true,
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow:'.arrow_prev',
        nextArrow:'.arrow_next',
        responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });


      // Scroll topBtn JS home 1
       
          
          $(window).scroll(function(){
              if($(this).scrollTop() > 40 ){
                  $('#topBtn').fadeIn();
              }else{
                  $('#topBtn').fadeOut();
              }
          });

          $("#topBtn").click(function(){
              $('html, body').animate({scrollTop : 0},300);
          });


        // Scroll topBtn JS home 2
          
        $(window).scroll(function(){
            if($(this).scrollTop() > 40 ){
                $('#topBtn2').fadeIn();
            }else{
                $('#topBtn2').fadeOut();
            }
        });

        $("#topBtn2").click(function(){
            $('html, body').animate({scrollTop : 0},300);
        });


        // Scroll topBtn JS home 3
      
          $(window).scroll(function(){
              if($(this).scrollTop() > 40 ){
                  $('#topBtn3').fadeIn();
              }else{
                  $('#topBtn3').fadeOut();
              }
          });
  
          $("#topBtn3").click(function(){
              $('html, body').animate({scrollTop : 0},300);
          });





    // home 3 testimonial 
    $('.testimonial-item-3-active').slick({
      infinite: true,
      arrows:true,
      dots:true,
      slidesToShow: 2,
      slidesToScroll: 1,
      prevArrow:'.arrow_prev',
      nextArrow:'.arrow_next',
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
 
      // home 3 blog
      $('.blog3-active').slick({
        infinite: true,
        arrows:true,
        dots:true,
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow:'.arrow_prev',
        nextArrow:'.arrow_next',
        responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });


      // header stiky
      if ($("#header").length > 0) {
        $(window).on("scroll", function (event) {
        var scroll = $(window).scrollTop();
        if (scroll < 1) {
        $(".header-area").removeClass("sticky");
        } else {
        $(".header-area").addClass("sticky");
        }
        });
        }







    //Pricing Plan   
  const toggleSwitch = document.querySelector(".toggle-switch");


  toggleSwitch.addEventListener("change",()=>{
      if(toggleSwitch.checked){
          document.querySelector(".pricing-main").classList.add("active");
      }
      else{
          document.querySelector(".pricing-main").classList.remove("active");
      }
  }); 



  
});
  