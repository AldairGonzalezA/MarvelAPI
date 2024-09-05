    import React, { useState } from 'react'

    export const BuscarCharacter = ({handleSearch}) => {
        
        const [personaje, setPersonaje] = useState('')
        const handleSubmit = (e) => {
            e.preventDefault()
            handleSearch(personaje)
          }

    return (
        <>
        <div className="container d-flex flex-row justify-content-center align-items-center mt-3 w-50">
        <form className="d-flex" action="" onSubmit={handleSubmit}>
            <input type="text" className="form-control me-2" placeholder="Search" onChange={(e)=>{setPersonaje(e.target.value)}} />
            <input type="submit" value="Buscar Personaje" className="btn btn-outline-success-white btn btn-dark" />
        </form>
        </div>
    </>
    )
    }