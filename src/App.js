import React, {useState, useEffect} from "react";
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Hero from "./Hero";
import Fullcard from "./Fullcard";
import axios from "axios";
import "./App";


function App() {

  const [data, setInfo] = useState([]);

  useEffect(() => {
     axios.get('https://jsonplaceholder.typicode.com/users').then(
       (response) => {
         setInfo(response.data.splice(0,9));
       }
     );
  }, [] )

  return (
    <Router>
      <Route exact path = "/">
        <Hero data ={data} />
      </Route>
      <Route path ="/cards/:username">
        <Fullcard data = {data} />
      </Route>
    </Router>
  );
}


      

    
export default App;
