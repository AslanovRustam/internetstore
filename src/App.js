import { Switch, Route } from "react-router-dom";
import Header from "./components/header/header";
import ItemList from "./components/itemlist/itemlist";
import AddItem from "./components/additem/additem";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <Header />
        </Route>
        <Route path="/catalog" exact>
          <ItemList />
        </Route>
        <Route path="/catalog/add">
          <AddItem />
        </Route>
      </Switch>
    </>
  );
}

export default App;
