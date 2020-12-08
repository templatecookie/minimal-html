$('.grid').masonry({
    // options
    itemSelector: '.grid-item',
    columnWidth: 370,
    originLeft:false,
    originTop:false,
   
  });

// Mobile Menu Starts Here
var isActive = false;

$('.mobile-menu').on('click', function (){
    if (isActive){
        $(this).removeClass('active');
        $('body').removeClass('mobile-menu-open');
    } else{
        $(this).addClass('active');
        $('body').addClass('mobile-menu-open');
    }
    isActive = !isActive;
});
// Mobile Menu Ends Here
