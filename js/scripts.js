//Back end
var inputArray = [];
function createInputArray(input){
  for (i = 0; i <= input; i++){
    inputArray.push(i);
  }
  return beepBoop(inputArray)
}
function beepBoop(inputArray){
  for (i=0; i<inputArray.length; i++){
    if (inputArray[i] === 0){
      inputArray[i] = "Beep!";
    }
    if (inputArray[i] %3 === 0){
      inputArray[i] = "I'm sorry Dave. I'm afraid I can't do that.";
    }
    if (inputArray[i] === 1 ||inputArray [i]=== 100 || inputArray[i] >= 10 && inputArray[i] <= 19 || inputArray[i] %10 === 0 + 1){
      inputArray[i] = "Boop!";
    }
    if (inputArray[i] >= 10 && inputArray[i] <= 19 || inputArray[i] %10 === 0 + 1){
      inputArray[i] = "Boop!";
    }
    if (inputArray[i] %10===0){
      inputArray[i] = "Beep!";
    }
    if (inputArray[i] >= 101 && inputArray[i] <= 199){
      inputArray[i] = "Boop!";
    }
    console.log(inputArray)
  }
  return beepBoop;
}

//Front end
$(document).ready(function(){
  $("#userInputForm").submit(function(event){
    event.preventDefault();
    var input = parseInt($("#userInput").val());
    var result = createInputArray(input)
    $("#input-well").hide();
    $("#result-well").show();
    $("#result").text(inputArray.join(' '));
  });
  $('#refresh-btn').click(function() {
    location.reload(true);
  });
});
