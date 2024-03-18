import React from 'react'
import { FormComponent } from '../components/FormComponent'


export const Home = () => {
  return (
    <div style={{display:'flex', flexWrap:'wrap', justifyContent:'center'}}>
        <div style={{display:'flex', flex:'column', width:'100%', justifyContent:'space-evenly'}}>
          <div style={{justifyContent: 'center', width: '20rem', height:'40rem', backgroundColor: 'red', display:'flex', flexDirection:'column'}} className='m-5'>
            <h1>Bienvenido a HAPPY RAMYON</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias possimus vel, ullam dolor adipisci cumque nihil laudantium fuga ipsam, quo tempore deserunt modi quod, veritatis enim laboriosam consequuntur est quisquam.</p>
          </div>
         <div style={{height:'40rem', width:'40rem',backgroundColor:'aqua'}} className='m-5'> 

          </div>
        </div>

        <div className='' style={{display:'flex',width:'100%',borderTop:'1px solid grey'}}>
          <div style={{width:'50%', height:'20rem',color:'white'}} className='bg-dark p-5'>
            <h4>Contáctate con nosotros</h4>
            <span> En caso de duda sobre reserva, cancelación de reserva o cualquier otra pregunta, no dudes en contactarte con nosotros</span>
            <span>Concepción, Región del Bío-bío <br /> +56 11111111 <br />contacto@ramyonccp.cl</span>
          </div>
          <div className='bg-dark'>
            <FormComponent />
          </div>
        </div>
    </div>
  )
}
 