# splitflap
A cool and very lightweight Javascript "Split Flap" board-like animation for your text.

![The split flap effect](https://media.giphy.com/media/2zdkWpVpljtrYqwvB0/giphy.gif)

Works best if you use mono-spaced fonts like the one used in the project.

## Tips
If you go inside the splitflap.js file you'll find, amidst the lines of code, some that could be particularly useful:

`const nbJumpIterations = 4;` <- The name could be improved, but you can change this to tell the app how many iterations it should skip rendering. At a value of 4, the app will render only every 4th spliflap iteration. At 1 you'll see each and every character the board goes through, but the animation can be a bit slow.

`const texts = [ (...) ];` <- The actual texts that will be rendered.

`setTimeout(transitionTextTick, 60);` <- The time in ms between each iteration of the "flapping"

`setTimeout(changeText,1500);` <- The time in ms a text stays put after the animation has been completed 

