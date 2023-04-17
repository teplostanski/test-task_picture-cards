import React, { useEffect, useState } from "react";
import "./Main.scss";
import Card from "../Card";
import CardsList from "../CardsList";
import Switch from "../Switch";

import { initialCards } from "../../utils/constants";

const Main: React.FC = () => {
  //const SWAPI = "https://swapi.dev/api/people";
  const src = "https://jsonplaceholder.typicode.com/photos/";

  const [cards, setCards] = useState([]);

  const getApiResource = async (url: RequestInfo | URL) => {
    try {
      const res = await fetch(url);

      if (!res.ok) {
        console.error("Could not fetch.", res.status);
        return false;
      }

      return await res.json();
    } catch (error: any) {
      console.error("Could not fetch.", error.message);
      return false;
    }
  };

  const getRes = async (url: string) => {
    const res = await getApiResource(url);
    //return res

    //const pictures = res.map((el: { title: string; url: string }) => {
    //  console.log(el.title, el.url)
    //  return el.title, el.url;
    //});

    setCards(res);
    //setCards(pictures);
    //setCards(initialCards)
  };

  useEffect(() => {
    getRes(src);
    //setCards(initialCards)
  }, []);

  return (
    <div className="main">
      <Switch
        onChange={function (value: boolean): void {
          throw new Error("Function not implemented.");
        }}
      />
      {cards && (
        <CardsList>
          {cards.map((el: { title: string; url: string }) => (
            <Card key={el.url} image={el.url} caption={el.title} />
          ))}
        </CardsList>


      )}

    </div>
  );
};

export default Main;
