var main = function () {
    "use strict";

    var url;
    var $btnrock = $("<button>").text("Rock"),
        $btnpaper = $("<button>").text("Paper"),
        $btnscissors = $("<button>").text("Scissors"),
        $btnlizard = $("<button>").text("Lizard"),
        $btnspock = $("<button>").text("Spock");

    $("main .button").append($btnrock, $btnpaper, $btnscissors, $btnlizard, $btnspock);

    $btnrock.on("click", function () {
        url = "http://localhost:3000/play/rock";
        $.getJSON(url, function(apiResponse) {
            var $outcome = $("<p>");
            $.each(apiResponse, function(i, field){
                $outcome.append(i + ":" + field + " ");
            });
            $("main .content p:last").remove(); 
            $("main .content").append($outcome);
        }); 
    });

    $btnpaper.on("click", function () {
        url = "http://localhost:3000/play/paper";
        $.getJSON(url, function(apiResponse) {
            var $outcome = $("<p>");
            $.each(apiResponse, function(i, field){
                $outcome.append(i + ":" + field + " ");
            });
            $("main .content p:last").remove(); 
            $("main .content").append($outcome);
        }); 
    });
   
    $btnscissors.on("click", function () {
        url = "http://localhost:3000/play/scissors";
        $.getJSON(url, function(apiResponse) {
            var $outcome = $("<p>");
            $.each(apiResponse, function(i, field){
                $outcome.append(i + ":" + field + " ");
            });
            $("main .content p:last").remove(); 
            $("main .content").append($outcome);
        }); 
    });
   
    $btnlizard.on("click", function () {
        url = "http://localhost:3000/play/lizard";
        $.getJSON(url, function(apiResponse) {
            var $outcome = $("<p>");
            $.each(apiResponse, function(i, field){
                $outcome.append(i + ":" + field + " ");
            });
            $("main .content p:last").remove(); 
            $("main .content").append($outcome);
        }); 
    });
    
    $btnspock.on("click", function () {
        url = "http://localhost:3000/play/spock";
        $.getJSON(url, function(apiResponse) {
            var $outcome = $("<p>");
            $.each(apiResponse, function(i, field){
                $outcome.append(i + ":" + field + " ");
            });
            $("main .content p:last").remove(); 
            $("main .content").append($outcome);
        }); 
    });

        
};

$(document).ready(main);
