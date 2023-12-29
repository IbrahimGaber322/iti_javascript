import { useEffect, useState } from "react";
import evenOrOdd from "../functions/evenorodd";
import { TextField, Box, Typography } from "@mui/material";

const EvenOrOdd = () => {
  const [input, setInput] = useState("");
  const [ans, setAns] = useState("");
  useEffect(()=>{ 
    setAns(evenOrOdd(input));
  },[input]);
  return (
    <Box sx={{width:"100%", display:"flex", justifyContent:"center", flexDirection:"column", alignItems:"center"}}>
      <Typography>Enter a number:</Typography>  
      <TextField id="input" label="" value={input} onChange={(e) => setInput(e.target.value)} />
      <Typography>{`${ans}`}</Typography>
    </Box>
  );
};

export default EvenOrOdd;
