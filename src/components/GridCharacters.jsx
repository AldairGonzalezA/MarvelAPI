import React from 'react'

export const GridCharacters = ({characters}) => {
  return (
    <>
    <div className="d-flex flex-row row row-cols-4">
    {characters &&
          characters.map((char) => (
            <div key={char.name}><img src={`${char.thumbnail.path}.${char.thumbnail.extension}`} className="card-img-top rounded m-3" alt="..." />
            <div className="card-body d-flex justify-content-center ">
              <p className="card-text">{char.name}</p>
            </div>
            </div>
          ))}
      </div>
    </>
  )
}
