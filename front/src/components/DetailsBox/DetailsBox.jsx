import React from "react";
import styled from "styled-components";

const DetailsContainer = styled.div`
    display:        flex;
    flex-direction: row;
    justify-content:space-evenly;
    align-items:    center;
    /* width:          80%; */
    /* height:          70%; */
    overflow:       hidden;
    border-radius:  10px;
    color:          white;
    text-shadow:    0 0 2px black;
    box-shadow:     0px 0px 8px 2px #00b4ff;
    background:     linear-gradient(45deg, #00b4ff44, #003b5444, #0099da44, #7dd8ff44, #00b4ff44, #0099da44, #003b5444);
    background-position: 150%;
    @media screen and (max-width: 600px) {
        flex-direction:     column-reverse;
        justify-content:    space-between;
    }
`
const DivInterno = styled.div`
    /* width:          90%; */
    padding:        10px;
    @media screen and (max-width: 600px) {
        /* width:          100%; */
        margin:        20px;
    }
`
const Separador = styled.hr`
    /* margin:         0 -147px; */
    display:        inline-flex;
    width:          70%;
    position:       relative;
    top:            -23px;
    z-index:        -1;
    @media screen and (max-width: 600px) {
        margin: 5px
    }
`
const Ornamental = styled.div`
    font-size:      x-large;
`
const MensajeCargando = styled.div`
    display:            flex;
    justify-content:    center;
    align-items:        center;
    width:              30px;
    height:             30px;
    margin:             0px;
    padding:            0px;
    font-size:          xxx-large;
    color:              turquoise;
    animation:          rotar 1s infinite linear;

    @keyframes rotar {
        100%{
            transform:  rotate(360deg);
        }
    }
`
const MensajeError = styled.div`
    display:            flex;
    justify-content:    center;
    align-items:        center;
    /* width:              30px;
    height:             30px; */
    width:              50%;
    height:             80%;
    margin:             0px;
    padding:            0px;
    font-size:          xxx-large;
    color:              #A00000;
`
const MensajeDescripcion = styled.div`
    display:            flex;
    justify-content:    center;
    width:              100%;
    font-size:          x-large;
`

export default function DetailsBox(props){
    const { character, mensaje } = props;

    if (character.name) {
        return (
            <DetailsContainer>
                <DivInterno style={{minWidth: "300px"}}>
                    <h2>{character.name}</h2>
                    <Ornamental> 🙬🙚🙘🙮 </Ornamental>
                    <Separador />
                    <h3>Status: {character.status}</h3>
                    <h3>Specie: {character.specie}</h3>
                    <h3>Gender: {character.gender}</h3>
                    <h3>Origin: {character.origin.name}</h3>
                </DivInterno>
                <DivInterno>
                    <img style={{display: "block", width: "100%", height: "auto"}} src={character.image} alt="Character portrait" />
                </DivInterno>
            </DetailsContainer>
        );
    }
    return (
        <DetailsContainer style={{minWidth: "500px", minHeight: "300px", flexFlow: "column wrap", justifyContent: "center"}}>
            {function () {
                if (mensaje.color === "turquoise"){
                    console.log("EL COLOR ES TURQUESA")
                    return <MensajeCargando style={{color: mensaje.color}}><div style={{position: "relative", top: "-1px", left: "3px", transform: "scale(1.04,1)"}}>{mensaje.estado[0]}</div></MensajeCargando>
                }
                else{
                    console.log("EL COLOR ES ROJO")
                    return <MensajeError>{mensaje.estado[0]}</MensajeError>
                }
            }()}
            <MensajeDescripcion>{mensaje.estado[1]}</MensajeDescripcion>
        </DetailsContainer>)
}