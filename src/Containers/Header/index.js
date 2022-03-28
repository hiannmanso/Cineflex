import './style.css'
import {Link} from 'react-router-dom'

export default function Header({back}){
    return(
    <>
            <Link to={`${back}`}>
                {back ? <ion-icon classname='icon'name="arrow-undo-outline"></ion-icon>:<></>}

            </Link>
        <Link to ='/'>
            <div className='header'>
                <h1>CINEFLEX</h1>
            </div>
        </Link>
    </>
    )
}