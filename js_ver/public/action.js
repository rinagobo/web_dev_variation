//jshint esversion:6

module.exports = getDetails;

function getDetails(){

  $(".square").on('mouseenter', function(e){
      $(this).find("img").hide();
      $(this).find(".btn-info").show();
  }).on('mouseleave', function(e){
      $(this).find(".btn-info").hide();
      $(this).find("img").show();
  });

};

console.log(module);
