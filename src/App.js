import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
// import Card from './components/Card.jsx';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Error from './components/Error/Error';
// import SearchBar from './components/SearchBar.jsx'
// import characters, { Rick } from './data.js'
import axios from 'axios';


export function App () {
  
  const [characters, setCharacters] = React.useState([]);
  
  // const example = {
  //   id:       2,
  //   name:     'Morty Smith',
  //   species:  'Human',
  //   gender:   'Male',
  //   image:    'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
  // };
  
  const onSearch = (id) => {
    // console.log(`Example: ${example}
    // Characters: ${characters}, ${typeof(characters)}, ${Array.isArray(characters)}`);
    // setCharacters([...characters, example]);
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
      // siempre sera executado
      console.log("Petición finalizada")
    });
  };
  
  return (
    <div className='App'>
      <Nav onSearch={onSearch}></Nav>
      <Routes>
        <Route path="/" element={<Cards characters = {characters} />} />
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
