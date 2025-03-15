// RightCard.tsx

import React from 'react';

interface RightCardProps {
  title: string;
  date: string;
  description: string;
}

const RightCard: React.FC<RightCardProps> = ({ title, date, description }) => {
  return (
    <div className="container right">
      <div className="content">
        <h2>{title}</h2>
        <h3>{date}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default RightCard;
