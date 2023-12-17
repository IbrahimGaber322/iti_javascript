import { ThemeProvider } from "@emotion/react";
import { Container, Box, Typography, CssBaseline, Button} from "@mui/material";
import theme from "./themes/theme";
import students from "./constants/students";
import AgeCalc from "./components/Agecalc";
import EvenOrOdd from "./components/Evenorodd";
import GuessGame from "./components/Guessgame";
import { getCode , getComp } from "./functions/phones";
import { useState } from "react";
import Sum2num from "./components/Sum2num";
function App() {
  const [active, setActive] = useState("");
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <Container maxWidth="false" disableGutters sx={{ height: "100vh" }}>
        <Typography textAlign="center" variant="h4">
          Javascript Functions
        </Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent:"center" }}>
          <Button onClick={()=>setActive("age")} sx={{m:3}}>
            Age Calculator
          </Button>
          <Button onClick={()=>setActive("even")} sx={{m:3}}>
            Even or odd?
          </Button>
          <Button onClick={()=>setActive("guess")} sx={{m:3}}>
            Guessing Game
          </Button>
          <Button onClick={()=>setActive("add")} sx={{m:3}}>
            Sum2num
          </Button>
        </Box>
        <Box sx={{ display: "flex", flexWrap: "wrap" }}>
             {active==="age"&&<AgeCalc />}
             {active==="even"&&<EvenOrOdd />}
             {active==="guess"&&<GuessGame />}
             {active==="add"&&<Sum2num />}
        </Box>
        {/* <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        

          {students.map((s) => (
            <Typography>
             {`Name: ${s.name}`}
              <br />
              {`Email: ${s.email}`}
              <br />
              {`Phone: ${s.phone}`}
              <br />
              {`Address: ${s.address.location}`}
              <br />
              {`Hobbies: ${s.hobbies.join(", ")}`}
              <br />
              {`Phone Code: ${getCode(s.phone)}`}
              <br />
              {`Phone Company: ${getComp(getCode(s.phone))}`}
              <br />
              {`____________________________________`}
              <br />
            </Typography>
          ))}
        </Box> */}
      </Container>
    </ThemeProvider>
  );
}

export default App;
