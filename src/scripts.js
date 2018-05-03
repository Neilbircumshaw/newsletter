const $ = require("jquery");

$('.success').delay(2000).queue(function(){
  $(this).addClass("fade");
});

$('.failed').delay(2000).queue(function(){
  $(this).addClass("fade");
});


$("form").submit((event) => {
  const userEmail = $("#email").val();

  $.ajax({
    url:"/",
    type: "POST",
    data: {email: userEmail}

  })
});
