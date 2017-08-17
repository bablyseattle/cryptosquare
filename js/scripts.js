

// User Interface Logic
$(document).ready(function(){
	$("#formOne").submit(function(event) {
		event.preventDefault();
		var sentenceInput = $("textarea#sentenceInput").val();
		var result = cryptosquare(sentenceInput);
    //var arrayInput = sentenceInput.split("");
    //alert(arrayInput);
		$(".result").text(result);
	});
});

// business Logic

var cryptosquare = function(inputString) {
  var inputLetters = inputString.replace(/[^0-9a-z]/gi,"");
  var strLength = inputLetters.length;
  var rows,column,cryptosquareArray;
  var strArray = [];
  var cryptosquareString= [];

  var rowsColumnCalculator = function(num){
    var sqrt = Math.sqrt(num);
     rows = Math.ceil(sqrt);
     column = Math.round(sqrt);
  }

  var fillStrTable = function(str,row,col) {
    var strArr = str.split("");
    var y  =0;
    for(var i =0; i < row; i++ ){
      if(!strArray[i]){
          strArray[n] = [];
        }
      for(var n=0 ; n < col && y < strArr.length ; n++){
        if(!strArray[n]){
          strArray[n] = [];
        }
        strArray[i][n]= strArr[y];
        y++
      }
    }
    alert(strArray);
  }

  var readStrTable = function(row,col) {
    var y  =0;
    for(var i =0; i < col; i++ ){
      for(var n=0 ; n < row ; n++){
        if(strArray[n][i] != "undefined"){
      		cryptosquareString[y] = strArray[n][i];
      	}
        y++
      }
    }

  }
  var addSpace = function(){
    for(var i = 0; i < cryptosquareString.length; i++){
      if(i%5 == 0 && i != 0){
        cryptosquareString[i] = " "+cryptosquareString[i];
      }
    }
    cryptosquareString=cryptosquareString.toString().replace(/,/g,"");
  }

  rowsColumnCalculator(strLength);
  fillStrTable(inputLetters,rows,column);
  readStrTable(rows,column);
  addSpace();
  return cryptosquareString;
}
