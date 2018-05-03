const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/", (req, res) => {
res.render("index");
})

router.post("/", (req, res) => {
    axios({

    method: 'post',
    url: 'https://us18.api.mailchimp.com/3.0/lists/e175945299/members',
    headers: {Authorization: "apikey apiKeyGoesHere"},
    data: { email_address: req.body.email, status: 'subscribed' },
    responseType: 'json'

  }).then(function (response) {

    console.log(response)
    if(response.statusText === "OK"){
     const successMessage = response.statusText = "Success!"
     res.render("index", {successMessage:successMessage})


  }})
  .catch(function (error) {

    console.log(error)
    if(error.response.data.title === "Member Exists"){
     const memberExistsMessage = error.statusText = "You've already applied! But thanks again!"
     res.render("index", {memberExistsMessage:memberExistsMessage})}

     else if(error.response.data.detail === "Blank email address"){
      const missingMessage = error.statusText = "Try entering an email! Go on, don't be shy..."
      res.render("index", {missingMessage:missingMessage})}

      else if(error.response.data.detail.includes("looks fake or invalid, please enter a real email address.")){
       const invalidMessage = error.statusText = "Please enter a valid email!"
       res.render("index", {invalidMessage:invalidMessage})
    }

   })







})

module.exports = router;
