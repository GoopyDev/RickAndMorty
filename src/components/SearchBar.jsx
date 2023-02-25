import styled from "styled-components";


const InputSearch = styled.input`
   border-radius:          3px;
`
const BotonSearch = styled.button`
   background-color:       darkcyan;
   color:                  turquoise;
   border-radius:          5px;
   margin:                 5px;
`

export default function SearchBar(props) {
   console.log(Object.keys(props));
   console.log(Object.keys(props.onSearch));
   // console.log(Object.keys(props.onSearch.onSearch));
   return (
      <div>
         <InputSearch id='buscar' type='search' />
         <BotonSearch onClick={() => props.onSearch()}>Agregar</BotonSearch>
         {/* <BotonSearch onClick={() => props.onSearch("characterID")}>Agregar</BotonSearch> */}
      </div>
   );
}
