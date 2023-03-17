import { Link } from "react-router-dom";
import styled from "styled-components";
import redGem from "./Card_Red_Gem.png";
import img from "../../images/images.jsx";

// Variables ///////////
var cardSize = 350;
var cardScale = 1.05;
var redGemSize = "80px";
////////////////////////

// Funciones /////////////////////////////
const cardImg = function () {
   let num = Math.floor(Math.random()*25);
   let cardImg = img[num];
   return cardImg;
}

const cardFloat = function() {
   let num = Math.floor(Math.random()*10) % 6;
   if      (num === 0) { return  "0.00005"  }
   else if (num === 1) { return "-0.00005"  }
   else if (num === 2) { return  "0.0001"   }
   else if (num === 3) { return "-0.0001"   }
   else if (num === 4) { return  "0.0002"   }
   return "-0.0002";
}

const cardInnerBorder = function() {
   let colores = ["gold","darkgoldenrod","goldenrod","mediumspringgreen","cyan","darkturquoise"]
   let num = Math.floor(Math.random()*10) % colores.length;
   return colores[num];
};
// const cardInnerBorder = function() {
//    let num = Math.floor(Math.random()*10) % 6;
//    if      (num === 0) { return "gold"             }
//    else if (num === 1) { return "darkgoldenrod"    }
//    else if (num === 2) { return "goldenrod"        }
//    else if (num === 3) { return "mediumspringgreen"}
//    else if (num === 4) { return "cyan"             }
//    return "darkturquoise";
// };
//////////////////////////////////////////

// Styled Components /////////////////////
const CardContainer = styled.div`
   display:          flex;
   position:         relative;
   flex-direction:   column;
   justify-content:  center;
   width:            ${cardSize}px;
   border:           8px solid transparent;
   outline:          1px solid black;
   border-radius:    10px;
   background:       linear-gradient(to left top, gold,goldenrod, yellow, darkgoldenrod, white, darkgoldenrod, gold, yellow, white, darkgoldenrod, gold, goldenrod, yellow, white, yellow, gold, goldenrod, darkgoldenrod) border-box;
   background-size:  1000%;
   background-position: center;
   transform:        scale(.95);
   transition:       all .5s;
   z-index:          1;
   filter:           grayscale(.7) drop-shadow(2px 4px 6px #222);
   
   &:hover{
      transform:        scale(${cardScale}) matrix3d(1, 0, 0, ${cardFloat}, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
      /* background-size:  100%; */
      z-index:          999;
      box-shadow:       0px 0px 10px 3px ${cardInnerBorder};
      filter:           grayscale(0) drop-shadow(0px 0px 6px black);
      animation:        Brillar 10s alternate ease-in-out infinite;
   }
   @keyframes Brillar {
      0%    {
         background-position: 33%   0%;
         background-size:  1000%
      }
      50%   {
         background-position: 68% 100%;
         background-size:  100%
      }
      100%  {
         background-position: 33%   0%;
         background-size:  1000%
      }
   }
   /* @keyframes Brillar {
      0% {
         background-size:  100%
      }
      100% {
         background-size:  900%
      }
   } */
`   
const CardBG = styled.div`
   background-image: url(${cardImg});
   background-position: center;
   background-size:  cover;
   border:           2px solid ${cardInnerBorder};
   border-radius:    7px;
   display:          flex;
   position:         relative;
   flex-direction:   column;
   justify-content:  center;
`
const RedGemDiv = styled.div`
   display:          flex;
   align-self:       center;
   position:         relative;
   height:           2px;
   top:              -85px;
   color:            white;
   border-radius:    50%;
   &:before{
      box-shadow:       1px 1px 1px 2px black;}
`
const RedGemLabel = styled.div`
   display:          flex;
   align-self:       center;
   position:         relative;
   color:            white;
   text-shadow:      -2px 2px 1px black;
   font-size:        30px;
   line-height:      0px;
   height:           0px;
   top:              -88px;
`
const Imagen = styled.img`
   border-top:       2px solid black;
   border-right:     2px solid black;
   border-bottom:    1px solid #555;
   border-left:      1px solid #555;
   box-shadow:       0px 0px 1px 2px black;
   border-radius:    10px;
   margin:           0px 10px 10px 10px;
   filter:           saturate(1) contrast(1);
   transition:       filter 2s;

   &:hover{
      filter:           saturate(1.5) contrast(1.5);
   }
`
const Nombre = styled.h2`
   display:          block;
   position:         relative;
   height:           40px;
   margin:           10px;
   top:              -65px;
   outline:          2px solid black;
   border:           2px solid white;
   border-radius:    0 0 10px 10px;
   color:            white;
   text-shadow:      0 0 5px black;
   background-color: #55555570;
`
const BotonX = styled.button`
   width:            10%;
   align-self:       flex-end;
   position:         relative;
   top:              -5px;
   right:            -3px;
   text-shadow:      0px 1px 1px white;
   background-color: #ff8080;
   border-radius:    5px;
   transform:        perspective(100px) matrix3d(1, 0, 0, 0, 0, 1, 2, 0, 0, 0, 1, 0, 0, 0, 0, 1) skewX(-22deg);
   transition:       all .75s;
   
   &:hover{
      background-color: red;
      color:            white;
      text-shadow:      0px 2px 1px black;
    }
`
const CardInfo = styled.h2`
   text-shadow: 0 0 9px white;
`
//////////////////////////////////////////

// Componente //
export default function Card({id = 1, name, species, gender, image, onClose }) {
   return (
      <CardContainer id={id}>
         <CardBG>
            <BotonX onClick={onClose}>X</BotonX>
            <Imagen src={image} alt={"Imagen del personaje " + name} />
            <Link to={`/detail/${id}`}><Nombre>{name}</Nombre></Link>
            <RedGemDiv><img src={redGem} alt="Imagen de gema roja" width={redGemSize} height={redGemSize} /></RedGemDiv>
            <RedGemLabel><h2>{id}</h2></RedGemLabel>
            <CardInfo>{species}</CardInfo>
            <CardInfo>{gender}</CardInfo>
         </CardBG>
      </CardContainer>
   );
}
////////////////