import React from 'react'
import { Button, Card } from 'react-bootstrap'
import holder from '../holder.json'

export const Menu = () => {
  return (
    <div style={{display:'flex'}}>
      <h1>CONOCE NUESTROS PLATILLOS</h1>
      {
        holder.dishes.map(dish=> ( 
        <Card key={dish.name} style={{width:'18rem'}}>
          <Card.Img variant='top' src={dish.image}/>
          <Card.Body>
            <Card.Title>{dish.name}</Card.Title>
            <Button variant='warning'>Ingredientes</Button>
          </Card.Body>
        </Card>))
      }
    </div>
  )
}
