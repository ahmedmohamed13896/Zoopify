$(document).ready(function (){
  $('.services div').click(function () {
    $(this).addClass('active').siblings().removeClass('active');
  });
  $('.property-icon').hover(function(){
      $('.'+ $(this).data('value')).css("opacity","1");
      $(this).css('opacity',0);
    },
    function() {
      $('.'+ $(this).data('value')).css("opacity","0");
      $(this).css('opacity',1);

    });

});
