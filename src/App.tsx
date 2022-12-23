import { useState } from "react";
import { AddModalButton } from "./components/shared/AddModalButton";
import { Login } from "./screens/Login/Login";
import { Home } from "./screens/Home";

import "./styles/index.css";
import "./styles/reset.css";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => setIsAuthenticated(true);

  return (
    <div className="wrapper">
      {isAuthenticated ? <Home /> : <Login onLogin={handleLogin} />}
    </div>
  );
}

export default App;
