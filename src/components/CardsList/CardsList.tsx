import { ReactElement } from "react";
import "./CardsList.scss";

const CardsList = (props: { children: ReactElement[] }) => {
  return <div className="cards__list">{props.children}</div>;
};

export default CardsList;
