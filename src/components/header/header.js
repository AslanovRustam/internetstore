import { NavLink } from "react-router-dom";
import s from "./header.module.css";
import Logo from "../../images/logo.png";

export default function Header() {
  return (
    <header className={s.headerSection}>
      <img className={s.logo} src={Logo} alt="logo"></img>
      <ul>
        <NavLink className={s.pageLink} to="/catalog" exact>
          Каталог товаров
        </NavLink>
        <NavLink className={s.pageLink} to="/catalog/add" exact>
          Добавить товар
        </NavLink>
      </ul>
    </header>
  );
}
