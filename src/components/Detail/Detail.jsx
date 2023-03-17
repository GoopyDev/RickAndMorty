import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import styled from "styled-components";
import DetailsBox from "../DetailsBox/DetailsBox";

// const Contenedor = styled.div`
//     color:  white;
//     text-shadow:    0px 0px 1px black;
// `

export const Detail = function() {
    const [character, setCharacter] = useState({});
    const [mensaje,   setMensaje  ] = useState({
      estado: ["⟳", "Buscando al personaje..."],
      color:  "turquoise",
    });

    const { detailId } = useParams();

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
          .then((response) => response.json())
          .then((char) => {
            if (char.name) {
              setCharacter(char);
            } else {
              console.log("")
              setMensaje({estado: ["X", `No se encontró un personaje con ID ${detailId}`], color: "#A00000"})
            }
          })
          .catch((err) => {
            console.log("")
              setMensaje({estado: ["X", `No se encontró un personaje con ID ${detailId}`], color: "#A00000"})
          });
        return setCharacter({});
      // eslint-disable-next-line
      }, []);
    
    return (
        <DetailsBox character={character} mensaje={mensaje} />
    )
};

export default Detail;