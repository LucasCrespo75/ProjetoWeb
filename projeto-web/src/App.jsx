import React from "react";
import RoutesApp from "./routes";
import { AuthProvider } from "./context/auth";
import "./index.css";

const App = () => (
  <AuthProvider>
    <>
      <RoutesApp />
    </>
  </AuthProvider>
);

export default App;
