// Understanding logic of flappy bird: https://www.youtube.com/watch?v=cXgA1d_E-jY&t=3s
$(function () {
    // Give names to class and id to use for dom manipulation/jQuery
    var container = $('.container');
    var superman = $('.superman');
    var column = $('.column');
    var columnOne = $('#column-one');
    var columnTwo = $('#column-two');
    var score = $('#the-score');
    var speed = $('#the-speed');
    var reset = $('.reset');
    
    var containerWidth = parseInt(container.width());
    var containerHeight = parseInt(container.height());
    var columnCurrentPosition = parseInt(column.css('right'));
    var columnCurrentHeight = parseInt(column.css('height'));
    var supermanLeft = parseInt(superman.css('left'));
    var supermanRight = parseInt(superman.css('right'));
    var supermanHeight = parseInt(superman.height());
    var currentSpeed = 10;

    var fallUp = false;
    // This is to get the columns moving
    var beginGame = setInterval(function() {
            //top column // bottom column // top of container // bottom of container
        if ( collisionDetector(superman, columnOne) ||  collisionDetector(superman, columnTwo) || parseInt(superman.css('top') <= 0 ) || 
            parseInt(superman.css('top')) > containerHeight - supermanHeight) 
            {
            // Once collision is detected, end the game 
            endGame();
        } else {
        //Create variable to take value of columnCurrentPosition 
        var columnCurrent = parseInt(column.css('right'));

        //Update score 
        if(supermanRight < columnCurrent) {
            // columnCurrent > containerWidth - supermanLeft
            score.text(parseInt(score.text()) + 1)
        }
        //Create if statement, once columns leave, need to return
        // update the scores
        if(columnCurrent > containerWidth ) {
            // Randomize column heights
            var changeHeight = parseInt(Math.random() * 10);
            // Manipulate height of first column
            columnOne.css('height', columnCurrentPosition + changeHeight);
            // Manipulate height of second column
            columnTwo.css('height', columnCurrentPosition - changeHeight);
            // Increase speed by 1 as game goes on
            currentSpeed  = currentSpeed + 1;
            speed.text(currentSpeed);
            // Column returns if it leaves container
            columnCurrent = columnCurrentPosition;
        }
        // Set Interval to 45 milliseconds
        // Set CSS property to move right to left
        column.css('right', columnCurrent + currentSpeed);
        // Set fallUp to false to run fallDown function
        if (fallUp === false) {
            fallDown(); // move down if statement is false
        }
        }
    }, 45);
// fallDown function, superman needs to be constantly falling down
function fallDown() {
    superman.css('top', parseInt(superman.css('top')) + 7);
}
// Referenced keyup/keydown from: https://codepen.io/JTParrett/pen/zwhy
// Code to move Superman
setInterval(flyingHero, 10);
var sky = {} 
var forward = 10;

$(window).keydown(function(event) {
    sky[event.keyCode] = true;
});

$(window).keyup(function(event) {
    delete sky[event.keyCode];
});
// Up, down, left, right keys
function flyingHero() {
    for (var direction in sky) {
        if (direction == 37){ // left arrow
            $(".superman").animate({left: "-=5"}, 0);            
        }
        if (direction == 38) { // up arrow
            $(".superman").animate({top: "-=5"}, 0); 
        }        

        if (direction == 39) { // right arrow
            $(".superman").animate({left: "+=5"}, 0); 
        }
        if (direction == 40) { // down arrow
            $(".superman").animate({top: "+=5"}, 0);
        }
    }
}
//End the game once collision is detected
function endGame() {
    clearInterval(beginGame);
    alert("Game Over! Play again?");
}

// Collision Detector
// Referenced collision detector from: https://www.youtube.com/watch?v=Wrzr-QBVNNM&t=2393s
// Top column, bottom column, top of container, bottom of container
function collisionDetector($clark, $lex) {
    // use offset to target top and left properties
    var a = $clark.offset().left; 
    var b = $clark.offset().top;
    var c = $lex.offset().left;
    var d = $lex.offset().top;    
    // use outHeight to target heights of element such as top and bottom padding
    var heightOne = $clark.outerHeight(true);  
    var heightTwo = $lex.outerHeight(true);
    var widthOne = $clark.outerWidth(true);
    var widthTwo = $lex.outerWidth(true); 
    // Four types of possible combinations of collision    
    var combineOne = b + heightOne;
    var combineTwo = a + widthOne;
    var combineThree = d + heightTwo;
    var combineFour = c + widthTwo;
    // if statements
    if(combineOne < d || combineTwo < c || combineThree < b || combineFour < a) return false     ;
    return true;
} 
});
// Reset with message and stop game permanently 
// Sources: 
// https://www.youtube.com/watch?v=cXgA1d_E-jY&t=3s
// https://www.youtube.com/watch?v=Wrzr-QBVNNM&t=2393s
// https://codepen.io/JTParrett/pen/zwhyI

