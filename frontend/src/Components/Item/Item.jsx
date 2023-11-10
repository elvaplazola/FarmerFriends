import React, {useEffect, useState} from "react";
import {Link} from 'react-router-dom';
import "./Item.css";

const Item = (props) => {
  useEffect( ()=> {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async() => {
    const data = await fetch('/produce');
    const items = await data.json();
    setItems(items);
  }

  return (
    <section>
    {
      items.map(item => (
        <div className="item">
        <img src={item.image} alt="" />
        <p>{item.name}</p>
        <div className="item-prices">
          <div className="item-price-new">${item.message}</div>
          <div className="item-price-new">${item.price}</div>
        </div>
      </div>
      ))
    }
    </section>
  );
};

export default Item;
