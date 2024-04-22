import { FormComponent } from '../components/FormComponent'
import React, { useState } from "react";
import { Button } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";



export const Reserva = () => {
    const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div style={{width:'100%', height:'50rem', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
        <div style={{width:'50%', display:'flex', justifyContent:'center', flexFlow:'column', alignItems:'center'}}>
            <h1 className='position-top'>Reserva tu mesa aquí</h1>
        <FormComponent />
     </div>
     <div style={{width:'50%',display:'flex', justifyContent:'center'}} className='mt-5'>
        <h4 className='me-5'>Seleccione una fecha</h4>
        <DatePicker selected={selectedDate} onChange={(date) => setSelectedDate(date)} />
        <Button className='ms-5' variant='warning'>Ver disponibilidad</Button>
     </div>
    </div>
  )
}
