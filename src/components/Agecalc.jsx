import { useEffect, useState } from "react";
import ageCalc from "../functions/agecalc";
import { TextField, Box, Typography } from "@mui/material";

const AgeCalc = () => {
  const [input, setInput] = useState("");
  const [ans, setAns] = useState("");
  useEffect(()=>{ 
    setAns(ageCalc(input));
  },[input]);
  return (
    <Box sx={{width:"100%", display:"flex", justifyContent:"center", flexDirection:"column", alignItems:"center"}}>
      <Typography>Enter your age in years:</Typography>  
      <TextField id="input" label="" value={input} onChange={(e) => setInput(e.target.value)} />
      <Typography>{`Your age in days is: ${ans}`}</Typography>
    </Box>
  );
};

export default AgeCalc;