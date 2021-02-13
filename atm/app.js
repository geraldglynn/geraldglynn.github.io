function appLoad(){
  // document.getElementById("atm-controls").innerHTML = keypadContent();
}

function keypad(elem){
  var currentValue = document.getElementById("value-input").innerHTML;
  if(currentValue.length > 3) return
  var enteredValue = elem.innerHTML
  if(isNaN(Number(enteredValue))) return
  
  debugger
  var newValue = currentValue + enteredValue;
  if(newValue == 0) return
  document.getElementById("value-input").innerHTML = newValue;
}
