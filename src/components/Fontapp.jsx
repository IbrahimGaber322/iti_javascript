import { useEffect, useState } from "react";

import { TextField, Box, Typography, Button, Input, Grid } from "@mui/material";

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
        gap: 5,
      }}
    >
      <Grid container p={4}>
        <Grid item xs={12} md={6} p={4} height={500}>
          <Box height="100%" bgcolor={"white"} width="100%">
            <TextField
              fullWidth
              multiline
              sx={{ maxHeight: "100%", overflowY: "auto" }}
              inputProps={{
                style: {
                  color: "black",
                  fontFamily: `${fontStyle}`,
                  fontSize: 30,
                },
              }}
              id="input"
              label=""
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6} p={4} height={500}>
          <Box height="100%" bgcolor={"black"} width="100%">
            <TextField
              fullWidth
              multiline
              inputProps={{
                style: { fontFamily: `${fontStyle}`, fontSize: 30 },
              }}
              sx={{ maxHeight: "100%", overflowY: "auto" }}
              id="input2"
              label=""
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </Box>
        </Grid>
      </Grid>
      <Typography>{`Font name: ${fontStyle}`}</Typography>
      <Box display="flex" gap={3}>
        <Button onClick={() => setFontStyle("Lobster")}>Lobster</Button>
        <Button onClick={() => setFontStyle("Wallpoet")}>Wallpoet</Button>
        <Button onClick={() => setFontStyle("Shadows Into Light")}>
          Shadows
        </Button>
        <Button onClick={() => setFontStyle("ZCOOL XiaoWei")}>ZCool</Button>
      </Box>
    </Box>
  );
};

export default FontApp;
