#!/usr/bin/env node

"use strict";

var express = require('express');
var server,
    count = {"outcome":"", "win":0, "lose":0, "tie":0};

var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/play/rock', function(req, res) { 
    var ran = ['rock', 'paper', 'scissors', 'lizard', 'spock'][Math.floor(Math.random() * 5)];
    if (ran === ("lizard" || "scissors")) {
        count.win += 1 ;
	count.outcome = "win";
    } else if (ran === ("paper" || "spock")) {
	count.lose += 1 ;
        count.outcome = "lose";
    } else {
	count.tie += 1 ;
        count.outcome = "tie";
    }	
    res.json(count);
});

app.get('/play/paper', function(req, res) { 
    var ran = ['rock', 'paper', 'scissors', 'lizard', 'spock'][Math.floor(Math.random() * 5)];
    if (ran === ("rock" || "spock")) {
	count.win += 1;
	count.outcome = "win";
    } else if (ran === ("lizard" || "scissors")) {
	count.lose += 1;
        count.outcome = "lose";
    } else {
	count.tie += 1;
        count.outcome = "tie";
    }
    res.json(count);
});

app.get('/play/scissors', function(req, res) { 
    var ran = ['rock', 'paper', 'scissors', 'lizard', 'spock'][Math.floor(Math.random() * 5)];
    if (ran === ("paper" || "lizard")) {
        count.win += 1;
        count.outcome = "win";
    } else if (ran === ("rock" || "spock")) {
        count.lose += 1;
        count.outcome = "lose";
    } else {
        count.tie += 1;
        count.outcome = "tie";
    } 
    res.json(count);
});

app.get('/play/lizard', function(req, res) { 
    var ran = ['rock', 'paper', 'scissors', 'lizard', 'spock'][Math.floor(Math.random() * 5)];
    if (ran === ("paper" || "spock")) {
	count.win += 1;
	count.outcome = "win";
    } else if (ran === ("rock" || "scissors")) {
	count.lose += 1 ;
        count.outcome = "lose";
    } else {
	count.tie += 1 ;
        count.outcome = "tie";
    }
    res.json(count);
});

app.get('/play/spock', function(req, res) { 
    var ran = ['rock', 'paper', 'scissors', 'lizard', 'spock'][Math.floor(Math.random() * 5)];
    if (ran === ("rock" || "scissors")) {
	count.win += 1 ;
	count.outcome = "win";
    } else if (ran === ("paper" || "lizard")) {
	count.lose += 1 ;
        count.outcome = "lose";
    } else {
	count.tie += 1 ;
        count.outcome = "tie";
    }
    res.json(count);
});
     
server = app.listen(3000);
var address = server.address();
console.log("Server is listening at http://localhost:" + address.port + "/");

