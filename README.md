# splitflap
A  pure Javascript "Split Flap" board-like animation for your text (with no dependencies).

![The split flap effect](https://media.giphy.com/media/2zdkWpVpljtrYqwvB0/giphy.gif)

Provides a "splitflap" function that can be used on a dom element.

Works best if you use mono-spaced fonts like the one used in the project.
<br><br>
### Parameters

| parameter | type    | description                                      |
| --------- | ------- | ------------------------------------------------ |
| `domElement`     | DOM Element  | the DOM element that will be targeted for replacement        |
| `texts`  | String[] | Array of texts we will cycle through          |
| `options` | Object  | An object containing animation options                            |
<br>

### Options
| option | type    | description                                      |
| --------- | ------- | ------------------------------------------------ |
| `timeOut`     | number  | the number of milliseconds the texts stays put after being animated        |
| `tickTimeOut`  | number | the number of milliseconds for a character to transition into a different one           |
| `nbJumpIterations` | number  | the number of characters that are skipped when going from a character to a different one
## Defaults
```
timeOut : 2000
tickTimeOut : 60
nbJumpIterations : 4
```

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

### Quick test

If you want to quickly test the example that is provided. You can host a local http server with:
```python -m SimpleHTTPServer 8080``` (python 2)
or
```python3 -m http.server``` (python 3)
