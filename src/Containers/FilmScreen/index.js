import './style.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

export default function FilmScreen() {
    const [infoFilm, setInfoFilm] = useState({})
    const id = 1

    useEffect(() => {
        axios({
            method: 'get',
            url: `https://mock-api.driven.com.br/api/v5/cineflex/movies/${id}/showtimes`
        }).then(response => {
            setInfoFilm(response.data.days)
            console.log(response.data.days)
        })
    }, [])
    return (
        <>
            <div className='containerSelect'>
                <h1>Selecione o(s) assento(s)</h1>
            </div>
            <div className='film'>
                                <div className='dataFilm'>
                                    <p>teste</p>
                                </div>
            </div>


        </>
    )
}