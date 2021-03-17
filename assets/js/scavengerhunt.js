$(function() {
    var round = 1;

    $('#submit').click(function() {
        if(round == 1){
            checkAnswer([
                "elvis",
                "elvis presley"
            ]);
        }
    });

    function checkAnswer(potentialAnswers) {
        var answer = $('#answer').val().toLowerCase();
        for(var i in potentialAnswers) {
            if(answer == potentialAnswers[i]) {
                console.log("correct!");
            }
        }
    }
});