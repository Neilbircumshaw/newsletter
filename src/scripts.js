const $ = require("jquery");




$("form").submit((event) => {
  const userEmail = $("#email").val();
  event.preventDefault();
  $.ajax({
    url:"/",
    type: "POST",
    data: {email: userEmail},
    success: (response) => {
      console.log(response)
    }
  })
});
