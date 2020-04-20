import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AppNavBar from "./components/AppNavbar";
import ShoppingList from "./components/ShoppingList";
import { Provider } from "react-redux";
import store from "./store";
import ItemModal from './components/itemModal';
import { Container } from "reactstrap";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AppNavBar></AppNavBar>
        <Container>
          <ItemModal></ItemModal>
          <ShoppingList></ShoppingList>
        </Container>
      </div>
    </Provider>
  );
}

export default App;
