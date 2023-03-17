import React from "react";
import styled from "styled-components";

export default class About extends React.Component {
    // eslint-disable-next-line
    constructor (props) {
        super(props);
    }

    render() {
        const gradientBlancos  = "#3337 20%,#7777,#7777 23%,#3337 25%,#3337 35%,#eee7 58%, #5557, #fff7,#3337 77%";
        const gradientCelestes = "#002d3a50 20%,#c1d1d350,#0b495950 23%,#00babc50 25%,#002d3a50 35%,#00babc50 44%, #06474250, #60dbff50, #fff5, #00babc50,#002d3a50 75%";
        const Contenedor = function (width = 100, animationTime = 60, gradient = "black") {
            return (styled.div`
            width:                  ${width}%;
            display:                flex;
            flex-direction:         column;
            background:             linear-gradient(110deg, ${gradient});
            border-radius:          10px;
            background-size:        100% 110%;
            background-position:    50%;
            color:                  #fffc;
            text-shadow:            0 0 3px black;
            box-shadow:             0px 0px 8px 2px #00b4ff;
            animation:              destello ${animationTime}s alternate ease-in-out infinite;
            
            @keyframes destello {
                0%{
                    background-size:        100% 100%;
                    background-position:    50%;
                }
                5%{
                    background-size:        90% 100%;
                    background-position:    -100%;
                }
                25%{
                    background-size:        120% 100%;
                    background-position:    -250%;
                }
                50%{
                    background-size:        200% 100%;
                    background-position:    300%;
                }
                75%{
                    background-size:        100% 100%;
                    background-position:    -300%;
                }
                100%{
                    background-size:        550% 100%;
                    background-position:    50%;
                }
            }
            `);
        }
        const H2Sombra = styled.h2`
            text-shadow:    0 0 3px #00b4ff;
            line-height:    0px;
            margin:         0px;
            margin-top:     30px;
        `;
        const H2Titulo = styled.h2`
            color:          white;
            text-shadow:    0 0 3px #00b4ff;
            line-height:    0px;
            margin:         0px;
            margin-bottom:  30px;
        `;
        const Separador = styled.hr`
            width:          100%;
            border:         1px solid #00c0de5b;
        `;

        const Container1 = Contenedor( 80,  90, gradientBlancos );
        const Container2 = Contenedor(100, 120, gradientCelestes);
        const JSImage    = styled.img`
            width:      25px;
            margin:     0px;
            padding:    0px;
            position:   relative;
            top:        7px;
            transform:  scale(1.5);
            `;
        JSImage.defaultProps = {src:"https://pluralsight2.imgix.net/paths/images/javascript-542e10ea6e.png?w=75", alt: "JavaScript Logo"};
        const UnityImage = styled.img`
            width:      20px;
            margin:     0px;
            padding:    0 3px 0 1px;
            position:   relative;
            top:        5px;
            background-color:   white;
        `
        UnityImage.defaultProps = {src:"https://seeklogo.com/images/U/unity-logo-988A22E703-seeklogo.com.png", alt: "Unity Logo"};
        
        return (
            <Container1>
                <Container2>
                    <H2Sombra>Acerca de Rick&Morty App</H2Sombra>
                    <H2Titulo>Acerca de Rick&Morty App</H2Titulo>
                    <Separador />
                    <p>La app de Rick & Morty te permite conocer a los personajes que aparecen en la serie.
                    <br />Al hacer click sobre una carta, podrás ver más detalles del personaje.
                    <br />
                    <br />También puedes añadir cartas a favoritos, o seleccionarlas, y existen algunos
                    <br />filtros que puedes utilizar para buscar entre los casi 900 personajes.
                    </p>
                    <h3 style={{marginBottom: "0px"}}>Sobre el autor: Alan Romero</h3>
                    <p>Técnico programador de software, con estudios en <JSImage />JavaScript - 🐍Python,
                    <br />🎮 Diseño de videojuegos en <UnityImage /> Unity
                    <br /><span style={{color:"violet"}}>♪♫</span> Músico 🎸guitarrista diseño de videojuegos en Unity</p>
                    <br />
                </Container2>
            </Container1>
        );
    }
}