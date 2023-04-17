import React from "react";
import "./Main.scss";
import Card from "../Card";
import CardsList from "../CardsList";
import Switch from "../Switch";

import { initialCards } from "../../utils/constants";

const Main: React.FC = () => {
  return (
    <div className="main">
      <Switch onChange={function (value: boolean): void {
        throw new Error("Function not implemented.");
      } } />
      <CardsList>
        {initialCards.map((card) => (
          <Card image={card.link} caption={card.name} />
        ))}
      </CardsList>
    </div>
  );
};

export default Main;
