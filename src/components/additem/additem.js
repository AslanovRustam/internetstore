import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../../redux/selectors";
import shortid from "shortid";
import actions from "../../redux/actions";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Denied from "../../images/denied.png";
import s from "./additem.module.css";

const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function AddItem() {
  const classes = useStyles();
  let user = useSelector(getUser);

  const [itemName, setItemName] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  const [itemPrice, setItemPrice] = useState("");

  const dispatch = useDispatch();

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
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <form onSubmit={handleSubmit} className={classes.form} noValidate>
        {user === "админ" ? (
          <>
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="itemName"
              label="название товара"
              name="itemName"
              autoFocus
              type="text"
              value={itemName}
              onChange={handleItemNameChange}
            />

            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="itemDescription"
              label="описание товара"
              name="itemDescription"
              type="text"
              value={itemDescription}
              onChange={handleItemDescriptionChange}
            />

            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="itemPrice"
              label="цена"
              name="itemPrice"
              type="number"
              value={itemPrice}
              onChange={handlesetItemPriceChange}
            />
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              type="submit"
              onClick={() =>
                addItem({
                  id: shortid.generate(),
                  name: itemName,
                  description: itemDescription,
                  price: Number(itemPrice),
                  quantity: 1,
                })
              }
            >
              Добавить товар
            </Button>
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
          </>
        ) : (
          <div className={s.denied}>
            <img src={Denied} alt="stop"></img>
            <h1>У вас недостаточно прав доступа для добавления товаров</h1>
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
        )}
      </form>
    </Container>
  );
}
