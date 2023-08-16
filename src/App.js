import { useState } from "react";
import { useMode, ColorModeContext } from "./theme";
import SideBar from "./components/global/SideBar";
import NavBar from "./components/global/NavBar";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Signup from "./pages/auth/Signup";
import Signin from "./pages/auth/Signin";
import { useCurrentUser } from "./context/UserContext";
import Box from "@mui/material/Box";
import AddTask from "./pages/tasks/AddTask";
import TaskList from "./pages/tasks/TaskList";
import TaskDetails from './pages/tasks/TaskDetails';
function App() {
  const currentUser = useCurrentUser();
  const [theme, colorMode] = useMode();
  const [isSideBar, setIsSideBar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Box className="background"></Box>
          {currentUser && <SideBar isSideBar={isSideBar} />}

          <main className="content">
            {currentUser && <NavBar isSideBar={isSideBar} />}
            <Routes>
              <Route path="/signin" element={<Signin />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/addtask" element={<AddTask />} />
              <Route path="/tasklist" element={<TaskList />} />
              <Route path="/task/:id" element={<TaskDetails />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
