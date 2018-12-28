String.prototype.replaceAt=function(index, replacement) {
  let left;
  let right;

  if(this.substr(0,index) == undefined){
    left = "";
  }
  else
  {
    left = this.substr(0,index);
  }

  if(this.substr(index + replacement.length) == undefined ){
    right="";
  }
  else{
    right = this.substr(index + replacement.length);
  }
  return left + replacement + right;
}

const splitflapDiv = document.getElementById('splitflap');

const texts = [
  "Motherfuckers talkin' crazy",
  "Sayin' I should quit",
  "I fuckin' tell 'em make me",
  "Eat a fuckin' dick",
  "I'm feelin' like the greatest",
  "On the beat who ever did it",
  "Mike WiLL the one who made it",
  "It's Shady on the lyrics",
  "I'm somewhat outlandish they say",
  "You say we're cut from the same cloth",
  "But I guess you fabricate, eh?",
  "You better bring more men than the Latter Day Saints",
  "Manic states, Stephen Paddock with automatic stay sprayin'",
  "At anything that may stand in they way",
  "As I stand at the bay window with a hand grenade",
  "And a trey eight, at the Mandalay Bay",
  "Common sense, I'm a dollar short and a day late",
  "James Holmes at the Saturday Batman matinee",
  "Must have missed my CAT scan that day",
  "I just threw a Tampax at Dre",
  "Trashcan, Tascam and ashtray",
  "I'm turning back to a madman, can't take",
  "Anymore but I try to get away from the anger and rage",
  "My basal ganglia's an A to the K",
  "Get your ass sprayed like bidets",
  "Breakin' your legs eight different ways, ankle to waist",
  "You chumps don't even know how to do somethin'",
  "To give goosebumps a day when you say",
  "That somethin' you wrote gave someone a lump in their throat",
  "Or you had them choked up, you'd be yankin' my chain",
  "Feelin' like I'm headed for the padded cell, the",
  "Bar for me what I rap isn't fair but",
  "Guess that's the standard I'm held to",
  "But if somethin' like that doesn't tell ya",
  "You set a mark too high when platinum sales are",
  "Looked at as a failure",
  "Then you better take it back to The Shelter and Hamburger Helper",
  "'Cause damn it I'm still the",
  "Greatest in the world, greatest in the world, greatest in the world",
  "No lie, I might be",
  "The best to ever do it, the best to ever do it, the best to ever do it",
  "I feel like the greatest",
  "Woke up to honkies sounding like me",
  "Never be as good, never be as good",
  "Packing up wife-beaters, white t-shirts, white",
  "But I'm the greatest",
];

let curIndex = -1;

let curText;
let curEndText;

let nbJumpIterations = 4;
let curDoneIterations = 0;


setTimeout(changeText,2000);


function changeText(){
  let beforeText;
  let afterText;

  console.log(curIndex);
  if(curIndex >= 0){
    beforeText = texts[curIndex];
    if(curIndex == texts.length-1){
      afterText = texts[0];
    }
    else{
      afterText = texts[curIndex+1];
    }
  }
  else
  {
    beforeText = splitflapDiv.innerText;
    afterText = texts[0];
  }
  updateIndex();
  transitionText(beforeText, afterText);
}


function transitionText(startText, endText){
  console.log("Start text : "+startText);
  console.log("End text : "+endText);

  curText = startText;
  if(endText.length < curText.length){
    let diff = curText.length-endText.length;
    curEndText = endText+" ".repeat(diff);
  }
  else
  {
    curEndText = endText;
  }
  transitionTextTick();
}

function transitionTextTick(){
  let endLength;
  let startLength;

  // console.log(curText+" length : "+curText.length);
  // console.log(curEndText+" length : "+curEndText.length);
  
  if(curText.length == null){
    startLength=0;
  }
  else
  {
    startLength = curText.length;
  }
  if(curEndText.length == null){
    endLength=0;
  }
  else
  {
    endLength = curEndText.length;
  }
  var longestLength = (startLength >= endLength ? startLength : endLength);

  for (var i = 0; i < longestLength; i++) {
    let curCharCode = curText.charCodeAt(i);

    if(curCharCode == undefined || isNaN(curCharCode))
    {
      curCharCode = String.fromCharCode(32);
      curText = curText.replaceAt(i,curCharCode);
    }
    else
    {
      if(curText.charAt(i)!=curEndText.charAt(i)){
        if(curCharCode >= 126 || curCharCode < 32)
        {          
          curCharCode = 32;
        }
        else{
          curCharCode ++;
        }
        curText = curText.replaceAt(i,String.fromCharCode(curCharCode));
      }
    }    
  }

  if(curDoneIterations >= nbJumpIterations || curText.trim().localeCompare(curEndText.trim()) == 0 ){
    document.getElementById("splitflap").innerText=curText;

    if(curText.trim().localeCompare(curEndText.trim()) != 0)
    {
      setTimeout(transitionTextTick, 60);
    }
    else
    {
      setTimeout(changeText,1500);
    }
    curDoneIterations = 0;
  }
  else
  {
    curDoneIterations++;
    transitionTextTick();
  }
}

function updateIndex(){
  if(curIndex < texts.length-1)
  {
    curIndex++;
  }
  else
  {
    curIndex = 0;
  }
}

