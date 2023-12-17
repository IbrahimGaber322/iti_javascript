import { useEffect, useState } from "react";
import guessGame from "../functions/guessgame";
import { TextField, Box, Typography, Button } from "@mui/material";

const GuessGame = () => {
  const random = ()=>{
    return Math.floor(Math.random()*6)+1;
  }
  const [input, setInput] = useState("");
  const [ans, setAns] = useState("");
  const [res,setRes] = useState(random());
  useEffect(()=>{ 
    setAns(guessGame(input,res));
  },[input,res]);
  return (
    <Box sx={{width:"100%", display:"flex", justifyContent:"center", flexDirection:"column", alignItems:"center"}}>
      <Typography>Guess a number from 1 to 6</Typography>  
      <Button onClick={()=>setRes(random())}>
        Click to randomize
      </Button>
      <TextField id="input" label="" value={input} onChange={(e) => setInput(e.target.value)} />
      <Typography>{`${ans}`}</Typography>
    </Box>
  );
};

export default GuessGame;