import React from 'react'
import { Button, Card } from 'react-bootstrap'


export const CardMenu = ({holder}) => {
  return (
    <div style={{display:'flex', justifyContent:'space-evenly'}}>
        {
          holder.dishes.map(dish => (
            <Card key={dish.name} style={{ width: '18rem', margin:'10px' }}>
              <Card.Img variant='top' src={dish.image} />
              <Card.Body>
                <Card.Title>{dish.name}</Card.Title>
                <Button variant='warning'>Ingredientes</Button>
              </Card.Body>
            </Card>))
        }
      </div>
    )
}
