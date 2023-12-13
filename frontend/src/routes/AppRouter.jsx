import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import StateUser from "../context/StateUser";
import StateImage from "../context/StateImage";

import Terminal from "../pages/Terminal";
import Home from "../pages/Home";
import Error from "../pages/Error";
import Login from "../pages/Login";
import Inventario from "../pages/Inventario";
import ListaAsistencia from "../pages/ListaAsistencia";
import ListaUsuarios from "../pages/ListaUsuarios";
import ImageContainer from "../components/ImageContainer";

const AppRouter = () => {
  const logo = require("../assets/logo.png");

  return (
    <StateUser>
      <StateImage>
        <AnimatePresence>
          <BrowserRouter>
            <div className="container">
              <div className="left-pane">
                <ImageContainer />
              </div>
              <main className="right-pane">
                <Routes>
                  <Route path="/" element={<Login />} />
                  <Route path="/home" element={<Home />} />
                  <Route path="/inventario" element={<Inventario />} />
                  <Route
                    path="/lista-asistencia"
                    element={<ListaAsistencia />}
                  />
                  <Route path="/lista-usuarios" element={<ListaUsuarios />} />
                  <Route path="/terminal/:id" element={<Terminal />} />
                  <Route path="*" element={<Error />} />
                </Routes>
              </main>
            </div>
          </BrowserRouter>
        </AnimatePresence>
      </StateImage>
    </StateUser>
  );
};

export default AppRouter;
