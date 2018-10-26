//Back end
function createInputArray(input){
  debugger
  var inputArray = [];
  for (i = 0; i <= input; i++){
    inputArray.push(i);
  }

}

function beepBoop(){
  createInputArray();
  for (i=0; i<inputArray.length; i++){
    if ([i] === 0){
      inputArray[i] = "Beep";
    }
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
