import React from 'react'
import holder from '../holder.json'
import { CardMenu } from '../components/CardMenu'
import { CardDrinks } from '../components/CardDrinks'

export const Menu = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', width: '100%', height: '100%' }}>
      <div className='bg-warning menu-comida' style={{ width: "100%", height: "40%" }}>
        <div>
          <h1 className='m-5'>CONOCE NUESTROS PLATILLOS</h1>
        </div>
        <CardMenu holder={holder} />
      </div>
      <div style={{ width: "100%", height: "40%" }}>
        <div>
          <h1 className='m-5'>PARA LA SED</h1>
        </div>
        <CardDrinks holder={holder} />
      </div>
    </div>
  )
}
