import './style.css'

export default function Footer({url,name,subtitle,weekday}){
    return(
        <footer className='footerContainer'>
            <div className='footerContent'>
                <div className='imgFooter'>
                    <img src ={url} alt={name}/>
                </div>
                <div className='title'>
                    <h1>{name}</h1>
                    {subtitle != undefined  ?  <h1>{weekday} - {subtitle}</h1>:<></>}
                </div>
            </div>
        </footer>
    )
}