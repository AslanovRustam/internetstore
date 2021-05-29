import s from "./itemlist.module.css";
import Item from "../item/item";
import Items from "../../db.json";

export default function ItemsList() {
  let items = Items;
  const quantityOfAllItems = (Items) => {
    let totalQuantity = 0;
    for (let i = 0; i < Items.length; i++) {
      totalQuantity = totalQuantity + Items[i].quantity;
    }
    return totalQuantity;
  };
  const priceOfAllItems = (Items) => {
    let totalPrice = 0;
    for (let i = 0; i < Items.length; i++) {
      totalPrice = totalPrice + Items[i].price;
    }
    return totalPrice.toFixed(2);
  };
  const averagePrice = (Items) => {
    let price = 0;
    for (let i = 0; i < Items.length; i++) {
      price = price + Items[i].price;
    }
    return (price / Items.length).toFixed(3);
  };
  const deleteAllItems = () => {
    console.log("до очистки", items);

    items = [];
    console.log("после очистки", items);
  };

  const deleteItem = (id) => {
    console.log("удалаю єлемент", id);
    console.log("items", items);
    const updItems = items.filter((item) => item.id !== id);
    console.log("updItems", updItems);
  };

  return (
    <div className={s.listOfCard}>
      <div>
        <ul>
          <li className={s.catalogInformation}>
            Общее кол-во товаров:{" "}
            <span className={s.calculetedData}>
              {quantityOfAllItems(Items)}шт
            </span>
          </li>
          <li className={s.catalogInformation}>
            Сумма цен всех товаров:{" "}
            <span className={s.calculetedData}>
              {priceOfAllItems(Items)}грн
            </span>
          </li>
          <li className={s.catalogInformation}>
            Средняя цена:{" "}
            <span className={s.calculetedData}>{averagePrice(Items)}грн</span>
          </li>
        </ul>
        <button type="button" onClick={() => deleteAllItems()}>
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
