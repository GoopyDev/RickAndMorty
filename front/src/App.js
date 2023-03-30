import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import Error from './components/Error/Error';
import axios from 'axios';
import './App.css';


export function App () {
  
  const [characters, setCharacters] = React.useState([]);
  
  const onSearch = (id) => {
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
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
      console.log("Petición finalizada")
    });
  };
  
  return (
    <div className='App'>
      {/* La NavBar no se muestra en la ruta raiz / */}
      {function(){ if (useLocation.pathname !== "/") return (<Nav onSearch={onSearch}></Nav>)  }}
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/home" element={<Cards characters = {characters} />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:detailId" element={<Detail />} />
        <Route path="/*" element={<Error />} />
      </Routes>
      <hr />
      <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-evenly"}}>
        {/* <Cards characters = {characters} /> */}
      </div>
      <hr />
    </div>
  )
}

export default App;
