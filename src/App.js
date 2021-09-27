import React from "react";
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Hero from "./Hero";
import Fullcard from "./Fullcard";
import "./App";

const App = () => {

  const data = [
    {
      title: "Box 1",
      description: " xxxXXXxxx"
    },
    {
      title: "Box 2",
      description: " xxxXXXxxx"
    },
    {
      title: "Box 3",
      description: " xxxXXXxxx"
    },
    {
      title: "Box 4",
      description: " xxxXXXxxx"
    },
    {
      title: "Box 5",
      description: " xxxXXXxxx"
    },
    {
      title: "Box 6",
      description: " xxxXXXxxx"
    },
  ]

    return(
        <Router>
          <Route exact path = "/">
            <Hero data ={data} />
          </Route>
          <Route path ="/cards/:title">
            <Fullcard data = {data} />
          </Route>
        </Router>
    );
};

export default App;
