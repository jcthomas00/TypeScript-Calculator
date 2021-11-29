let output = document.querySelector('.output') as HTMLInputElement;
  /*declare the following variables and types
    num1 as number
    num2 as number
    operand as string
    
    Figure out how to set the values of num1 and num2 as the buttons are clicked
    */
   let num1:number, num2:number, operand:string;

document.querySelector('.calc').addEventListener('click',(evt)=>{
    let button = evt.target as HTMLButtonElement;
  
    if(button.className.indexOf('num')!==-1){
        console.log(button.innerHTML);      
        output.value += button.innerHTML;
    }
    if(button.className.indexOf('operator')!==-1){
        console.log(button.innerHTML);      
        output.value += button.innerHTML;
    }
    if(button.className.indexOf('equal')!==-1){
        console.log(button.innerHTML);
        const NumRegex:RegExp = /\D/, OpRegex:RegExp = /\d/;
        let calculation = calculate(output.value.split(NumRegex), output.value.split(OpRegex).filter(trash => trash !== ''));
        output.value = calculation.toString();
    }
    if(button.className.indexOf('reset')!==-1){
       output.value = '';
    }
    
    /* create another condition to clear the value of the input when C is pressed*/
});

//create a function that takes in 2 numbers and a string (operand)
function calculate(numArray:string[], opArray:string[]){
    /* based on the operand, find the correct value of the 2 numbers.  i.e., 4+5=9, 4*5=20, etc
    return that value
    */
   let calc = +numArray[0];
   console.log(`Op: ${opArray} | num: ${numArray}`);
   for(let i = 0; i < opArray.length; i++){
       switch (opArray[i]){
           case '+':
               calc += +numArray[i+1];
               break;
            case '-':
                calc -= +numArray[i+1];
                break;
            case '*':
                calc *= +numArray[i+1];
                break;
            case '/':
                if(+numArray[i+1] === 0){ return "Err: can't divide by zero."}
                calc /= +numArray[i+1];
                break;

       }
   }
   //const numArray = output.value.split(NumRegex), opArray = output.value.split(OpRegex).filter(trash => trash !== '');


//    console.log(output.value.split(NumRegex));
//    console.log(output.value.split(OpRegex).filter(trash => trash !== ''));
   
   return calc;

}