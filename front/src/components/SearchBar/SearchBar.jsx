import React from "react";
// import { useState } from "react";
// import { useEffect } from "react";
import styled from "styled-components";


const InputSearch = styled.input`
   height:        30px;
   border-radius: 20px 0 0 20px;
   position:      relative;
   right:         -5px;
`
const BotonSearch = styled.button`
   height:        30px;
   background-color: darkcyan;
   color: turquoise;
   border: 2px solid paleturquoise;
   border-radius: 0 20px 20px 0;
   margin: 5px;
`

export default function SearchBar(props) {
   const [characterID, setCharacterID] = React.useState({id: ""});

   const handleInput = function (event) {
      setCharacterID({
         // ...[character],
         id: event.target.value
      });
   }
   
   React.useEffect(function(){
      console.log(`Input value: ${characterID.id}`)
   })

   // console.log(Object.keys(props));
   // console.log(Object.keys(props.onSearch));
   // console.log(Object.keys(props.onSearch.onSearch));
   return (
      <div>
         <InputSearch id='buscar' type='search' value={characterID.id} onChange={handleInput} />
         <BotonSearch onClick={() => props.onSearch(characterID.id)}>Agregar</BotonSearch>
         {/* <BotonSearch onClick={() => props.onSearch("characterID")}>Agregar</BotonSearch> */}
      </div>
   );
}
