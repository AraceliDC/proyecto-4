import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';

export const CardDrinks = ({ holder }) => {
    const [cardStatus, setCardStatus] = useState(holder.drinks.map(() => true));

    const toggleCardStatus = (index) => {
        const newStatus = [...cardStatus];
        newStatus[index] = !newStatus[index];
        setCardStatus(newStatus);
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
            {holder.drinks.map((drink, index) => (
                <Card key={drink.name} style={{ width: '18rem', margin: '10px' }} className={`cardmain ${cardStatus[index] ? '' : 'text-only'}`}>
                    {cardStatus[index] ? (
                        <>
                            <Card.Img variant='top' src={drink.image} />
                            <Card.Body>
                                <Card.Title>{drink.name}</Card.Title>
                                <Button variant='warning' onClick={() => toggleCardStatus(index)}>Ver mas detalles</Button>
                            </Card.Body>
                        </>
                    ) : (
                        <Card.Body>
                            <Card.Text>{drink.caracteristicas}</Card.Text>
                            <Button variant='warning' onClick={() => toggleCardStatus(index)}>Ver mas detalles</Button>
                        </Card.Body>
                    )}
                </Card>
            ))}
        </div>
    );
};

