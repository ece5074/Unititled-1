import "./App.css";
import { BrowserRouter, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Customer from './Customer'

function App() {
  return (
    <Route>
      <div>여기가 헤더다!</div>
      <Customer/>
    </Route>
  );
}

export default App;
