import React from "react";
import AppRouter from "./AppRouter";
import Layout from "./components/Layout/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "./components/common/Contexts/AuthContext";
import { authenticate } from "./services/auth/authenticate";

function App() {
  const [user, setUser] = React.useState({});
  React.useEffect(() => {
    debugger;
    authenticate().then(userRes => setUser(userRes));
  }, []);
  return (
    <AuthContext.Provider value={{ user: user, setUser: setUser }}>
      <Layout />
      <div className="app-container">
        <AppRouter />
      </div>
      <ToastContainer />
    </AuthContext.Provider>
  );
}

export default App;
