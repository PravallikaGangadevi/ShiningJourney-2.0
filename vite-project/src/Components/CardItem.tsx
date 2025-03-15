import "./CardItem.css"; // Import CSS file

import * as React from "react";

interface CardItemProps {
    name: string;
    desc: string;
    dateTime: string;
    style?: React.CSSProperties;
}
  
const CardItem: React.FC<CardItemProps> = ({ name, desc, dateTime, style }) => (
  <div className="card" style={style}>
    <h3>{name}</h3>
    <div dangerouslySetInnerHTML={{ __html: desc }} />
    <div className="datetime">{dateTime}</div>
  </div>
);

export default CardItem;
