import './style.css'
import {Link} from 'react-router-dom'

export default function ReservedSeats(){
    return(
        <>
            <div className='sucessContainer'>
                <h1>Pedido feito com sucesso!</h1>
            </div>
            <div className='container'>
                <div className='film'>
                    <h1>Filme e Sessão</h1>
                </div>
                <div className='infoseats'>
                    <h1>Ingressos</h1>
                </div>
                <div className='info'>
                    <h1>Comprador</h1>
                </div>
            </div>
            <Link to='/'>
                <div className='btnFinal'><span>Voltar pra Home</span></div>
            </Link>
        </>
    )
}