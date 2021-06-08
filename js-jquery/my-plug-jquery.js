$(function () {
   // height of header and overlay
   $('.header').height($(window).height());
   $('.overlay').height($(window).height());

   // fix height when resize window
   $(window).resize(function () {
      $('.header').height($(window).height());
      $('.overlay').height($(window).height());

      // center the paragraph in slider in center herizontal whin resize
      $('.slider').each(function () {
         $(this).css('paddingTop', ($(window).height() - $('.slider .div-slider').height() - 100) / 2);
      });
   });

   // adjust and handle active on navbar
   $('.links li a').click(function () {
      $(this).parent().addClass('active').siblings('.active').removeClass('active');
   });

   // to run bxslider
   $('.slider').bxSlider({
      pager: false,
   });

   // center the paragraph in slider in center herizontal
   $('.slider').each(function () {
      $(this).css('paddingTop', ($(window).height() - $('.slider .div-slider').height() - 100) / 2);
   });

   // smoth scroll with jquery
   $('.links li a').on('click', function () {
      $('html, body').animate({
         scrollTop: $($(this).data('value')).offset().top,
      });
   });

   // outo switch slider code in testimonial
   //? we will make self invoke function (function functionName(){})()
   (function autoSlider() {
      $('.my-slider .active').each(function () {
         if (!$(this).is(':last-child')) {
            $(this)
               .delay(3000)
               .fadeOut(1000, function () {
                  $(this)
                     .removeClass('active')
                     .next()
                     .fadeIn(1000, function () {
                        $(this).addClass('active');
                        autoSlider();
                     });
               });
            // or
            // $(this)
            //    .delay(3000)
            //    .fadeOut(1000, function () {
            //       $(this).removeClass('active').next().fadeIn(1000).addClass('active');
            //       autoSlider();
            //    });
         } else {
            $(this)
               .delay(3000)
               .fadeOut(1000, function () {
                  $(this).removeClass('active').parent().children(':first-child').fadeIn(1000).addClass('active');
                  autoSlider();
                  // or
                  // ممكن نحط الكول مناداه فانكشن الاوتو سليدر في الكول باك فانكشن اللي هتحصل بعد الفيد ان او نحطها زي ما احنا عاملين اخر حاجة في الكول باك فانكشن بتاع الفيد اوت
                  // or
                  // $(this).removeClass('active');
                  // $('.my-slider div').eq(0).addClass('active').fadeIn(1000);
                  // // or
                  // $('.my-slider div:first-child').addClass('active').fadeIn(1000);
                  // autoSlider();
               });
         }
      });
   })();

   // adjust and handle class selected on li that suffle and mix divs
   $('.our-projects .shuffle li').click(function () {
      $(this).addClass('selected').siblings().removeClass('selected');
   });

   // add nice scroll
   $('body').niceScroll({
      cursorcolor: '#1abc9c', // change cursor color in hex
      cursoropacitymin: 0.4, // change opacity when cursor is inactive (scrollabar "hidden" state), range from 1 to 0
      cursorwidth: '7px', // cursor width in pixel (you can also write "5px")
      cursorborder: '1px solid #1abc9c', // css definition for cursor border
      scrollspeed: 100, // scrolling speed
   });
});
