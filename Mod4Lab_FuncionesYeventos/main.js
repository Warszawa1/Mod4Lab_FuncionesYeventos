// GRAB AND STORE NODES
var n1 = document.getElementById("js-num1");
var n2 = document.getElementById("js-num2");   

var result = document.getElementById("js-result");
var addBtn = document.getElementById("js-add");
var subtBtn = document.getElementById("js-subtract");
var multBtn = document.getElementById("js-multiply");
var divBtn = document.getElementById("js-divide");


// ATTACH EVENT LISTENERS
addBtn.addEventListener("click", add, false);
subtBtn.addEventListener("click", subtract, false);
multBtn.addEventListener("click", multiply, false);
divBtn.addEventListener("click", divide, false);

// FUNCTIONS FOR MATHEMATICAL OPERATIONS
/* use Number() alternativa para convertir string a numero */
function add(){  
  if(n1.value ==  "" || n2.value == "") {
    alert("Debes rellenar los dos campos");
  }else {
    result.value = Number(n1.value) + Number(n2.value);}
}

// implicit coercion takes place here, so no need for Number()
function subtract() {
  if(n1.value ==  "" || n2.value == "") {
    alert("No dejes ninguno de los dos campos vacíos ");
  }else {
  result.value = Number(n1.value) - Number(n2.value);}
}

function multiply() {
  if(n1.value ==  "" || n2.value == "") {
  alert("No dejes ninguno de los dos campos vacíos ");
}else {
  result.value = Number(n1.value) * Number(n2.value);}
}


function divide() {
  if(n1.value ==  "" || n2.value == "") {
    alert("No dejes ninguno de los dos campos vacíos ");
  }else {
  result.value =Number(n1.value) / Number(n2.value);}
  console.log('running divide');
  showResult(n1.value / n2.value);
  
}

function showResult(res){
  console.log(result);
  result.value = res;
}




