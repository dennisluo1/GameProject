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
        //Create variable to take value of c  olumnCurrentPosition
        var columnCurrent = parseInt(column.css('right'));
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
        // Set Interval to 50 milliseconds
        // Set CSS property to move right to left
        column.css('right', columnCurrent + currentSpeed);
        // Set fallUp to false to run fallDown function
        if (fallUp === false) {
            fallDown(); // move down if statement is false
        }
        }
    }, 50);

//End the game once collision is detected
function endGame() {
    clearInterval(beginGame);
    reset.slideDown();
}


// fallDown function 
function fallDown() {
    superman.css('top', parseInt(superman.css('top')) + 7)
}


// Use spacebar as key to play game,
// Space keycode is 32, moveUp equals false, move up, setInterval 40 miliseconds
$(document).on('keydown', function(space) {
    var spacebar = space.keyCode;
    if(spacebar === 32 && fallUp === false) {
        fallUp = setInterval(moveUp, 45);
    }
});


// moveUp will decrease top to botoom by - 7
function moveUp() {
    superman.css('top', parseInt(superman.css('top')) - 7);
} 
// Once key is lifted 
$(document).on('keyup', function(space) {
    var spacebar = space.keyCode;
    if(spacebar === 32) {
        //Clear the interval so superman can fall back down
        clearInterval(fallUp);
        fallUp = false;
    }
});


// Collision Detector
// Top column, bottom column, top of container, bottom of container
function collisionDetector($one, $two) {
    // use offset to target top and left properties
    var a = $one.offset().left; 
    var b = $one.offset().top;
    var c = $two.offset().left;
    var d = $two.offset().top;    
    // use outHeight to target heights of element such as top and bottom padding
    var heightOne = $one.outerHeight(true); 
    var heightTwo = $two.outerHeight(true);
    var widthOne = $one.outerWidth(true);
    var widthTwo = $two.outerWidth(true); 
    // Four types of possible combinations of collision    
    var combineOne = b + heightOne;
    var combineTwo = a + widthOne;
    var combineThree = d + heightTwo;
    var combineFour = c + widthTwo;
    // if statement
    if(combineOne < d || combineTwo < c || combineThree < b || combineFour < a) return false;
    return true;
}
});
// Reset with message and stop game permanently 