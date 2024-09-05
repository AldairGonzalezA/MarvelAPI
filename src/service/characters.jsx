import CryptoJS from 'crypto-js'

const timeStamp = new Date().getTime()
const public_api_key = 'b83d71459a08ad1d628db2272c30441c'
const private_api_key = 'f6a7cceb37641652e33551f981f41b4cf43806a6'

const hash = CryptoJS.MD5(
    timeStamp + private_api_key + public_api_key
).toString();


export const reqCharacters = async (pagina, personaje = '') =>{
    const offset = (pagina -1)*20
    let url = `https://gateway.marvel.com:443/v1/public/characters?ts=${timeStamp}&apikey=${public_api_key}&hash=${hash}&offset=${offset}`;
  personaje !== null && personaje !== ""
    ? (url = `https://gateway.marvel.com:443/v1/public/characters?ts=${timeStamp}&apikey=${public_api_key}&hash=${hash}&offset=${offset}&nameStartsWith=${personaje}`)
    : null;

    const resp = await fetch(url)
    const {data} = await resp.json()
    console.log(data)
    return data
  }
