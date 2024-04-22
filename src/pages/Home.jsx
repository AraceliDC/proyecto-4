import React from 'react'
import { Image } from 'react-bootstrap'
import imgCentral from '../assets/images/imgCentral.jpg'
import "./Home.css"


export const Home = () => {
  return (
    <div style={{display:'flex', flexWrap:'wrap', justifyContent:'center'}} className='container-about'>
        <div style={{display:'flex', flex:'column', width:'100%', justifyContent:'space-evenly'}}className='container-text'>
          <div style={{justifyContent: 'center', width: '20rem', height:'40rem', display:'flex', flexDirection:'column'}} className='m-5 container-text-1'>
            <h1 className='mb-5'>Bienvenido a HAPPY RAMYON</h1>
            <p>Somos un restaurant familiar que empezó el año 2012, después de un viaje a Corea del Sur donde quedamos encantados con su cultura y comida. Debido a esto decidimos iniciar nuestro propio local compartiendo nuestra pasión por la comida con ustedes</p>
            <p>Te invitamos a disfrutar de nuestra sabrosa comida estilo coreano en nuestro local. <br />Ramyeon, bibimbap, bulgogi, tteokbokki, entre otros. <br /> Revisa nuestro Menú y recuerda que siempre puedes llegar sin reserva al local o si quieres asegurarte un lugar, puedes ir a nuestra sección de reservas y ver la disponibilidad</p>
          </div>
         <div style={{height:'40rem', width:'40rem', display:'flex', alignItems:'center'}} className='m-5 container-img'> 
            <Image src= {imgCentral}
              width="80%" 
              className="d-inline-block align-center"
              alt="img-central"/>
          </div>
        </div>
    </div>
  )
}
 