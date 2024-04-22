import React from 'react'
import { FormComponent } from '../components/FormComponent'
import "./Footer.css"

export const FooterComponent = () => {
    return (
        <div className='footer' style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
            <div style={{ width: '50%', height: '30rem', color: 'white', position: 'center' }} className='bg-dark p-5'>
                <h4 className='mb-5'>Contáctate con nosotros</h4>
                <span> En caso de duda sobre reserva, cancelación de reserva o cualquier otra pregunta, no dudes en contactarte con nosotros</span>
                <span>Concepción, Región del Bío-bío <br /> +56 11111111 <br />contacto@ramyonccp.cl</span>
            </div>
            <div className='bg-dark' style={{ width: '50%', color:'white'}}>
                <h4 className='mt-2'>Formulario de contacto</h4>
                <FormComponent />
            </div>
        </div>)
}

