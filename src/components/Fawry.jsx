import { TextField, Box, Typography } from "@mui/material";
import FawryImg from "../images/fawry.jpg";
import { useState } from "react";
const Fawry = () => {
 const [password, setPassword] = useState("");
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
       flexDirection:"column",
        gap:5,
        alignItems:"center"
      }}
    >
      <Typography sx={{fontSize:30, fontWeight:700}}>Write your password to show the code:</Typography>
      <TextField onChange={(e)=>setPassword(e.target.value)} value={password} type="password" sx={{width:"100%", maxWidth:"500px"}} />
      <img style={{filter:password!=="12345"&&"blur(8px)"}} src={FawryImg} width={500} alt="Fawry" />
      <Typography>Hint: try 12345 :D</Typography>
    </Box>
  );
};

export default Fawry;
