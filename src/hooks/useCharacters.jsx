import { useEffect, useState } from 'react'
import { reqCharacters} from '../service/characters'

export const useCharacters = (pagina,personaje) => {
    const [characters, setCharacters] = useState()
    const [total, setTotal] = useState('')
  
    useEffect(()=> {
        reqCharacters(pagina, personaje).then((data)=>{
            setCharacters(data.results)
            setTotal(data.total)
    
          })
    },[pagina, personaje])
  
    
    return {
        
        characters,
        total,
  }
}


