var
  c = document.querySelector(".c")
  del = document.querySelector(".del")
  exponent = document.querySelector(".exponent")
  divide = document.querySelector(".divide")
  multiply = document.querySelector(".multiply")
  subtract = document.querySelector(".subtract")
  add = document.querySelector(".add")
  equal = document.querySelector(".equal")
  point = document.querySelector(".point")
  empty = document.querySelector(".empty")
  one = document.querySelector(".one")
  two = document.querySelector(".two")
  three = document.querySelector(".three")
  four = document.querySelector(".four")
  five = document.querySelector(".five")
  six = document.querySelector(".six")
  seven = document.querySelector(".seven")
  eight = document.querySelector(".eight")
  nine = document.querySelector(".nine")
  zero = document.querySelector(".zero")
  result = document.querySelector(".result")
  previous = document.querySelector(".previous")
  operator = document.querySelectorAll(".operator")
  operation = document.querySelector(".operation")
;

let total = 0;
let firstNumber = 0
let secondNumber = 0


result.textContent = "0";
previous.textContent = "";


/*

/*---------- Number buttons --------*/

let fOne = () => {
 /* ------- First number ------------*/
 
  if (result.textContent == "0") {
    result.textContent = ""
    result.textContent = "1"
  } else {
  result.textContent += "1";
  }
  /* firstNumber = parseInt(result.textContent)
  console.log(firstNumber,secondNumber)*/

  /*---------- Second Number --------*/

 /* if (result.textContent[(chain - 1)] == operator){
    secondNumber = 
  }
*/
};

one.addEventListener("click", fOne);

let fTwo = () => {
  if (result.textContent == "0") {
    result.textContent = ""
    result.textContent = "2"
  } else {
  result.textContent += "2";
  }
  /* total = parseInt(result.textContent)
  console.log(total) */
};

two.addEventListener("click", fTwo);

let fThree = () => {
  if (result.textContent == "0") {
    result.textContent = ""
    result.textContent = "3"
  } else {
  result.textContent += "3";
  }
  /* total = parseInt(result.textContent)
  console.log(total) */
};

three.addEventListener("click", fThree);

let fFour = () => {
  if (result.textContent == "0") {
    result.textContent = ""
    result.textContent = "4"
  } else {
  result.textContent += "4";
  }
  /* total = parseInt(result.textContent)
  console.log(total) */
};

four.addEventListener("click", fFour);

let fFive = () => {
  if (result.textContent == "0") {
    result.textContent = ""
    result.textContent = "5"
  } else {
  result.textContent += "5";
  }
  /* total = parseInt(result.textContent)
  console.log(total) */
};

five.addEventListener("click", fFive);

let fSix = () => {
  if (result.textContent == "0") {
    result.textContent = ""
    result.textContent = "6"
  } else {
  result.textContent += "6";
  }
  /* total = parseInt(result.textContent)
  console.log(total) */
};

six.addEventListener("click", fSix);

let fSeven = () => {
  if (result.textContent == "0") {
    result.textContent = ""
    result.textContent = "7"
  } else {
  result.textContent += "7";
  }
  /* total = parseInt(result.textContent)
  console.log(total) */
};

seven.addEventListener("click", fSeven);

let fEight = () => {
  if (result.textContent == "0") {
    result.textContent = ""
    result.textContent = "8"
  } else {
  result.textContent += "8";
  }
  /* total = parseInt(result.textContent)
  console.log(total) */
};

eight.addEventListener("click", fEight);

let fNine = () => {
  if (result.textContent == "0") {
    result.textContent = ""
    result.textContent = "9"
  } else {
  result.textContent += "9";
  }
  /* total = parseInt(result.textContent)
  console.log(total) */
};

nine.addEventListener("click", fNine);

let fZero = () => {
  if (result.textContent == "0") {
    result.textContent = ""
    result.textContent = "0"
  } else {
  result.textContent += "0";
  }
  /* total = parseInt(result.textContent)
  console.log(total) */
};

zero.addEventListener("click", fZero);

let fMultiply = () => {
  firstNumber = parseFloat(result.textContent)
  result.textContent = "0"
  operation.textContent = "x"
  previous.textContent = firstNumber
};

multiply.addEventListener("click", fMultiply);


let fDivide = () => {
  firstNumber = parseFloat(result.textContent)
  result.textContent = "0"
  operation.textContent = "/"
  previous.textContent = firstNumber

};

divide.addEventListener("click", fDivide);


let fAdd = () => {
  firstNumber = parseFloat(result.textContent)
  result.textContent = "0"
  operation.textContent = "+"
  previous.textContent = firstNumber

};

add.addEventListener("click", fAdd);


let fSubtract = () => {
  firstNumber = parseFloat(result.textContent)
  result.textContent = "0"
  operation.textContent = "-"
  previous.textContent = firstNumber

};

subtract.addEventListener("click", fSubtract);


let fExponent = () => {
  firstNumber = parseFloat(result.textContent)
  result.textContent = "0"
  operation.textContent = "^"
    previous.textContent = firstNumber

};

exponent.addEventListener("click", fExponent);


let fPoint = () => {
  result.textContent += "."
};

point.addEventListener("click", fPoint);

let fC = () => {
  result.textContent = "0";
  operation.textContent = ""
  previous.textContent = "0"
  firstNumber = 0
};

c.addEventListener("click", fC);

let fDel = () => {
  /* let last = result.textContent[result.textContent.length]
  result.textContent -= last; */
  let chain = result.textContent.length
  result.textContent = result.textContent.substring(0,chain-1)
  if (result.textContent == ""){
    result.textContent = "0"
  }
};

del.addEventListener("click", fDel);
/*
let n1 = firstNumber
let n2 = parseFloat(result.textContent)*/

let fEqual1 = () => {
  let secondNumber = parseFloat(result.textContent)
  fEqual2(firstNumber, secondNumber)
};

let fEqual2 = (a1,a2) => {

  if (operation.textContent === "+") {
    total = a1 + a2
  } else if (operation.textContent == "-") {
    total = a1 - a2
  } else if (operation.textContent == "x") {
    total = a1 * a2
  } else if (operation.textContent == "/") {
    total = a1 /a2
  } else if (operation.textContent == "^") {
    total = Math.pow(a1,a2)
  };
  
  previous.textContent = firstNumber + operation.textContent + result.textContent
  

  
  result.textContent = total

  operation.textContent = "="

};



equal.addEventListener("click", fEqual1)/* firstNumber,parseFloat(result.textContent)) */;

/* result.textContent = total
 console.log(parseFloat(result.textContent)) */
