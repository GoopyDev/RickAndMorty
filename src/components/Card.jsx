import styled from "styled-components";

const CardContainer = styled.div`
   border:           1px solid darkgray;
   border-radius:    10px;

`
const Imagen = styled.img`
   border-radius:    10px;
`
const Nombre = styled.h2`
   border-radius:    10px;
`
const BotonX = styled.button`
   border-radius:    10px;
`


export default function Card({id = 0, name, species, gender, image, onClose }) {
   return (
      <CardContainer id={id}>
         <BotonX onClick={onClose}>X</BotonX>
         <Nombre>{name}</Nombre>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <Imagen src={image} alt={"Imagen del personaje " + name} />
      </CardContainer>
   );
}
