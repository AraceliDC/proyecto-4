import React from 'react'
import { Image } from 'react-bootstrap'
import imgCentral from '../assets/images/imgCentral.jpg'


export const Home = () => {
  return (
    <div style={{display:'flex', flexWrap:'wrap', justifyContent:'center'}}>
        <div style={{display:'flex', flex:'column', width:'100%', justifyContent:'space-evenly'}}>
          <div style={{justifyContent: 'center', width: '20rem', height:'40rem', display:'flex', flexDirection:'column'}} className='m-5'>
            <h1 className='mb-5'>Bienvenido a HAPPY RAMYON</h1>
            <p>Somo un restaurant familiar que empezó el año 2012, después de un viaje a Corea del Sur donde quedamos encantados con su cultura y comida. Debido a esto decidimos inicuar  nuestro propio local compartiendo nuestra pasión por la comida</p>
            <p>Te invitamos a disfrutar de nuestra sabrosa comida estilo coreano en nuestro local. <br />Ramyeon, bibimbap, bulgogi, tteokbokki, entre otros. <br /> Revisa nuestro Menú</p>
          </div>
         <div style={{height:'40rem', width:'40rem', display:'flex', alignItems:'center'}} className='m-5'> 
            <Image src= {imgCentral}
              width="80%" 
              className="d-inline-block align-center"
              alt="img-central"/>
          </div>
        </div>

        
    </div>
  )
}
 