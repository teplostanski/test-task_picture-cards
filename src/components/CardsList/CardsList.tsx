import * as React from 'react';
import "./CardsList.scss";

type Props = {
  children?: React.ReactNode
};

const CardsList: React.FC<Props> = ({ children }) => {
  return <div className="cards__list">{children}</div>;
};

export default CardsList;
