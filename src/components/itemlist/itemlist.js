import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { getAllItems } from "../../redux/selectors";
// import * as operations from "../../redux/";
import s from "./itemlist.module.css";
import Item from "../item/item";
// import Items from "../../db.json";

export default function ItemsList() {
  let items = useSelector(getAllItems);
  const [filteredItems, setFilteredItems] = useState(items);
  const dispatch = useDispatch();

  //   useEffect(() => {
  //     dispatch(items);
  //   }, [items]);

  //   let items = Items;
  const quantityOfAllItems = (items) => {
    let totalQuantity = 0;
    for (let i = 0; i < items.length; i++) {
      totalQuantity = totalQuantity + items[i].quantity;
    }
    return totalQuantity;
  };
  const priceOfAllItems = (items) => {
    let totalPrice = 0;
    for (let i = 0; i < items.length; i++) {
      totalPrice = totalPrice + items[i].price;
    }
    return totalPrice.toFixed(2);
  };
  const averagePrice = (items) => {
    let price = 0;
    for (let i = 0; i < items.length; i++) {
      price = price + items[i].price;
    }
    return (price / items.length).toFixed(3);
  };
  const deleteAllItems = () => {
    // console.log("до очистки", items);

    setFilteredItems([]);
    // console.log("после очистки", items);
  };

  const deleteItem = (id) => {
    const newItems = filteredItems.filter((item) => item.id !== id);
    setFilteredItems(newItems);
    // console.log("удалаю єлемент", id);
    // console.log("items", items);
    // return ();
  };

  return (
    <div className={s.listOfCard}>
      <div>
        <ul>
          <li className={s.catalogInformation}>
            Общее кол-во товаров:{" "}
            <span className={s.calculetedData}>
              {quantityOfAllItems(items)}шт
            </span>
          </li>
          <li className={s.catalogInformation}>
            Сумма цен всех товаров:{" "}
            <span className={s.calculetedData}>
              {priceOfAllItems(items)}грн
            </span>
          </li>
          <li className={s.catalogInformation}>
            Средняя цена:{" "}
            <span className={s.calculetedData}>{averagePrice(items)}грн</span>
          </li>
        </ul>
        <button type="button" onClick={() => deleteAllItems()}>
          Удалить все товары
        </button>
      </div>
      <ul className={s.itemsContainer}>
        {/* {filteredItems.map((item) => ( */}
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <li key={item.id} className={s.cardContainer}>
              {/* <Link to={`/laptop/${item.name}`}> */}
              <Item
                className={s.itemContent}
                name={item.name}
                url={item.url}
                price={item.price}
                quantity={item.quantity}
                description={item.description}
              />
              <button
                className={s.deleteButton}
                type="button"
                onClick={() => deleteItem(item.id)}
              >
                Удалить
              </button>
              {/* </Link> */}
            </li>
          ))
        ) : (
          <h1>Простите, товары не найдены</h1>
        )}
      </ul>
    </div>
  );
}
