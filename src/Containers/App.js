import {BrowserRouter,Route,Routes} from 'react-router-dom'

import Header from "./Header"
import FilmCards from './FilmCards'
import FilmScreen from './FilmScreen'
import SessionFilm from './SessionFilm'
import ReservedSeats from './ReservedSeats'

export default function App(){
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element={<FilmCards/>}/>
                <Route path='/film/:id' element={<FilmScreen/>}/>
                <Route path='/session/:idSession' element={<SessionFilm/>}/>
                <Route path='/reservedSeats' element={<ReservedSeats/>}/>
            </Routes>
            
        </BrowserRouter>
    )
    
} 

