import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.css";
import CakeContainer from "./Components/CakeContainer";
import IceCreamContainer from "./Components/iceCreamContainer";
// import HooksCakeContainer from './Components/HooksCakeContainer';
import SweetContainer from "./Components/SweetContainer";
import CheeseContainer from "./Components/CheeseContainer";
import ButterContainer from "./Components/ButterContainer";
import NewCakeContainer from "./Components/NewCakeContainer";
import NewIceCreamContainer from "./Components/NewIceCreamContainer";
import NewButterContainer from "./Components/NewButterContainer";
import NewCheeseContainer from "./Components/NewCheeseNumber";
import MilkContainer from "./Components/MilkContainer";
import ChocolateContainer from "./Components/ChocolateContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="row">
          <CakeContainer />
          <NewCakeContainer />
          <IceCreamContainer />
          <NewIceCreamContainer />
          <SweetContainer />
          <ButterContainer />
        </div>
        <div className="row">
          <NewButterContainer />
          <CheeseContainer />
          <NewCheeseContainer />
          <MilkContainer />
          <ChocolateContainer />
        </div>
      </div>
    </Provider>
  );
}

export default App;
