import React from 'react'
import holder from '../holder.json'
import { CardMenu } from '../components/CardMenu'

export const Menu = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', flex: 'column',width:'100%', height:'100%'}}>
      <div>
        <h1>CONOCE NUESTROS PLATILLOS</h1>
      </div>
      <CardMenu holder = {holder} />
    </div>
  )
}
