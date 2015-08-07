var word1 = ["1"];
var word2 = ["2"];
var word3 = ["3"];
var buttonHeight = "46px";
var buttonWidth = "143px";
var textHeight = "86px";



function randomWord(array){
    var index = Math.floor(Math.random() * array.length);
    var chosenWord = array.splice(index, 1);
    return chosenWord;
}

function calcWidth (){
    // if the word being added contains a space, hyphen, or apostrophy, add pixels to the calculated width.
    totalTextWidth = $('.w1').width() + $('.w2').width() + $('.w3').width();
    var leftGutter = (screen.width - totalTextWidth)/2;
    var word2pos = leftGutter + $('.w1').width();
    var word3pos = word2pos + $('.w2').width();
    $('.w1').animate({left: leftGutter - 15 + "px"}, 400);
    $('.w2').animate({left: word2pos + "px"}, 400);
    $('.w3').animate({left: word3pos + 15 + "px"}, 400);
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

    $('.showCase').css("height", buttonHeight).css("width", buttonWidth);

    $('.btn').on('click', function(){
        $('.showCase').css("height", textHeight);

        var w1 = randomWord(word1);
        var w2 = randomWord(word2);
        var w3 = randomWord(word3);
        $('.showCase').html('<div class="w1">' + w1 + ' </div><div class="w2">' + w2 + ' </div><div class="w3">' + w3 + '</div>');
        calcWidth();
    });

    $('body').on('click', '.w2', function(){
        if (word2.length == 0){
            alert("Please seek therapy");
        }
        var newWord = randomWord(word2);
        $('.w2').slideUp(400, function(){
            $('.w2').hide().text(newWord);
            calcWidth();
            $('.w2').slideDown(400);
        });
    });

    $('body').on('click', '.w1', function(){
        if (word1.length == 0){
            alert("Please seek therapy");
        }
        var newWord = randomWord(word1);
        $('.w1').slideUp(400, function(){
            $('.w1').hide().text(newWord);
            calcWidth();
            $('.w1').slideDown(400);
        });
    });

    $('body').on('click', '.w3', function(){
        if (word1.length == 0){
            alert("Please seek therapy");
        }
        var newWord = randomWord(word3);
        $('.w3').slideUp(400, function(){
            $('.w3').hide().text(newWord);
            calcWidth();
            $('.w3').slideDown(400);
            });
    });

}); //doc ready

/*
* Wish list
* alert takes you away
* colors and shapes
* centering*/