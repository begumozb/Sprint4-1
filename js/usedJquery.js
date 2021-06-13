'use strict';

//Slide for Home Page
$(function() {

    //settings for slider
    var width = 720;
    var animationSpeed = 1000;
    var pause = 3000;
    var currentSlide = 1;

    //cache DOM elements
    var $slider = $('#slider');
    var $slideContainer = $slider.find('.slides');
    var $slides = $slideContainer.find('.slide');

    var interval;

    function startSlider() {
        interval = setInterval(function() {
            $slideContainer.animate({'margin-left': '-='+width}, animationSpeed, function() {
                //currentSlide++;
                if (++currentSlide === $slides.length) {
                    currentSlide = 1;
                    $slideContainer.css('margin-left', 0);
                }
            });
        }, pause);
    }
    function pauseSlider() {
        clearInterval(interval);
    }

    $slideContainer
        .on('mouseenter', pauseSlider)
        .on('mouseleave', startSlider);

    startSlider();
});


//All Pages

$(document).ready(function(){

    $('.fa-bars').click(function(){
      $(this).toggleClass('fa-times');
      $('.navbar').toggleClass('nav-toggle');
    });
  
    $(window).on('scroll load',function(){
  
      $('.fa-bars').removeClass('fa-times');
      $('.navbar').removeClass('nav-toggle');
  
      if($(window).scrollTop() > 30){
        $('header').addClass('header-active');
      }else{
        $('header').removeClass('header-active');
      }
  
      $('section').each(function(){
        var id = $(this).attr('id');
        var height = $(this).height();
        var offset = $(this).offset().top - 200;
        var top = $(window).scrollTop();
        if(top >= offset && top < offset + height){
          $('.navbar ul li a').removeClass('active');
          $('.navbar').find('[href="#' + id + '"]').addClass('active');
        }
      });
  
    });
  
  });

/*About Page */

// Making button redirect to another page using jQuery
// About Page to Join Page
$('.btn').on('click', function(event) {
  event.preventDefault(); 
  var url = $(this).data('target');
  location.replace(url);
})
// About Page to Our Work Page
$('.btn btn1').on('click', function(event) {
  event.preventDefault(); 
  var url = $(this).data('target');
  location.replace(url);
})

/*Join Us Page */
$('.message').on('click', function(event) {
  event.preventDefault();
  $( function() {
    $( "#dialog" ).dialog();
  } );
} );
