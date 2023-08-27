import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useNavigate,
} from "react-router-dom";
import { StyledAccueil } from "./styles/Accueil.styled";
import { StyledPage1 } from "./styles/Page1.styled";
import { StyledPage2 } from "./styles/Page2.styled";
import { StyledCardDetails } from "./styles/CardDetails.styled";
import { StyledPage3 } from "./styles/Page3.styled";
import { StyledPage4 } from "./styles/Page4.styled";
import { StyledPage5 } from "./styles/Page5.styled";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
      </Routes>
    </Router>
  );
}

export default App;
