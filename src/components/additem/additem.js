import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import shortid from "shortid";
import actions from "../../redux/actions";

export default function AddItem() {
  const [itemName, setItemName] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  const [itemPrice, setItemPrice] = useState(0);

  const dispatch = useDispatch();

  const addItem = (item) => {
    dispatch(actions.addItemSuccess(item));

    // setFilteredItems([]);
    // console.log("после очистки", items);
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
      <label>
        <input
          placeholder="название товара"
          value={itemName}
          onChange={handleItemNameChange}
        ></input>
      </label>
      <label>
        <input
          placeholder="описание товара"
          value={itemDescription}
          onChange={handleItemDescriptionChange}
        ></input>
      </label>
      <label>
        <input
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
          })
        }
      >
        Добавить товар
      </button>
    </form>
  );
}
