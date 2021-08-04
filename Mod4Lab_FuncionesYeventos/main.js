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

var num = document.getElementById("js-num1" && "js-num2").value;
    if (num == null || num == ""){ //No se debe permitir una entrada vacía
         //window.open("ejemplo_error_pages/error_001.html", "", ",top=500,left=500,width=850,height=250"); //ejemplo para dar los errores mediante ventanas emergentes
        alert('Escribe un número en el campo número');
        document.getElementById("js-num1" && "js-num2").value = ""; 
    } 

    /*if (n1.value=="" || n2.value=="") {
    alert("No se permiten campos vacios");
    }
    else if (n1.value== NaN || n2.value== NaN) {
    alert("No se permiten campos con números no numéricos");
    }*/


