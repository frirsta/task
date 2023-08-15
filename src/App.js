import { useState } from "react";
import { useMode } from "./theme";

function App() {
  const [theme, colorMode] = useMode();
  const [isSideBar, setIsSideBar] = useState(true);
  return (
    <div className="app">
       
    </div>
  );
}

export default App;
