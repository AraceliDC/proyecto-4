import React from 'react'
import { FormComponent } from '../components/FormComponent'


export const Home = () => {
  return (
    <div style={{display:'flex', flexWrap:'wrap', justifyContent:'center'}}>
        <div style={{display:'flex', flex:'column', width:'100%', justifyContent:'space-evenly'}}>
          <div style={{justifyContent: 'center', width: '20rem', height:'40rem', display:'flex', flexDirection:'column'}} className='m-5'>
            <h1>Bienvenido a HAPPY RAMYON</h1>
            <p>Te invitamos a disfrutar de nuestra sabrosa comida estilo coreano en nuestro local. <br />Ramyon, bibimbap, bulgogi, tteokbokki, entre otros. <br /> Revisa nuestro Menú</p>
          </div>
         <div style={{height:'40rem', width:'40rem',backgroundColor:'aqua'}} className='m-5'> 

          </div>
        </div>

        <div className='' style={{display:'flex',width:'100%',borderTop:'1px solid grey'}}>
          <div style={{width:'50%', height:'30rem',color:'white'}} className='bg-dark p-5'>
            <h4>Contáctate con nosotros</h4>
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
 