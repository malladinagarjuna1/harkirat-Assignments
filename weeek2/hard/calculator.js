
// //calculator 
// function add( a,b){
//     return a+b;
// }
// function subtract(a,b){
//     return a-b;
// }

// function multiply(a,b){
//     return a*b;
// }
// function divide(a,b){
//     return a/b;
// }

// function calculator(a,b,op){
//     op(a,b);
//     return op(a,b);

// }
// console.log(calculator(2,3,add));
// console.log(calculator(2,3, multiply));
// console.log(calculator(2,3,subtract));
// console.log(calculator(2,3, divide));
class calculator{
    constructor(){
         this.result =0; 

    }
    add(number){
  this.result += number;
    }
    subtract(number){
        this.result-=number;
    }
    multiply(number){
        this.result*=number;
    }
    divide(number){
        if(number==0){
            throw new Error("Invalid division by zero ");
        }
        this.result/= number;
    }
    clear(){
        this.result=0;
    }
    getresult(){
        return this.result;
    }

    calculate(inputExpression){
        const temp = inputExpression;
        const cleanedexpression = temp.replace(/\s+/g, '');
        const isValidExpression= /^[0-9+\-*/().]+$/.test(cleanedExpression);
      if(!isValidExpression){
        throw new Error("Invalid expression.");
      }
    try{
        this.result= eval(inputExpression);

    }catch(error){
        throw new Error("Invalid Expression");
    }
     
   if(this.result=== Infinity){
    throw new Error("Invalid Expression.");
   }
if(this.result === Infinity){
    throw new Error("Count divide a number by 0");
}
  return this.result;
}

}
  module.exports = Calculator;