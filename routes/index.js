const express = require("express");
const router = express.Router();
const axios = require("axios");
const cheerio = require('cheerio');
const $ = cheerio.load('div(class="success") Success!');

router.get("/", (req, res) => {
res.render("index");
})

router.post("/", (req, res) => {
    axios({

    method: 'post',
    url: 'https://us18.api.mailchimp.com/3.0/lists//members',
    headers: {Authorization: "apikey "},
    data: { email_address: req.body.email, status: 'subscribed' },
    responseType: 'json'

  })


})

module.exports = router;
