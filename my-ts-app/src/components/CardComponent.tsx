import React from 'react';
import { Card } from '../types/trello';

interface CardComponentProps {
  card: Card;
}

const CardComponent: React.FC<CardComponentProps> = ({ card }) => {
  return (
    <div className="card-component">
      <h4>{card.name}</h4>
      <p>{card.desc}</p>
    </div>
  );
};

export default CardComponent;
