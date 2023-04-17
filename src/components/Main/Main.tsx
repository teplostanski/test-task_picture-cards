import React from "react";
import "./Main.scss";
import Card from "../Card";
import CardsList from "../CardsList";

import { initialCards } from "../../utils/constants";

const Main: React.FC = () => {
  return (
    <div className="main">
      <CardsList>
        {initialCards.map((card) => (
          <Card image={card.link} caption={card.name} />
        ))}
      </CardsList>
    </div>
  );
};

export default Main;
