import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import MapPage from "./components/MapPage";
import "./style/app.scss";
import AuthState from "./context/AuthContext";
/* import Page403 from './components/403';
import Page404 from './components/404'; */

//CREATE & IMPORT YOUR FUNCTION WHEN READY

function App() {
  return (
    <>
      <AuthState>
        <Navbar />
        <Hero />
        <Map />
        <Causes />
        <Solutions />
        <Substancs />
      </AuthState>
    </>
  );
}

export default App;
