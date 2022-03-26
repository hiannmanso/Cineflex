import './style.css'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Footer from './../Footer'
import ReservedSeats from '../ReservedSeats'

export default function SessionFilm() {
    const { idSession } = useParams();

    const [infoSesssion, setInfoSession] = useState([])
    const [infoFooter, setInfoFooter] = useState('')
    const [seatsSelected, setSeatsSelected] = useState([])
    const [nameUser,setNameUser]= useState('')
    const [cpfUser,setCpfUser]= useState('')
    let valid = false
    let infoSeates={ids:seatsSelected, name:nameUser, cpf:cpfUser}

    function selectSeat(response, item) {

        if (response.target.parentNode.className == `seat green`) {
            response.target.parentNode.className = `seat true`
        } else {
            console.log(infoSeates)
            setSeatsSelected([...seatsSelected, item.name])
            response.target.parentNode.className = `seat green`

        }
    }

    function sendInfoSeats(){
        axios({
            method:'post',
            url:'https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many',
            data:infoSeates,
        }).then(item=>{
            console.log(item)
            console.log('enviado')
            valid = true
        })
    }


    useEffect(() => {
        axios({
            method: 'get',
            url: `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSession}/seats`
        }).then(response => {
            setInfoSession(response.data.seats)
            setInfoFooter(response.data)
            console.log(response.data)

        }).catch(err => {
            console.log(err)
        })
    }, [])
    return (
        <>
            <div className='containerSelect'>
                <h1>Selecione o(s) assento(s)</h1>
            </div>
            <div className='seats'>
                {infoSesssion ? infoSesssion.map((item, index) => {
                    return (
                        <button key={index} className={`seat ${item.isAvailable}`} >
                            <p onClick={(response) => {
                                selectSeat(response, item)

                            }}>{item.name}</p>
                        </button>

                    )
                }) : <></>}
            </div>
            <div className='legendsSeates'>
                <div className='lng'>
                    <div className='green seat'></div>
                    <p>Selecionado</p>
                </div>
                <div className='lng'>
                    <div className='true seat'></div>
                    <p>Disponível</p>
                </div>
                <div className='lng'>
                    <div className='false seat'></div>
                    <p>Indisponível</p>
                </div>
            </div>
            <div className='infosUsers'>
                <div className='inputName'>
                    <label>Nome do comprador:</label>
                    <input class='inputInfo' onChange={(e)=>{setNameUser(e.target.value)}} type='text' placeholder='Digite seu nome...' />
                </div>
                <div className='inputCpf'>
                    <label>CPF do comprador:</label>
                    <input class='inputInfo' onChange={(e)=>{setCpfUser(e.target.value)}} type='text' placeholder='Digite seu CPF...' />
                </div>
            </div>
                <Link to='/reservedSeats'>
                    <div className='btnFinal' onClick={sendInfoSeats}><span>Reservar assento(s)</span></div>

                </Link>

            {infoFooter != '' ? <Footer url={infoFooter.movie.posterURL} name={infoFooter.movie.title} subtitle={infoFooter.name} weekday={infoFooter.day.weekday} /> : <h1>Loading</h1>}
    
        </>
    )
}