function keypadContent(){
  return `
<table id="keypad" class="keypad">
  <tr>
    <td onclick="keypad(this)">7</td>
    <td onclick="keypad(this)">8</td>
    <td onclick="keypad(this)">9</td>
  </tr>
  <tr>
    <td onclick="keypad(this)">4</td>
    <td onclick="keypad(this)">5</td>
    <td onclick="keypad(this)">6</td>
  </tr>
  <tr>
    <td onclick="keypad(this)">1</td>
    <td onclick="keypad(this)">2</td>
    <td onclick="keypad(this)">3</td>
  </tr>
  <tr>
    <td onclick="keypad(this)">#</td>
    <td onclick="keypad(this)">0</td>
    <td onclick="keypad(this)">*</td>
  </tr>
</table>
`
}

function appLoad(){
  document.getElementById("atm-controls").innerHTML = keypadContent();
}

function keypad(elem){
  var enteredValue = elem.innerHTML  
  var currentValue = document.getElementById("atm-screen").innerHTML;
  var newValue = currentValue + enteredValue;
  if(newValue == 0) return
  document.getElementById("atm-screen").innerHTML = newValue;
}
