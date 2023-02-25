import Card from './Card';

export default function Cards(props) {
   const { characters } = props;
   // console.log(characters[0].id, characters[0].name, characters[0].species, characters[0].gender, characters[0].image)
   // console.log(props)
   // console.log(characters)
   const onClose = () => window.alert("Emulamos el cierre de la carta");
   if (characters.length === 0) {
      return <div style={{color:"white"}}>No hay personajes seleccionados</div>
   }
   return (
      characters.map((personaje, index) =>
      <Card
         key={index}
         id={personaje.id}
         name={personaje.name}
         species={personaje.species}
         gender = {personaje.gender}
         image = {personaje.image}
         onClose={onClose}
      />)
   )
}
