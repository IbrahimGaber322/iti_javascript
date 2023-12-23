import { useEffect, useState } from "react";

import { TextField, Box, Typography, Button, Input } from "@mui/material";

const FontApp = () => {
  const [input, setInput] = useState("");
  const [fontStyle, setFontStyle] = useState("");

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        gap:5
      }}
    >
      <Box display="flex" gap={3}>
        <Box width={500} height={500} bgcolor={"white"}>
          <TextField
            fullWidth
            multiline
            sx={{ maxHeight: "100%", overflowY: "auto" }}
            inputProps={{ style: { color: "black", fontFamily:`${fontStyle}`, fontSize:30 } }}
            id="input"
            label=""
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </Box>
        <Box width={500} height={500} bgcolor={"black"}>
          <TextField
            fullWidth
            multiline
            inputProps={{ style: { fontFamily:`${fontStyle}` }, fontSize:30 }}
            sx={{ maxHeight: "100%", overflowY: "auto" }}
            id="input2"
            label=""
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </Box>
      </Box>
      <Typography>{`Font name: ${fontStyle}`}</Typography>
      <Box display="flex" gap={3}>
        <Button onClick={() => setFontStyle("Lobster")}>Lobster</Button>
        <Button onClick={() => setFontStyle("Wallpoet")}>Wallpoet</Button>
        <Button onClick={() => setFontStyle("Shadows Into Light")}>Shadows</Button>
        <Button onClick={() => setFontStyle("ZCOOL XiaoWei")}>ZCool</Button>
      </Box>
    </Box>
  );
};

export default FontApp;
