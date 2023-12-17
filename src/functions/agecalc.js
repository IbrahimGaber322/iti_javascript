export default function ageCalc(input) {
  let res = Number(input) * 365.25;
  if (isNaN(Number(input))) {
    res = "Uncalculatable cause you didn't enter a valid number.";
  }
  return `Your age in days: ${res}`;
}
