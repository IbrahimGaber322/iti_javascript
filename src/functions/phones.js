export const getCode = (number) => {
  return number.substring(0, 3);
};
export const getComp = (code) => {
  let res = "unknown";
  switch (code) {
    case "010":
      res = "vodafone";
      break;
    case "011":
      res = "etisalat";
      break;
    case "012":
      res = "mobinil";
      break;
    default:
      break;
  }
  return res;
};
