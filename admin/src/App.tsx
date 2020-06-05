import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Login from './pages/Login';
import Index from './pages/Index';


function App() {
  return (
    <Router>
        <Route path="/" exact component={Login} />
        <Route path="/index"  component={Index} />
    </Router>
  );
}
export default App;
