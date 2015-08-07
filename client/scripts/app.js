var word1 = ["1"];
var word2 = ["2"];
var word3 = ["3"];


function randomWord(array){
    var index = Math.floor(Math.random() * array.length);
    var chosenWord = array.splice(index, 1);
    return chosenWord;
}

$(document).ready(function(){
    $.ajax({
        url: "/data/nouns",
        success: function(data){
            word3 = data.nouns;

        },
        complete: function(){
        }
    }); //ajax1

    $.ajax({
        url: "/data/metaAdj",
        success: function(data){
            word1 = data.metaAdj;

        },
        complete: function(){

        }
    }); //ajax2

    $.ajax({
        url: "/data/adjectives",
        success: function(data){
            word2 = data.adjectives;

        },
        complete: function(){

        }
    }); //ajax3

    $('.btn').on('click', function(){
        var w1 = randomWord(word1);
        var w2 = randomWord(word2);
        var w3 = randomWord(word3);
        $('.showCase').html('<div class="w1">' + w1 + ' </div><div class="w2">' + w2 + ' </div><div class="w3">' + w3 + '</div>');
    });

    $('body').on('click', '.w2', function(){
        if (word2.length == 0){
            alert("Please seek therapy");
        }
        var newWord = randomWord(word2);
        $('.w2').slideUp(400, function(){
            $('.w2').hide().text(newWord).slideDown(1000);
            console.log(word1);
        });
    });

    $('body').on('click', '.w1', function(){
        if (word1.length == 0){
            alert("Please seek therapy");
        }
        var newWord = randomWord(word1);
        $('.w1').slideUp(400, function(){
            $('.w1').hide().text(newWord).slideDown(1000);
            console.log(word1);
        });
    });

    $('body').on('click', '.w3', function(){
        if (word1.length == 0){
            alert("Please seek therapy");
        }
        var newWord = randomWord(word3);
        $('.w3').slideUp(400, function(){
            $('.w3').hide().text(newWord).slideDown(1000);
            console.log(word1);
        });
    });

}); //doc ready

/*
* Wish list
* alert takes you away
* colors and shapes
* centering*/