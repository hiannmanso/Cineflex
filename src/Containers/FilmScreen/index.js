import './style.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'
import Footer from './../Footer'

export default function FilmScreen() {
    const [infoFilm, setInfoFilm] = useState([])
    const [infoFooter,setInfoFooter] = useState([])
    const {id} = useParams()

    useEffect(() => {
        axios({
            method: 'get',
            url: `https://mock-api.driven.com.br/api/v5/cineflex/movies/${id}/showtimes`
        }).then(response => {
            setInfoFilm(response.data.days)
            
            setInfoFooter(response.data)
            
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
                                {item.showtimes.map((times,index)=>{
                                    return(
                                        <Link  key={index} to={`/session/${times.id}`}>
                                             <button className='btnHr' key={times.id}><span className='textBtn'>{times.name}</span></button>
                                        </Link>

                                    )
                                })}

                            </div>
                           
                        </div>

                    )
                }):<h1>loading</h1>}
                
            </div>
            <Footer url={infoFooter.posterURL} name={infoFooter.title}/>


        </>
    )
}