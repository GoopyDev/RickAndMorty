import './App.css';
// import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
// import SearchBar from './components/SearchBar.jsx'
// import characters, { Rick } from './data.js'
import React from 'react'


export function App () {
  
  const [characters, setCharacters] = React.useState([]);
  
  const example = {
    id:       2,
    name:     'Morty Smith',
    species:  'Human',
    gender:   'Male',
    image:    'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
  };
  
  const onSearch = () => {
    console.log(`Example: ${example}
    Characters: ${characters}, ${typeof(characters)}, ${Array.isArray(characters)}`);
    setCharacters([...characters, example]);
  };
  
  return (
    <div className='App'>
        <Nav onSearch={onSearch}></Nav>
        {/* <SearchBar
          onSearch={(characterID) => window.alert(characterID)}
        /> */}
      {/* <div>
        <Card
          name={Rick.name}
          species={Rick.species}
          gender={Rick.gender}
          image={Rick.image}
          onClose={() => window.alert('Emulamos que se cierra la card')}
        />
      </div> */}
      <hr />
      <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-evenly"}}>
        <Cards
          characters = {characters}
        />
      </div>
      <hr />
    </div>
  )
}

export default App;
