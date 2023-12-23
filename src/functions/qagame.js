function qaGame(name, age, work, anther) {
  let res;
  if (name === "") {
    res = "Hi, Say Your Name";
  } else {
    res = "Hi, " + name + " please answer the Following Questions";
    if (age === "") {
      res = "How old Are You ?!";
    } else {
      if (age > 18) {
        res = "Ok! good enough to Complete";
        if (work === "") {
          res =
            "Reply by yes or No | do you think programming is good for you ?";
        } else {
          if (
            work === "yes" ||
            work === "Yes" ||
            work == "YEs" ||
            work === "YES"
          ) {
            res = name + ", Sorry to say it | but you Have A mental issues 🙂";
          } else if (work === "no" || work === "No" || work === "NO") {
            res =
              "Mee too , thank you for telling us , I will give you a somthing ";

            if (anther === "") {
              res = "reply by ( advise || info || thanks ) ";
            } else {
              if (
                anther === "advise" ||
                anther === "Advise" ||
                anther === "ADVISE"
              ) {
                alert(
                  name +
                    ", the secret of getting a head is getting started , so start now 👌"
                );
              } else if (
                anther === "info" ||
                anther === "Info" ||
                anther === "INfo" ||
                anther === "INFO" ||
                anther === "Information" ||
                anther === "information"
              ) {
                res =
                  "The human heart beats about 100,000 times a day! That means your ticker will beat around 36,500,000 times in a year. Count them if you don't believe us! Yes, we'll wait. 🤷‍♂️";
              } else if (
                anther === "thanks" ||
                anther === "Thanks" ||
                anther === "THANKS"
              ) {
                res = "Thank you " + name;
              } else {
                res = "😒😒😒";
              }
            }
          } else {
            res = "I Said Reply by YES OR NO 😒 ";
          }
        }
      } else if (age !== "" && age < 18) {
        res = "Sorry! you are a child";
      } else {
        res = "Please Start Again and Say Your age";
      }
    }
  }
  return res;
}

export default qaGame;
