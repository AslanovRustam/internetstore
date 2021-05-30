import { NavLink } from "react-router-dom";
import { useState } from "react";
import actions from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../redux/selectors";
import s from "./header.module.css";
import Logo from "../../images/logo.png";
import { SideBar } from "react-burger-sidenav";
import "react-burger-sidenav/dist/index.css";

export default function Header() {
  let user = useSelector(getUser);
  const [role, setRole] = useState(user);

  const dispatch = useDispatch();

  const selectRole = (item) => {
    dispatch(actions.setUserSuccess(item));
  };

  const handleSetRoleChange = (e) => {
    setRole(e.currentTarget.value);
    selectRole(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // setRole(e.currentTarget.value);
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
        <form onSubmit={handleSubmit}>
          <label>
            Выберите роль пользователя(админ или пользователь?)
            <input value={user} onChange={handleSetRoleChange} />
          </label>
          <button type="submit">выбрать</button>
        </form>
      </div>
    </header>
  );
}

{
  /* <ul>
        <NavLink className={s.pageLink} to="/catalog" exact>
          Каталог товаров
        </NavLink>
        <NavLink className={s.pageLink} to="/catalog/add" exact>
          Добавить товар
        </NavLink>
      </ul> */
}
////////////////////////////
{
  /* <nav onClick={() => setMenuActive(!menuActive)}>
        <div className={s.burgerBtn}>
          <span />
        </div>
      </nav>
      <div
        className={menuActive ? "menu active" : "menu"}
        onClick={() => setMenuActive(false)}
      >
        <div className={s.blur} />
        <div className={s.menuContent} onClick={(e) => e.stopPropagination()}>
          <ul>
            <li className={s.pageLinkItem}>
              <NavLink className={s.pageLink} to="/catalog" exact>
                Каталог товаров
              </NavLink>
            </li>
            <li className={s.pageLinkItem}>
              <NavLink className={s.pageLink} to="/catalog/add" exact>
                Добавить товар
              </NavLink>
            </li>
          </ul>
        </div>
      </div> */
}

////////////////////////
// export default function Header() {
//   // const [menuActive, setMenuActive] = useState(false);
//   return (
//     <header className={s.headerSection}>
//       <NavLink to="/" exact>
//         <img className={s.logo} src={Logo} alt="logo"></img>
//       </NavLink>

//       <SideBar bgColor="#DCDCDC" className={s.sideBar}>
//         {/* <SideBarItem bgColor="#DCDCDC"> */}
//         <NavLink className={s.pageLinkItem} to="/catalog" exact>
//           Каталог товаров
//         </NavLink>
//         {/* </SideBarItem> */}
//         {/* <SideBarItem bgColor="#DCDCDC"> */}
//         <NavLink className={s.pageLinkItem} to="/catalog/add" exact>
//           Добавить товар
//         </NavLink>
//         {/* </SideBarItem> */}
//       </SideBar>
//     </header>
//   );
// }
