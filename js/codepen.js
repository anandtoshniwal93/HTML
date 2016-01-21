jQuery(document).ready(function($) {
  if ( $(window).width() > 1024) {
  $("#zen-resources").css({'height':(($("#zen-participation").height())+'px')});
  $(".sidebar").css({'height':(($(".supporting").height()-$("footer").height()+$(".height").height()-30  ) +'px')});

}
});

