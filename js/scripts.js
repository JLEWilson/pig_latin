function noInputtedWords() {
  for (let i=0; i < arguments.length; i++) {
    console.log(arguments[i]);
    if (arguments[i].trim().length === 0) {
      return true;
    }
  }
  return false;
}

function startsVowel(word) {
  const vowelArray = ["a", "e", "i", "o", "u"];
  let letterArray = word.split('');
  for (let i=0; i < vowelArray.length; i++) {
    if (letterArray[0].toLowerCase() === vowelArray[i]) {
      return true;
    }
  };
  return false;
}

function startsConsonant(word){
  let letterArray = word.split('');
  for (let i=0; i < letterArray.length; i++) {
    if (!startsVowel(letterArray.join(''))) {
      letterArray.push(letterArray[0]);
      letterArray.shift();
    } else {
      break;
    }
  };
  if (letterArray[letterArray.length - 1].toLowerCase() === 'q' && letterArray[0].toLowerCase() === "u") {
    letterArray.push(letterArray[0]);
    letterArray.shift();  
  }
  return letterArray.join('');
}

function pigLatin(input){
  if(noInputtedWords(input)){
    return "";
  }
  let wordArray = input.split(" ");
  let outputArray = [];
  
  wordArray.forEach(function(word) {
    if (startsVowel(word)) {
      outputArray.push(word + "way");
    } else {
      outputArray.push(startsConsonant(word) + "ay");
    }
  }); 
  return outputArray.join(" ");
}

//UI Logic

$(document).ready(function(){
  $("#formOne").submit(function(event){
    event.preventDefault();
    const formInput = $("#formInput").val();
    $("#output").text(pigLatin(formInput));
  });
});