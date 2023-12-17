import { useEffect, useState } from "react";
import sum2num from "../functions/sum2num";
import { TextField, Box, Typography } from "@mui/material";

const Sum2num = () => {
  const [input, setInput] = useState("");
  const [input2, setInput2] = useState("");
  const [ans, setAns] = useState("");
  useEffect(()=>{ 
    setAns(sum2num(input,input2));
  },[input,input2]);
  return (
    <Box sx={{width:"100%", display:"flex", justifyContent:"center", flexDirection:"column", alignItems:"center"}}>
      <Typography>Enter 2 numbers to add:</Typography>  

      <Box sx={{display:"flex"}}>
      <TextField sx={{m:2}} id="input" label="" value={input} onChange={(e) => setInput(e.target.value)} />
      <Typography sx={{alignSelf:"center"}}>+</Typography>
      <TextField sx={{m:2}} id="input2" label="" value={input2} onChange={(e) => setInput2(e.target.value)} />
      </Box>
      
      <Typography>{`${ans.conc}`}</Typography>
      <Typography>{`${ans.add}`}</Typography>
    </Box>
  );
};

export default Sum2num;
