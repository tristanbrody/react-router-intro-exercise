import React from "react";
import Snack from "./Snack";
import "./VendingMachine.css";
import { BrowserRouter, Route, NavLink } from "react-router-dom";

function VendingMachine() {
  return (
    <BrowserRouter>
      <nav className="Snack-nav">
        <NavLink exact to="/">
          home
        </NavLink>
        <NavLink exact to="/hotcheetos">
          hot cheetos
        </NavLink>
        <NavLink exact to="/hotruffles">
          hot ruffles
        </NavLink>
        <NavLink exact to="/pbpretzels">
          peanut butter pretzels
        </NavLink>
      </nav>
      <Route exact path="/">
        <div>
          <img
            height="800px"
            width="800px"
            alt="vending machine"
            src="https://thumbs.dreamstime.com/z/up-board-vending-machine-cartoon-shape-up-board-vending-machine-cartoon-shape-vector-illustration-149258826.jpg"
          ></img>
        </div>
      </Route>
      <Route exact path="/hotcheetos">
        <div>
          <Snack
            name="hot cheetos"
            image="https://images.heb.com/is/image/HEBGrocery/001877133?fit=constrain,1&wid=800&hei=800&fmt=jpg&qlt=85,0&resMode=sharp2&op_usm=1.75,0.3,2,0"
          />
        </div>
      </Route>
      <Route exact path="/hotruffles">
        <Snack
          name="hot ruffles"
          image="https://target.scene7.com/is/image/Target/GUEST_0d1d7c5e-874c-4d72-b096-e75f884b9a7f?wid=488&hei=488&fmt=pjpeg"
        />
      </Route>
      <Route exact path="/pbpretzels">
        <Snack
          name="peanut butter pretzels"
          image="https://i5.walmartimages.com/asr/fa0b6806-c255-420b-a1c6-6c4c47626257.10fb4c922c781073effd86816ef372b5.jpeg"
        />
      </Route>
    </BrowserRouter>
  );
}

export default VendingMachine;
