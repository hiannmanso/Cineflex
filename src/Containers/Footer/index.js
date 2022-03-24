import './style.css'

export default function Footer({url,name}){
    return(
        <footer className='footerContainer'>
            <div className='footerContent'>
                <div className='imgFooter'>
                    <img src ={url} alt={name}/>
                </div>
                <h1>{name}</h1>

            </div>
        </footer>
    )
}