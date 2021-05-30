import { NavLink } from "react-router-dom";
import actions from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../redux/selectors";
import s from "./header.module.css";
import Logo from "../../images/logo.png";
import { SideBar } from "react-burger-sidenav";
import "react-burger-sidenav/dist/index.css";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

export default function Header() {
  let user = useSelector(getUser);

  const dispatch = useDispatch();

  const selectRole = (item) => {
    dispatch(actions.setUserSuccess(item));
  };

  const handleSetRoleChange = (e) => {
    selectRole(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <header className={s.headerSection}>
      <NavLink to="/" exact>
        <img className={s.logo} src={Logo} alt="logo"></img>
      </NavLink>

      <SideBar bgColor="#DCDCDC" className={s.sideBar}>
        <NavLink className={s.pageLinkItem} to="/catalog" exact>
          Каталог товаров
        </NavLink>
        <NavLink className={s.pageLinkItem} to="/catalog/add" exact>
          Добавить товар
        </NavLink>
      </SideBar>

      <div>
        <form
          onSubmit={handleSubmit}
          className={s.form}
          noValidate
          autoComplete="off"
        >
          {/* <label> */}
          <span className={s.formLabel}>
            {" "}
            Выберите роль пользователя(<strong> админ</strong> или
            <strong> пользователь</strong> ?)
          </span>
          <TextField
            id="outlined-basic"
            label="логин"
            variant="outlined"
            value={user}
            onChange={handleSetRoleChange}
          />
          {/* </label> */}
          <NavLink className={s.formBtn} to="/catalog" exact>
            <Button variant="contained" color="primary" type="submit">
              выбрать
            </Button>
          </NavLink>
        </form>
      </div>
    </header>
  );
}
