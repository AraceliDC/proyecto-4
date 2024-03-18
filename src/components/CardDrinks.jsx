import React from 'react'
import { Button, Card } from 'react-bootstrap'


export const CardDrinks = ({holder}) => {
  return (
    <div style={{display:'flex', justifyContent:'space-evenly'}}>
    {
      holder.drinks.map(drink => (
        <Card key={drink.name} style={{ width: '18rem', margin:'10px' }}>
          <Card.Img variant='top' src={drink.image} />
          <Card.Body>
            <Card.Title>{drink.name}</Card.Title>
            <Button variant='warning'>Ver Mas detalles</Button>
          </Card.Body>
        </Card>))
    }
  </div>
  )
}
