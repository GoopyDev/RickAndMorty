import React from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav.jsx";
import About from "./components/About/About.jsx";
import Detail from "./components/Detail/Detail.jsx";
import Form from "./components/Form/Form.jsx";
import Error from "./components/Error/Error.jsx";
import axios from "axios";
import "./App.css";

export function App() {
  const [characters, setCharacters] = React.useState([]);
  // prettier-ignore
  const [access,     setAccess    ] = React.useState(false);
  // prettier-ignore
  const validUsers = [
    { username: "eldoblecero@gmail.com"       , password: "Henry123" },
    { username: "soyhenry@gmail.com"          , password: "Henry123" },
    { username: "tuki@gmail.com"              , password: "Henry123" },
    { username: "termo_rojo@gmail.com"        , password: "Henry123" },
    { username: "react2_de_softonic@gmail.com", password: "Henry123" },
    { username: "michael_json@gmail.com"      , password: "Henry123" },
    { username: "forkeado@gmail.com"          , password: "Henry123" },
    { username: "jorge.vega@gmail.com"        , password: "Henry123" },
  ];
  const navigate = useNavigate();

  function login(userData) {
    let usuario = validUsers.find(
      (user) => user.username === userData.username
    );
    if (usuario) {
      if (userData.password === usuario.password) {
        setAccess(true);
        navigate("/home");
        return;
      }
    }
    // Manejar el inicio de sesión
    if (!access) {
      document.getElementById("errorDiv").style.display = "block";
      setTimeout(() => {
        document.getElementById("errorDiv").style.display = "none";
      }, 3000); // Ocultar después de 3 segundos
    }
    // return;
  }

  React.useEffect(() => {
    !access && navigate("/");
  }, [access, navigate]);

  const onSearch = async (id) => {
    await axios
      .get(`https://rickandmortyapi.com/api/character/${id}`)
      .then(function (response) {
        // manejar respuesta exitosa
        setCharacters([...characters, response.data]);
        console.log(response);
      })
      .catch(function (error) {
        // manejar error
        console.log(error);
      })
      .finally(function () {
        // siempre será executado
        console.log("Petición finalizada");
      });
  };

  const rutaActual = useLocation();
  console.log(rutaActual.pathname);
  function mostrarNav() {
    if (rutaActual.pathname !== "/") {
      return <Nav onSearch={onSearch}></Nav>;
    }
    return <p>aahhh</p>;
  }

  return (
    <div className="App">
      {mostrarNav()}
      <Routes>
        <Route path="/home" element={<Cards characters={characters} />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:detailId" element={<Detail />} />
        <Route path="/" element={<Form loginfn={login} />} />
        <Route path="/*" element={<Error />} />
      </Routes>
      <hr />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}
      >
        {/* <Cards characters = {characters} /> */}
      </div>
      <hr />
    </div>
  );
}

export default App;
