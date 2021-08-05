// GRAB AND STORE NODES
var n1 = document.getElementById('js-num1');
var n2 = document.getElementById('js-num2');   

var result = document.querySelector('#js-result');
var addBtn = document.querySelector('#js-add');
var subtBtn = document.querySelector('#js-subtract');
var multBtn = document.querySelector('#js-multiply');
var divBtn = document.querySelector('#js-divide');

// ATTACH EVENT LISTENERS
addBtn.addEventListener('click', add, false);
subtBtn.addEventListener('click', subtract, false);
multBtn.addEventListener('click', multiply, false);
divBtn.addEventListener('click', divide, false);

// FUNCTIONS FOR MATHEMATICAL OPERATIONS
/* use Number() alternativa para convertir string a numero */
function add(){ 
	result.value = Number(n1.value) + Number(n2.value); 
} 
// implicit coercion takes place here, so no need for Number()
function subtract() {
  result.value = n1.value - n2.value;
}

function multiply() {
 result.value = n1.value * n2.value;
}


function divide() {
  result.value = n1.value / n2.value;
  console.log('running divide');
  showResult(n1.value / n2.value);
  
}

function showResult(res){
  console.log(result);
  result.value = res;
}

/*function checkInput () {	
var num1 = document.getElementById('js-num1').value;
  if (num1 == null || num1 == ''){ //No se debe permitir una entrada vacía
     alert('Error, no se pueden dejar campos en blanco');
     return false;
  }
  else 
  {
    return true;
  }	
}

checkInput(); */


