import { useEffect, useState } from 'react'
import CryptoJS from 'crypto-js'

export const MarvelApp = () =>{

  const [characters, setCharacters] = useState()

  const timeStamp = new Date().getTime()
  const public_api_key = 'b83d71459a08ad1d628db2272c30441c'
  const private_api_key = 'f6a7cceb37641652e33551f981f41b4cf43806a6'

  const hash = CryptoJS.MD5(timeStamp + private_api_key + public_api_key).toString();

  useEffect(()=> {
    const reqCharacters = async () =>{
      const resq = await fetch(`https://gateway.marvel.com:443/v1/public/characters?ts=${timeStamp}&apikey=${public_api_key}&hash${hash}`)
      const {data} = await resq.json()
      console.log(data)
      setCharacters(data.results)
    }

    reqCharacters()
  },[])

  return(
    <>
    {characters && characters.length > 0 && (
            <ul className="list-group list-group-flush">
              <li className="list-group-item"><strong>Estadísticas:</strong></li>
              {characters.map((char) => (
                <li key={characters.nombre} className="list-group-item">
                  {characters.nombre} 
                </li>
              ))}
            </ul>
          )}
    </>
  )
}