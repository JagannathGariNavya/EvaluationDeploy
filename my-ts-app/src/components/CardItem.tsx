import React from 'react';
import { Card } from '../types/trello';

interface CardItemProps {
  card: Card;
}

const CardItem: React.FC<CardItemProps> = ({ card }) => {
  return (
    <div className="card-item">
      <h5>{card.name}</h5>
      <p>{card.desc}</p>
      <p>Due: {new Date(card.due).toLocaleDateString()}</p>
    </div>
  );
};

export default CardItem;
