import { useState } from "react";
import { useMode, ColorModeContext } from "./theme";
import SideBar from "./components/global/SideBar";
import NavBar from "./components/global/NavBar";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/auth/Signup";
import Signin from "./pages/auth/Signin";
import { useCurrentUser } from "./context/UserContext";


function App() {
  const currentUser = useCurrentUser();
  const [theme, colorMode] = useMode();
  const [isSideBar, setIsSideBar] = useState(true);
  console.log(currentUser);
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          {currentUser && (<SideBar isSideBar={isSideBar} />)}
         
          <main className="content">
            <NavBar isSideBar={isSideBar} />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/signin" element={<Signin />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
