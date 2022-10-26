const {application, Router} = require("express");
const express = require("express");
const route = express.Route();

let players =
[
    {
        "name": "manish",
        "dob": "1/1/1995",
        "gender": "male",
        "city": "jalandhar",
        "sports": [
            "swimming"
        ]
    },
    {
        "name": "gopal",
        "dob": "1/09/1995",
           "gender": "male",
           "city": "delhi",
           "sports": [
               "soccer"
           ]
       },
       {
           "name": "lokesh",
           "dob": "1/1/1990",
           "gender": "male",
           "city": "mumbai",
           "sports": [
               "soccer"
           ]
       },
   ]

   Router.post("/players",function (req,res) {
    console.log(players)
    let newplayers = req.body;
    let found = req.body.name;
    console.log("new players found = "newplayers")
    for (i of players) {
        if (i.name == found) {
            return res.send("name already exists")
        }
    }
    players.push(newplayers)
    res.send({msg: players, status: true})
   })
   module.exports = route;