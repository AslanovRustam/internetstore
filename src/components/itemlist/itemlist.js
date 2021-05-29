import s from "./itemlist.module.css";
import Item from "../item/item";
import Items from "../../db.json";

export default function ItemsList() {
  return (
    <div className={s.listOfCard}>
      <ul className={s.itemsContainer}>
        {/* {filteredItems.map((item) => ( */}
        {Items.map((item) => (
          <li key={item.id} className={s.cardContainer}>
            {/* <Link to={`/laptop/${item.name}`}> */}
            <Item
              name={item.name}
              url={item.url}
              price={item.price}
              quantity={item.quantity}
              description={item.description}
            />
            {/* </Link> */}
          </li>
        ))}
      </ul>
    </div>
  );
}
