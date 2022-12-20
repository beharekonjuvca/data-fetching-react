import { useState } from "react";
import { AddModalButton } from "./components/shared/AddModalButton";
import { Login } from "./components/shared/Login";
import { Home } from "./screens/Home";

import "./styles/index.css";
import "./styles/reset.css";

function App() {
  const handleAuthentication = () => setIsAuthenticated(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <div className="wrapper">
      {isAuthenticated ? (
        <Home />
      ) : (
        <Login authenticate={handleAuthentication} />
      )}
    </div>
  );
}

export default App;
