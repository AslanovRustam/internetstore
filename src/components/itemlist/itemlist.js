import { useSelector, useDispatch } from "react-redux";
import { getFilteredItems, getUser } from "../../redux/selectors";
import s from "./itemlist.module.css";
import Item from "../item/item";
import actions from "../../redux/actions";
import { NavLink } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import SadCat from "../../images/sadcat.jpg";

const useStyles = makeStyles((theme) => ({
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function ItemsList() {
  const classes = useStyles();

  let items = useSelector(getFilteredItems);
  let role = useSelector(getUser);

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
  };

  const deleteItem = (id) => {
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
        {role === "админ" && (
          <Button
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
            startIcon={<DeleteIcon />}
            type="button"
            onClick={() => deleteAllItems()}
          >
            Удалить все товары
          </Button>
        )}
        <NavLink to="/" exact>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            type="button"
          >
            Назад
          </Button>
        </NavLink>
      </div>
      <ul className={s.itemsContainer}>
        {items.length > 0 ? (
          items.map((item) => (
            <li key={item.id} className={s.cardContainer}>
              <Item
                className={s.itemContent}
                name={item.name}
                url={item.url}
                price={item.price}
                quantity={item.quantity}
                description={item.description}
              />
              {role === "админ" && (
                <button
                  className={s.deleteButton}
                  type="button"
                  onClick={() => deleteItem(item.id)}
                >
                  Удалить
                </button>
              )}
            </li>
          ))
        ) : (
          <>
            <img src={SadCat} width="100%vw" alt="нет товаров"></img>
            <h1>Простите, товары не найдены</h1>
          </>
        )}
      </ul>
    </div>
  );
}
