// LeftCard.tsx

import React from 'react';

interface LeftCardProps {
  title: string;
  date: string;
  description: string;
}

const LeftCard: React.FC<LeftCardProps> = ({ title, date, description }) => {
  return (
    <div className="container left">
      <div className="content">
        <h2>{title}</h2>
        <h3>{date}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default LeftCard;
