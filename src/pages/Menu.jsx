import React from 'react'
import { Card } from 'react-bootstrap'
import holder from '../holder.json'

export const Menu = () => {
  return (
    <div style={{display:'flex'}}>
      <h1>CONOCE NUESTROS PLATILLOS</h1>
      {
        holder.dishes.map(dish=> ( 
        <Card key={dish.name}>
          <Card.Img variant='top' src={dish.image}/>
        </Card>))
      }
    </div>
  )
}
