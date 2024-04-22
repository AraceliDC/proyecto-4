import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import "./CardMenu.css"

export const CardMenu = ({ holder }) => {
    const [cardStatus, setCardStatus] = useState(holder.dishes.map(() => true));

    const toggleCardStatus = (index) => {
        const newStatus = [...cardStatus];
        newStatus[index] = !newStatus[index];
        setCardStatus(newStatus);
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'space-evenly' }}className='comida'>
            {holder.dishes.map((dish, index) => (
                <Card key={dish.name} style={{ width: '18rem', margin: '10px' }} className={`cardmain ${cardStatus[index] ? '' : 'text-only'}`}>
                    {cardStatus[index] ? (
                        <>
                            <Card.Img variant='top' src={dish.image} />
                            <Card.Body>
                                <Card.Title>{dish.name}</Card.Title>
                                <Button variant='warning' onClick={() => toggleCardStatus(index)}>Ver mas detalles</Button>
                            </Card.Body>
                        </>
                    ) : (
                        <Card.Body>
                            <Card.Text>{dish.ingriedients}</Card.Text>
                            <Button variant='warning' onClick={() => toggleCardStatus(index)}>Ver mas detalles</Button>
                        </Card.Body>
                    )}
                </Card>
            ))}
        </div>
    );
};
