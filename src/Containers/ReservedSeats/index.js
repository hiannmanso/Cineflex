import './style.css'
import {Link, useLocation} from 'react-router-dom'
import Header from './../Header'

export default function ReservedSeats(){
    const location = useLocation();
    {console.log(location.state)}
    return(
        <>
          <Header />
            <div className='sucessContainer'>
                <h1>Pedido feito com sucesso!</h1>
            </div>
            <div className='container'>
                <div className='filme select'>
                    <h1>Filme e Sessão</h1>
                    <p>{location.state.infoFooter.movie.title}</p>
                    <p>{location.state.infoFooter.day.date} {location.state.infoFooter.name}</p>
                </div>
                <div className='infoseats select'>
                    <h1>Ingressos</h1>
                    {location.state.seatName.map(item=>{
                        return(
                            <p> Assento {item}</p>
                        )
                    })}
                </div>
                <div className='info select'>
                    <h1>Comprador</h1>
                    <p>Nome: {location.state.name}</p>
                    <p>CPF: {location.state.cpf}</p>
                </div>
            </div>
            <Link to='/'>
                <div className='btnFinal'><span>Voltar pra Home</span></div>
            </Link>
        </>
    )
}