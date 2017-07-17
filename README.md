# Superman Vs Kryptonite

![](./Images/screenshot1.png)
![](./Images/screenshot2.png)

Play the game here: 
http://speaker-ivory-26042.bitballoon.com/

## What is Superman Vs Kryptonite?

As a young teenager, my favorite show was, "Smallville." Smallville is a ten season series that depicts the life of Clark Kent, also known as "Superman." Growing up I remember how much I looked forwards to watching Smallville on Thursdays at 8pm. For this project, I decided to incorporate the theme of Superman into one of my favorite mobile games, "Flappy Bird." This game however is played by using the four arrow keys whereas the original Flappy Bird only uses the spacebar. Download and play now!

## Technical Discussion

* HTML 
* CSS
* jQuery

### Notes on Game Structure

```
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
```
```
function collisionDetector($clark, $lex) {
    // Use offset to target top and left properties
    var a = $clark.offset().left; 
    var b = $clark.offset().top;
    var c = $lex.offset().left;
    var d = $lex.offset().top;    
    // Use outHeight to target heights of element such as top and bottom padding
    var heightOne = $clark.outerHeight(true);  
    var heightTwo = $lex.outerHeight(true);
    var widthOne = $clark.outerWidth(true);
    var widthTwo = $lex.outerWidth(true); 
    // Four types of possible combinations of collision    
    var combineOne = b + heightOne;
    var combineTwo = a + widthOne;
    var combineThree = d + heightTwo;
    var combineFour = c + widthTwo;
    // If statements
    if(combineOne < d || combineTwo < c || combineThree < b || combineFour < a) return false     ;
    return true;
} 
});
```
The first sample of code demonstrates how I was able to set up the four arrow keys of this game using 'keyup' and 'keyUp' with four keyCodes. In addition, the second sample of code is collision detector that is used in this game. By far one of my biggest challenges of this project. I learned to use the offset and outerHeight methods for the collision detectors.
## The Making of Superman Vs Kryptonite

Credits: 
* http://flappybird.io/
* https://codepen.io/aamirafridi/pen/tGFKx
* https://www.youtube.com/watch?v=cXgA1d_E-jY&t=3s
* https://www.youtube.com/watch?v=Wrzr-QBVNNM&t=2393s
* https://codepen.io/JTParrett/pen/zwhyI

## Opportunities for Future Growth

The way this game is currently set up is that the user must avoid the green kryptonite in this game thereby scoring points. One of the next few steps of this game is to add superman's laser abilities to shoot down the kryptonites and score higher points. In addition I want to incorporate more villian characters into the game so that users have the ability to score higher points in the game. 
