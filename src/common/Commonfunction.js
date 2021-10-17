
const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

const checkEmail = (ele) => re.test(ele.trim());
const checkPassword = (ele) => {
    return ele.trim().length > 5};
const checkLength = (ele) => ele.trim().length > 4;
const compareStrings = (str1, str2) => str1 === str2;


const paginationHandle =(arrLength , windowSize, operationType, currentNumber)=>{
    console.log()
     if(operationType === 1){
        //   increement
         const currentLowerIndex = windowSize*(currentNumber) ;
         if(currentLowerIndex < arrLength){
            currentNumber=currentNumber+1;
         } 
     }else{
        //  dec
        if(currentNumber>1){
            currentNumber=currentNumber-1;
        }
     }
     return currentNumber;   

}


export  {checkEmail , checkPassword,checkLength, compareStrings,paginationHandle}