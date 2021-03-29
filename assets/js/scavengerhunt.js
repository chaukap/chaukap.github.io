$(function() {
    var round = 1;

    var image1_correct = {
        "src": "images/scavenger_hunt_1_correct.jpeg",
        "style": "width: 250px; height: 400px"
    }

    var image2 = {
        "src": "images/scavenger_hunt_2.png",
        "style": "width: 250px; height: 400px"
    }

    var image2_correct = {
        "src": "images/scavenger_hunt_2_correct.png",
        "style": "width: 250px; height: 400px"
    }

    var image3 = {
        "src": "images/scavenger_hunt_3.JPEG",
        "style": "width: 300px; height: 200px"
    }

    var image3_correct = {
        "src": "images/scavenger_hunt_3_correct.JPEG",
        "style": "width: 300px; height: 200px"
    }
    
    var final_image = {
        "src": "images/scavenger_hunt_final.JPG",
        "style": "width: 280px; height: 400px"
    }

    $('#submit').click(function() {
        if(round == 1){
            checkAnswer([
                    "elvis",
                    "elvis presley",
                    "debug"
                ],
                "Yep!",
                "It's the king of rock n roll...",
                "Who's that big toe?",
                image1_correct,
                image2
            );
        } else if (round == 2) {
            checkAnswer([
                    "colter",
                    "colter voss",
                    "fireripbitch",
                    "debug"
                ],
                "Oh it's FireRipBitch alright",
                "You once told him that Mackenzie never loved him...",
                "What motel are you so happy to see?",
                image2_correct,
                image3
            );
        } else if (round == 3) {
            checkAnswer([
                    "biggs",
                    "mine",
                    "biggs junction",
                    "amanda biggs",
                    "amanda",
                    "the biggs motel",
                    "biggs motel",
                    "debug"
                ],
                "What a trip :)",
                "Come on this is obvious...",
                "Thanx for hunting for scavengers with me. Here's your next clue, unless McKenna just gives it to you. I don't fully understand how this works.",
                image3_correct,
                final_image
            );
        }
    });

    async function checkAnswer(potentialAnswers, successMessage, failureMessage, nextClue, correctImage, nextImage) {
        var answer = $('#answer').val().toLowerCase();
        var correct = false;
        for(var i in potentialAnswers) {
            if(answer == potentialAnswers[i]) {
                correct = true;
            }
        }

        if(correct){
            $("#hint-image").attr("src", correctImage.src);
            $("#hint-image").attr("style", correctImage.style);
            $("#question").html(successMessage);
            round++;
            await sleep(2000);
            $("#question").html(nextClue);
            $("#hint-image").attr("hidden", "");
            $("#hint-image").attr("src", nextImage.src);
            $("#hint-image").attr("style", nextImage.style);
            await sleep(500);
            $("#hint-image").removeAttr("hidden");
        } else {
            $("#question").html(failureMessage);
        }
    }

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }
});