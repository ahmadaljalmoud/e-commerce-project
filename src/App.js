import React,{useState}from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Products from './products';
// import Cart from './cart'
function App() {
  const [selectedProducts, setSelectedProducts]=useState();

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            {/* <About /> */}
          </Route>
          <Route path="/cart">
            {/* {Cart} */}
          </Route>
          <Route path="/">
          <Products setSelectedProducts={setSelectedProducts}/>
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
