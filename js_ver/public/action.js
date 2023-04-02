//jshint esversion:6



$(".square").on('mouseenter', function(e){
  $(this).find("img").hide();
  $(this).find(".btn-info").show();
}).on('mouseleave', function(e){
  $(this).find(".btn-info").hide();
  $(this).find("img").show();
});

