export default function guessGame(input, ans) {
  if (input.length === 0) return "";
  input = Number(input);
  ans = Number(ans);
  let res;

  if (isNaN(input)) {
    res = "Please enter valid number";
  } else if (input === ans) {
    res = "Correct !";
  } else if (input > ans) {
    res = "Your guess is too big!";
  } else if (input < ans) {
    res = "Your guess is too small!";
  } else {
    res = "Please enter a number";
  }
  return res;
}
