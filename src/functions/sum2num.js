export default function sum2num(number1, number2) {
  let num1 = Number(number1);
  let num2 = Number(number2);

  let resultConcatenation = number1 + number2;

  let resultAddition = num1 + num2;

  let conc = `Using concatenation: ${resultConcatenation}`;
  let add = `Using addition: ${resultAddition}`;

  return {conc, add}
}
