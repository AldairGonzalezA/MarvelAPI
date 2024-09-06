import React, { useState } from 'react'

export const BuscarCharacter = ({ handleSearch }) => {

    const [personaje, setPersonaje] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        handleSearch(personaje)
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjmHn7hDycWvYvGnj50dxygz2EUz8MBKKCqg&s" width={325} height={125} alt="" />
                    <form className="d-flex" role="search" onSubmit={handleSubmit}>
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e)=>{setPersonaje(e.target.value)}}/>
                            <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </>
    )
}