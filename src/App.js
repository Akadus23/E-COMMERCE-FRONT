import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import DetailProducto from "./Components/DetailProducto/DetailProducto";
import FormProducto from "./Components/FormProducto/FormProducto";
// import LandingPage from "./Components/LandingPage/LandingPage";
import SwipeableTextMobileStepper from "./Components/LandingPage/LandingPage";
import Home from "./Components/Home/Home";
import HomeBusqueda from "./Components/HomeBusqueda/HomeBusqueda";
import AboutUs from "./Components/AboutUs/AboutUs";
import Footer from "./Components/Footer/Footer";
import { Routes, Route, useNavigate } from "react-router-dom";
import Carrito from "./Components/Carrito/Carrito/Carrito";
import FormCrearUsuario from "./Components/FormCrearUsuario/FormCrearUsuario";
import FormCrearUsuarioAdmin from "./Components/Admin/Usuarios/CrearUsuario/CrearUsuario";
import Profile from "./Components/Profile/Profile";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { log_in } from "./Redux/actions";
// import Favoritos from "./Components/Favoritos/Favoritos";
import { useLocation } from "react-router-dom";
import Admin from "./Components/Admin/Admin";
// import PerfilUsuario from "./Components/Admin/Usuarios/Perfil/Perfil";
import Publicaciones from "./Components/Admin/Publicaciones/Publicaciones";
import Ventas from "./Components/Admin/Ventas/Ventas";
import MisDatos from "./Components/Admin/MisDatos/MisDatos";
import UsuariosAct from "./Components/Admin/Usuarios/UsuariosAct";
import Baneados from "./Components/Admin/Usuarios/Baneados/Baneados";
import axios from "axios";
import ArrayObjetos from "./Helpers/arrayObjetos";
import NotFound from "./Components/NotFound/NotFound"; // Importa el componente NotFound (puedes crearlo tú mismo)
import Reviews from "./Components/Reviews/Reviews";
import LandingPage from "./Components/LandingPage/LandingPage";
import EditarProductoForm from "./Components/Admin/Publicaciones/EditarProductoForm";

function App() {
  const navigate = useNavigate();
  //axios.defaults.baseURL = "http://localhost:3001/"; // para trabajar en local
  axios.defaults.baseURL = "https://commerce-back-2025.up.railway.app/"; //Para trabajar con el deployado

  function onClick() {
    navigate("/home");
  }

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/formProducto" element={<FormProducto />} />
        <Route path="/detailProducto/:id" element={<DetailProducto />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/formCrearUsuario" element={<FormCrearUsuario />} />
        <Route path="/profile" element={<Profile />}></Route>
        {/* <Route path="/favoritos" element={<Favoritos />} /> */}
        <Route path="/helper" element={<ArrayObjetos />}></Route>
        <Route path="*" element={<NotFound />} />{" "}
        {/* Ruta de captura para páginas no encontradas */}
        <Route path="/reviews" element={<Reviews />}></Route>
        <Route path="/admin" element={<Admin />}>
          <Route path="publicaciones" element={<Publicaciones />} />

          <Route path="ventas" element={<Ventas />} />
          <Route path="usuarios" element={<UsuariosAct />} />
          <Route path="baneados" element={<Baneados />} />
          <Route
            path="crearUsuariosAdmin"
            element={<FormCrearUsuarioAdmin />}
          />
          <Route path="mis-datos" element={<MisDatos />} />
          {/* <Route path="perfilUsuario/:id" element={<PerfilUsuario />} /> */}
        </Route>
        <Route path="/busqueda/:producto" element={<HomeBusqueda />} />
        <Route path="editar-producto/:id" element={<EditarProductoForm />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
