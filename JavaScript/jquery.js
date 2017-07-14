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
    // Use parseInt for values
    var containerWidth = parseInt(container.width());
    var containerHeight = parseInt(container.height());
    var columnCurrentPosition = parseInt(column.css('right'));
    var columnCurrentHeight = parseInt(column.css('height'));
    var supermanLeft = parseInt(superman.css('left'));
    var supermanHeight = parseInt(superman.height());
    var currentSpeed = 10;
    
    var fallUp = false;

    // This is to get the columns moving 
    var beginGame = setInterval(function(){
        //Create variable to take value of columnCurrentPosition
        var columnCurrent = parseInt(column.css('right'));
        //Create if statement, once columns leave, need to return
        if(columnCurrent > containerWidth) {
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
        // Set Interval to 60 milliseconds 
        // Set CSS property to move right to left
        column.css('right', columnCurrent + currentSpeed);
        // Set fallUp to false to run function
        if (fallUp === false) {
            fallDown(); // move down if statement is false
        }
        
    }, 50);

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
// moveUp will decrease top by - 7 
function moveUp() {
    superman.css('top', parseInt(superman.css('top')) - 7);
}
$(document).on('keyup', function(space) {
    var spacebar = space.keyCode;
    if(spacebar === 32) {
        //Clear the interval so superman can fall back down
        clearInterval(fallUp);  
        fallUp = false;         
    } 
}); 


});