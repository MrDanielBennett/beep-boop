//Back end
function createInputArray(input){
  var inputArray = [];
  for (i = 0; i <= input; i++){
    inputArray.push(i);
  }
  return beepBoop(inputArray)
}

function beepBoop(inputArray){
  inputArray.toString();
  for (i=0; i<inputArray.length; i++){
    if (inputArray[i] === 0){
      inputArray[i] = "Beep";
    }
    if (inputArray[i] === 1){
        inputArray[i] = "Boop";
    }
    if (inputArray[i] %3 === 0){
      inputArray[i] = "I'm sorry Dave. I'm afraid I can't do that.";
    }
    debugger
    if (inputArray[i] >= 10 && inputArray[i] < 19 || inputArray[i] %10 === 0 + 1){
      inputArray[i] = "Boop";

    }
    console.log(inputArray)
  }
}






//Front end
$(document).ready(function(){
  $("#userInputForm").submit(function(event){
    event.preventDefault();
    var input = parseInt($("#userInput").val());
    var result = createInputArray(input)
    console.log()
  })
})
