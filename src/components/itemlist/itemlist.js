import { useSelector, useDispatch } from "react-redux";
// import { useState, useEffect } from "react";
import { getFilteredItems } from "../../redux/selectors";
import s from "./itemlist.module.css";
import Item from "../item/item";
import actions from "../../redux/actions";

export default function ItemsList() {
  let items = useSelector(getFilteredItems);
  //   const [filteredItems, setFilteredItems] = useState(items);
  //   ////////////////////
  const dispatch = useDispatch();

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
    return price > 0 ? (price / items.length).toFixed(3) : 0;
  };
  const deleteAllItems = () => {
    dispatch(actions.deleteAllItemSuccess());

    // setFilteredItems([]);
    // console.log("после очистки", items);
  };

  const deleteItem = (id) => {
    // const newItems = filteredItems.filter((item) => item.id !== id);
    // setFilteredItems(newItems);
    dispatch(actions.deleteItemSuccess(id));
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
          {/* <button
          type="button"
          onClick={() => dispatch(actions.deleteAllItemSuccess())}
        > */}
          Удалить все товары
        </button>
      </div>
      <ul className={s.itemsContainer}>
        {/* {filteredItems.map((item) => ( */}
        {items.length > 0 ? (
          items.map((item) => (
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
                // onClick={() => dispatch(actions.deleteItemSuccess(item.id))}
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
