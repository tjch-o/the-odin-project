# Project: Etch-A-Sketch

Live Preview: https://htmlpreview.github.io/?https://github.com/tjch-o/the-odin-project/blob/main/odin-etch-a-sketch/index.html

Link to project description: https://www.theodinproject.com/lessons/foundations-etch-a-sketch

In this project, I created a grid of 16 x 16 square divs. These square divs (also can be seen as pixels) are set to 
white colour by default. When the mouse hovers over the square divs then the square divs will change colour, 
leaving behind a trail like a pen would.
The default colour they will change to is black but this can be customised using the colour picker.

There are a few buttons above the grid that provide different functionality:
- The colour picker allows the user to customise the colour of the pen. When the mouse hovers over the specific
pixel the pixel will then be set to that colour.
- The range slider allows the user to choose how many squares they want instead of just 16 x 16. 
The minimum is set to 0 while the maximum is set to 100. 
The canvas size remains the same throughout and as the number of squares increases the size of the square becomes smaller.
When the user drags the slider a new clean grid will appear and their previous sketches will disappear, similar to the reset button being clicked.
- The Reset button turns all the pixels back to white.
- The Erase button when clicked sets the pen back to white colour so when the mouse hovers over a pixel the pixel turns to white colour.
- The Rainbow button when clicked has a similar function to the Erase button but instead of turning the pixel white it turns each individual pixel to a random colour.
- The canvas is by default set to the state where grid lines are switched on. User can choose to click 
the button to turn on and off grid lines as they please.

What I have learnt from this project:
- using CSS Grid for the first time
- more practice with manipulating the DOM and events (using mouseover)
- using different types of buttons such as the colour picker and range slider to handle user input
- storing user input which would then be used to run particular functions when an event is triggered
- (not particularly coding related) the process of deciding what extra functionality I should add to my website to improve user experience 
