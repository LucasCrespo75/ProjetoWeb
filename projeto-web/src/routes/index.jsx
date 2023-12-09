import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { HomeRegistrado } from "../pages/Home/homeRegistrado";
import { Register } from "../pages/Register/registro";
import  Login  from "../pages/Login/login";
import { Listagem } from "../pages/List/listagem";

const Private = ({ Item }) => {
  const { signed } = useAuth();
  return signed > 0 ? <Item /> : <Login />;
};

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route exact path="/homeRegistrado" element={<Private Item={HomeRegistrado} />} />
          <Route path="/" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/listagem" element={<Listagem />} />
          <Route path="*" element={<Login />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
};

export default RoutesApp;
