import { Switch, Route } from "react-router-dom";
import  Home  from "../pages/Home";
import  BookDetail  from "../pages/BookDetail";

export default function Routes() {
  return (
    <Switch>
      <Route component={Home} path="/" exact />
      <Route component={BookDetail} path="/livro/:bookId" exact />
    </Switch>
  );
};                                                              
