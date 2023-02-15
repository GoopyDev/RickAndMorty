import styled from "styled-components";
import redGem from "./Card_Red_Gem.png";
import img from "../images/images.jsx";

var cardSize = 350;
var cardScale = 1.05;
var redGemSize = "80px";
const cardImg = function () {
   let num = Math.floor(Math.random()*25);
   let cardImg = img[num];
   return cardImg;
}
const cardFloat = function() {
   let num = Math.floor(Math.random()*10);
   console.log(num, num%4)
   if (( num % 4) === 0) { return  "0.0001" }
   if (( num % 4) === 1) { return "-0.0001" }
   if (( num % 4) === 2) { return  "0.0002" }
   return "-0.0002";
}

const CardContainer = styled.div`
   display:          flex;
   position:         relative;
   flex-direction:   column;
   justify-content:  center;
   width:            ${cardSize}px;
   background-color: #fefefe;
   background-image: url(${cardImg});
   background-position: center;
   background-size:  cover;
   border:           4px solid darkgray;
   outline:          1px solid black;
   border-radius:    10px;
   transform:        scale(.95);
   transition:       all .25s;
   z-index:          1;
   filter:           grayscale(.7) drop-shadow(2px 4px 6px #222);

   &:hover{
      transform:        scale(${cardScale}) matrix3d(1, 0, 0, ${cardFloat}, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
      z-index:          999;
      filter:           drop-shadow(2px 4px 6px black);
   }
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
   filter:           saturate(1);
   transition:       filter 2s;

   &:hover{
      filter:           saturate(2);
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
   background-color: #55555570;
   `
const BotonX = styled.button`
   width:            10%;
   align-self:       flex-end;
   background-color: #ff000070;
   border-radius:    5px;
   transform:        perspective(100px) matrix3d(1, 0, 0, 0, 0, 1, 2, 0, 0, 0, 1, 0, 0, 0, 0, 1) skewX(-22deg);
   transition:       all .75s;
   
   &:hover{
      background-color: red;
      color:            white;
    }
`

const CardInfo = styled.h2`
   text-shadow: 0 0 9px white;
`


export default function Card({id = 1, name, species, gender, image, onClose }) {
   return (
      <CardContainer id={id}>
         <BotonX onClick={onClose}>X</BotonX>
         <Imagen src={image} alt={"Imagen del personaje " + name} />
         <Nombre>{name}</Nombre>
         <RedGemDiv><img src={redGem} alt="Imagen de gema roja" width={redGemSize} height={redGemSize} /></RedGemDiv>
         <RedGemLabel><h2>{id}</h2></RedGemLabel>
         <CardInfo>{species}</CardInfo>
         <CardInfo>{gender}</CardInfo>
      </CardContainer>
   );
}
