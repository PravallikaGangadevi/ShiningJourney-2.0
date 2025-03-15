import './Card.css';

import React from 'react';

interface CardProps {
  head : string;
  text: string;
  dateTime: string; // Date and time string
}

const Card: React.FC<CardProps> = ({ head, text, dateTime }) => {
  return (
    <div className="card">
      <h2 className="head">{head}</h2>
      <div className="text" dangerouslySetInnerHTML={{ __html: text }} />
      <div className="datetime">{dateTime}</div>
    </div>
  );
};

export default Card;
