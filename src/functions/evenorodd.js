export default function evenOrOdd(input) {
 
 let res
  if (isNaN(Number(input))) {
    res= "Please enter a valid number.";
  }else if (input.length===0){
     res="";
  }else{
    res = input % 2 === 0 ? "even" : "odd";
  }
   
  return res;
}