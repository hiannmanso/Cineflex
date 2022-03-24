import './style.css'

export default function Footer({url,name}){
    return(
        <footer className='footer'>
            <img src ={url} alt={name}/>
            <h1>{name}</h1>

            <></>
        </footer>
    )
}