# splitflap
A cool and very lightweight Javascript "Split Flap" board-like animation for your text.

![The split flap effect](https://media.giphy.com/media/2zdkWpVpljtrYqwvB0/giphy.gif)

Works best if you use mono-spaced fonts like the one used in the project.

## Usage Example

```javascript
import { splitFlap } from  "./splitflap.js";

const example_texts = [
  "Geneva            23",
  "Oporto            16",
  "Zurich            21",
  "Las Vegas         03",
];

let domElement = document.querySelector('#splitflap');

splitFlap(domElement, example_texts, {
  'timeOut' : 3000,
  'tickTimeOut' : 60,
  'nbJumpIterations' : 10,
});
```

### Test the example

If you want to quickly test