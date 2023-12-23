import { ThemeProvider } from "@emotion/react";
import { Container, Box, Typography, CssBaseline, Button } from "@mui/material";
import theme from "./themes/theme";
import students from "./constants/students";
import AgeCalc from "./components/Agecalc";
import EvenOrOdd from "./components/Evenorodd";
import GuessGame from "./components/Guessgame";
import { getCode, getComp } from "./functions/phones";
import { useState } from "react";
import Sum2num from "./components/Sum2num";
import Discount from "./components/Discount";
import QaGame from "./components/QaGame";
import FontApp from "./components/Fontapp";
import Fawry from "./components/Fawry";
function App() {
  const [active, setActive] = useState("");
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <Container
        maxWidth="false"
        disableGutters
        sx={{ height: "100vh", position: "relative" }}
      >
        <Typography textAlign="center" variant="h4">
          Javascript Functions
        </Typography>
        <Box
          sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
        >
          <Button onClick={() => setActive("age")} sx={{ m: 3 }}>
            Age Calculator
          </Button>
          <Button onClick={() => setActive("even")} sx={{ m: 3 }}>
            Even or odd?
          </Button>
          <Button onClick={() => setActive("guess")} sx={{ m: 3 }}>
            Guessing Game
          </Button>
          <Button onClick={() => setActive("add")} sx={{ m: 3 }}>
            Sum2num
          </Button>
          <Button onClick={() => setActive("discount")} sx={{ m: 3 }}>
            Discount
          </Button>
          <Button onClick={() => setActive("qa")} sx={{ m: 3 }}>
            QA Game
          </Button>
          <Button onClick={() => setActive("font")} sx={{ m: 3 }}>
            Font App
          </Button>
          <Button onClick={() => setActive("fawry")} sx={{ m: 3 }}>
            Fawry
          </Button>
          <Button
            target="_blank"
            href="https://blog-two-pi-91.vercel.app/"
            sx={{ m: 3 }}
          >
            APIs
          </Button>
        </Box>
        <Box sx={{ display: "flex", flexWrap: "wrap" }}>
          {active === "age" && <AgeCalc />}
          {active === "even" && <EvenOrOdd />}
          {active === "guess" && <GuessGame />}
          {active === "add" && <Sum2num />}
          {active === "discount" && <Discount />}
          {active === "qa" && <QaGame />}
          {active === "font" && <FontApp />}
          {active === "fawry" && <Fawry />}
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
        <Box sx={{ position: "absolute", bottom: 0, display:"flex", justifyContent:"center", width:"100%" }}>
          <Typography>Made with ❤️ by Ibrahim Gaber</Typography>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
