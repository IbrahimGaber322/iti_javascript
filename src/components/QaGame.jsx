import { useEffect, useState } from "react";
import qaGame from "../functions/qagame";
import { TextField, Box, Typography, Button } from "@mui/material";
//name, age, work,anther
const QaGame = () => {
  const [input, setInput] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [work, setWork] = useState("");
  const [anther, setAnther] = useState("");
  const [ans, setAns] = useState("");

  const where = () => {
    if (name === "") {
      return setName;
    } else if (age === "") {
      return setAge;
    } else if (work === "") {
      return setWork;
    } else {
      return setAnther;
    }
  };
  const handleClick = () => {
    const current = where();
    current(input);
  };

  const handleKeyUp = (e) => {
    e.keyCode === 13 && handleClick();
  };

  useEffect(() => {
    setAns(qaGame(name, age, work, anther));
    setInput("");
  }, [name, age, work, anther]);

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography>Welcome to QA game :D</Typography>

      <TextField
        onClick={handleClick}
        onKeyUp={handleKeyUp}
        id="input"
        label=""
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <Button onClick={handleClick}>Click to submit</Button>
      <Typography>{`${ans}`}</Typography>
    </Box>
  );
};

export default QaGame;
