
// User Interface Logic
$(document).ready(function(){
	$("#formOne").submit(function(event) {
		event.preventDefault();
		var sentenceInput = $("textarea#sentenceInput").val();
		var result = cryptosquare(sentenceInput);
		$(".result").text(result);
	});
});

// business Logic

var cryptosquare = function(inputString) {
  var inputLetters = inputString.replace(/[^0-9a-z]/gi,"");
  var strLength = inputLetters.length;
  alert(inputLetters);
  var rowsNum;
  var columnsNum;
  var sqrt = Math.sqrt(strLength);
  var rowsNum = Math.ceil(sqrt);
  var columnsNum = Math.floor(sqrt);

}
