import './style.css'
import { Link, useParams, useLocation } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Footer from './../Footer'
import Header from '../Header'
import {toast} from 'react-hot-toast'

export default function SessionFilm() {
    const { idSession } = useParams();
    const {state} = useLocation();


    const [infoSesssion, setInfoSession] = useState([])
    const [infoFooter, setInfoFooter] = useState('')
    const [seatsSelected, setSeatsSelected] = useState([])
    const [seatName,setSeatName] = useState([])
    const [nameUser, setNameUser] = useState('')
    const [cpfUser, setCpfUser] = useState('')
    let infoSeates = { ids: seatsSelected, name: nameUser, cpf: cpfUser,infoFooter:infoFooter ,seatName:seatName, route:`/session/${idSession}`}
    let valid = false
    

    function selectSeat(response, item) {

        if (response.target.parentNode.className == `seat green`) {
            response.target.parentNode.className = `seat true`
            setSeatName(seatName.filter(response=>{
                if(response != item.name){
                    return true
                }
            }))
            setSeatsSelected(seatsSelected.filter(response=>{
                if(response != item.name){
                    return true
                }
            }))
            
        }if(response.target.parentNode.className == `seat false`){
            alert('Esse assento não está disponível')
        }else {    
            setSeatsSelected([...seatsSelected, item.id])   
            setSeatName([...seatName, item.name])
            response.target.parentNode.className = `seat green`

        }
    }

    function sendInfoSeats() {
        axios({
            method: 'post',
            url: 'https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many',
            data: infoSeates,
        }).then(item => {
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
        }).catch(err => {
            console.log(err)
        })
    }, [])
    return (
        <>
         <Header back={state}/>
            <div className='containerAll'>
                <div className='containerSeats'>
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
                        <input class='inputInfo' onChange={(e) => { setNameUser(e.target.value) }} type='text' placeholder='Digite seu nome...' />
                    </div>
                    <div className='inputCpf'>
                        <label>CPF do comprador:</label>
                        <input class='inputInfo' onChange={(e) => { setCpfUser(e.target.value) }} type='text' placeholder='Digite seu CPF...' />
                    </div>
                </div>
                <Link to='/reservedSeats' state={infoSeates} >
                    <div className='btnFinal' onClick={sendInfoSeats}><span>Reservar assento(s)</span></div>

                </Link>

                {infoFooter != '' ? <Footer url={infoFooter.movie.posterURL} name={infoFooter.movie.title} subtitle={infoFooter.name} weekday={infoFooter.day.weekday} /> : <h1>Loading</h1>}

            </div>
        </>
    )
}