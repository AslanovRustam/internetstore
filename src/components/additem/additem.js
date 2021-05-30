import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../../redux/selectors";
import shortid from "shortid";
import actions from "../../redux/actions";

export default function AddItem() {
  let user = useSelector(getUser);

  const [itemName, setItemName] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  // const [newItems, setNewItems] = useState([]);
  // let items = useSelector(getFilteredItems);
  // let newItems = [];

  const dispatch = useDispatch();

  // useEffect(() => {
  //   newItems.push(itemName);
  //   window.localStorage.setItem("newItem", JSON.stringify(newItems));
  // }, [newItems]);

  const addItem = (item) => {
    dispatch(actions.addItemSuccess(item));
  };

  const handleItemNameChange = (e) => {
    setItemName(e.currentTarget.value);
  };
  const handleItemDescriptionChange = (e) => {
    setItemDescription(e.currentTarget.value);
  };
  const handlesetItemPriceChange = (e) => {
    setItemPrice(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(
      `itemName: ${itemName},`,
      `itemDescription: ${itemDescription},`,
      `itemPrice: ${itemPrice},`
    );
    resetForm();
  };

  const resetForm = () => {
    setItemName("");
    setItemDescription("");
    setItemPrice("");
  };

  return (
    <form onSubmit={handleSubmit}>
      {user === "админ" ? (
        <>
          <label>
            <input
              type="text"
              placeholder="название товара"
              value={itemName}
              onChange={handleItemNameChange}
            ></input>
          </label>
          <label>
            <input
              type="text"
              placeholder="описание товара"
              value={itemDescription}
              onChange={handleItemDescriptionChange}
            ></input>
          </label>
          <label>
            <input
              type="number"
              placeholder="цена"
              value={itemPrice}
              onChange={handlesetItemPriceChange}
            ></input>
          </label>
          <button
            type="submit"
            onClick={() =>
              addItem({
                id: shortid.generate(),
                name: itemName,
                description: itemDescription,
                price: Number(itemPrice),
                quantity: 1,
                description:
                  "Экран 15.6 (1920x1080) Full HD, матовый / AMD Dual-Core A4-9125 (2.3 - 2.6 ГГц) / RAM 4 ГБ / SSD 128 ГБ / AMD Radeon R3 Graphics / DVD+/-RW / LAN / Wi-Fi / Bluetooth / веб-камера / DOS / 2.1 кг / черный",
              })
            }
          >
            Добавить товар
          </button>
        </>
      ) : (
        <h1>У вас недостаточно прав доступа для добавления товаров</h1>
      )}
    </form>
  );
}
