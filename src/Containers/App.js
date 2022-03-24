import Header from "./Header"
import FilmCards from './FilmCards'
import FilmScreen from './FilmScreen'
import Footer from './Footer'
import {BrowserRouter,Route,Routes} from 'react-router-dom'

export default function App(){
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element={<FilmCards/>}/>
                <Route path='/session/:id' element={<FilmScreen/>}/>
            </Routes>
            
        </BrowserRouter>
    )
} 

