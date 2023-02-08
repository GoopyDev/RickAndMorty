export default function SearchBar(props) {

   return (
      <div>
         <input id='buscar' type='search' />
      <button onClick={() => props.onSearch("characterID")}>Agregar</button>
      </div>
   );
}
