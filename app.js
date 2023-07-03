$(document).ready(function(){
    $('ul.nav li.dropdown').hover(function() {
      $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(200);
    }, function() {
      $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(200);
    });  
});


$('.owl-carousel').owlCarousel({
  margin:10,
  loop:true,
  autoWidth:true,
  items:2,
  autoplay:true,
  autoplayTimeout:5000, 
  
})





