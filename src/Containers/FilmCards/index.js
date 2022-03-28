import './style.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
import {Link } from 'react-router-dom'
import Header from './../Header'


export default function FilmCards() {
    const [movies, setMovies] = useState([]);


    useEffect(() => {
        axios({
            method: 'get',
            url: 'https://mock-api.driven.com.br/api/v5/cineflex/movies'
        }).then(response => {
            setMovies(response.data)
        }).catch(err => {
            console.log(err)
        })
    }, [])

    return (
        <>  
              <Header/>
            <div className='containerCardsScreen'>
                <div className='selectFilm'>
                    <h1>Selecione o filme</h1>
                </div>
                <div className='cardsFilm'>
                    {movies.map((item) => {
                        return (
                            <Link to={`/film/${item.id}`}>
                                <CardFilm key={item.id} img={item.posterURL} title={item.title} />
                            </Link>
                        )
                    })}
                </div>
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