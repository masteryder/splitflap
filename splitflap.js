/**
 * Adds a replaceAt function to strings that takes in an index and a replacement character
 *
 */
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

let splitFlapDefaults = {
  'timeOut' : 2000,
  'tickTimeOut' : 60,
  'nbJumpIterations' : 4,
};

/**
 *
*/
function splitFlap(domElement, texts, options = splitFlapDefaults ){

  let curIndex = -1;
  let curDoneIterations = 0;
  let curText;
  let curEndText;

  const nbJumpIterations = options.nbJumpIterations;
  const timeOut = options.timeOut;
  const tickTimeOut = options.tickTimeOut;

  setTimeout(changeText, timeOut);

  function changeText(){

    let beforeText;
    let afterText;

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
      beforeText = domElement.innerText;
      afterText = texts[0];
    }
    updateIndex();
    transitionText(beforeText, afterText);
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

  function transitionText(startText, endText){
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
      domElement.innerText=curText;

      if(curText.trim().localeCompare(curEndText.trim()) != 0)
      {
        setTimeout(transitionTextTick, tickTimeOut);
      }
      else
      {
        setTimeout(changeText,timeOut);
      }
      curDoneIterations = 0;
    }
    else
    {
      curDoneIterations++;
      transitionTextTick();
    }
  }
}


export {splitFlap};