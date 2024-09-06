import { useCharacters } from "../hooks/useCharacters"
import { GridCharacters } from "./GridCharacters";
import { BuscarCharacter } from "./BuscarCharacter";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useState } from "react";

export const MarvelApp = () => {
  const [pagina, setPagina] = useState()
  const [personaje, setPersonaje] = useState('')
  const { characters, total } = useCharacters(pagina, personaje)

  const handleSearch = (character) => {
    setPersonaje(character)
  }
  return (
    <>

      <BuscarCharacter handleSearch={handleSearch} />
      <GridCharacters characters={characters} />
      <Pagination count={Math.round(total / 20)} className='d-flex justify-content-center' onChange={(e, value) => (setPagina(value))} />
      <div class="card  ">
        <div className="card-body">
        <img src="https://i.pinimg.com/originals/fc/d8/b4/fcd8b448ba8a78936aaa02bd211d7d3b.jpg"height={100} width={100} className="d-flex justify-content-center" alt="" />
        <p className="d-flex justify-content-center">Marvel</p>
        </div>
      </div>
    </>

  )
}

//Con condicion y si la lista no esta definida
/*{characters && characters.length > 0 && (
            <ul className="list-group list-group-flush">
              <li className="list-group-item"><strong>Personajes:</strong></li>
              {characters.map((char) => (
                <li key={char.name} className="list-group-item">
                  {char.name} 
                </li>
              ))}
            </ul>
          )} */