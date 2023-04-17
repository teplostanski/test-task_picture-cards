import React from "react";
import "./Card.scss";
import HeartIcon from "../../assets/HeartIcon";
import TrashIcon from "../../assets/TrashIcon";

export default function Card(props: {
  id?: number;
  image: string;
  caption: string;
}) {
  return (
    <figure className="card">
      <div className="card__wrapper">
        <img src={props.image} alt={props.caption} className="card__image" />
      </div>
      <figcaption className="card__caption-wrapper">
        <p className="card__caption">{props.caption}hhhhhhh</p>
        <div className="card__icons-wrapper">
          <span className="card__icon">
            <HeartIcon />
          </span>
          <span className="card__icon">
            <TrashIcon />
          </span>
        </div>
      </figcaption>
    </figure>
  );
}
