import React from 'react'
import { FormComponent } from '../components/FormComponent'
import { Image } from 'react-bootstrap'
import imgCentral from '../assets/images/imgCentral.jpg'


export const Home = () => {
  return (
    <div style={{display:'flex', flexWrap:'wrap', justifyContent:'center'}}>
        <div style={{display:'flex', flex:'column', width:'100%', justifyContent:'space-evenly'}}>
          <div style={{justifyContent: 'center', width: '20rem', height:'40rem', display:'flex', flexDirection:'column'}} className='m-5'>
            <h1 className='mb-5'>Bienvenido a HAPPY RAMYON</h1>
            <p>Te invitamos a disfrutar de nuestra sabrosa comida estilo coreano en nuestro local. <br />Ramyeon, bibimbap, bulgogi, tteokbokki, entre otros. <br /> Revisa nuestro Menú</p>
          </div>
         <div style={{height:'40rem', width:'40rem'}} className='m-5'> 
            <Image src= {imgCentral}
              width="100%" 
              className="d-inline-block align-center"
              alt="img-central"/>
          </div>
        </div>

        <div className='' style={{display:'flex', justifyContent:'center',width:'100%'}}>
          <div style={{width:'50%', height:'30rem',color:'white', position:'center'}} className='bg-dark p-5'>
            <h4 className='mb-5'>Contáctate con nosotros</h4>
            <span> En caso de duda sobre reserva, cancelación de reserva o cualquier otra pregunta, no dudes en contactarte con nosotros</span>
            <span>Concepción, Región del Bío-bío <br /> +56 11111111 <br />contacto@ramyonccp.cl</span>
          </div>
          <div className='bg-dark' style={{width:'50%'}}>
            <FormComponent />
          </div>
        </div>
    </div>
  )
}
 