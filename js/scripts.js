// Back end
function beepBoop(input){
  var masterInput = input+1
  var beepBoopOutput = [];
  for (var i=0; i < masterInput; i++){
    console.log(beepBoopOutput)
    if (i %3 === 0 && i !== 0){
      beepBoopOutput.push("I'm sorry Dave. I'm afraid I can't do that.");
    } else if (i.toString().split("").includes("1")){
      beepBoopOutput.push("boop!");
    } else if (i.toString().split("").includes("0")){
      beepBoopOutput.push("beep!");
    } else {
      beepBoopOutput.push(" " + i.toString())
    }
  }
  return beepBoopOutput;
};
//Front end
$(document).ready(function(){
  $("#userInputForm").submit(function(event){
    event.preventDefault();
    var input = parseInt($("#userInput").val());
    var result = beepBoop(input)
    $("#input-well").hide();
    $("#result-well").show();
    $("#result").text(result.join(' '));
  });
  $('#refresh-btn').click(function() {
    location.reload(true);
  });
});
