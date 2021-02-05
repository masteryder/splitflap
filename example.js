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