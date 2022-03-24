import './style.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'

export default function FilmCards() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios({
            method: 'get',
            url: 'https://mock-api.driven.com.br/api/v5/cineflex/movies'
        }).then(response => {
            setMovies(response.data)
            console.log(response.data)
        }).catch(err => {
            console.log(err)
        })
    }, [])

    return (
        <>
            <div className='containerSelect'>
                <h1>Selecione o filme</h1>
            </div>
            
            <div className='cardsFilm'>
                {movies.map(item => {
                    return (
                        <Link to={`/session/${item.id}`}>
                            <CardFilm key={item.id} img={item.posterURL} title={item.title} />
                        </Link>
                    )
                })}
            </div>
        </>
    )
}

function CardFilm({ img, title, key }) {
    return (
        <div className='cardFilm'>
            <img src={img} alt={title} />
        </div>
    )
}