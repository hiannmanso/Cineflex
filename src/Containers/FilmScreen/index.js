import './style.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

export default function FilmScreen() {
    const [infoFilm, setInfoFilm] = useState([])
    const {id} = useParams()

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
                <h1>Selecione o horário</h1>
            </div>
            <div className='film'>
                {infoFilm ? infoFilm.map((item,index)=>{
                    return(
                        <div className='dataFilm' key={index}>
                            <h1>{item.weekday} {item.date}</h1>
                            <div className='filmHours'>
                                {item.showtimes.map((item)=>{
                                    return(
                                        <button className='btnHr' key={item.id}><span className='textBtn'>{item.name}</span></button>

                                    )
                                })}

                            </div>
                           
                        </div>

                    )
                }):<h1>loading</h1>}
            </div>


        </>
    )
}