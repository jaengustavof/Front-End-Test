import {  BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useContext } from "react";
import Header from './components/header/Header';
import List from './pages/list/List';
import Details from './pages/details/Details';
import FetchContext from "./context/fetchContext";
import GetItems from "./hooks/GetItems";

import "./app.scss";


function App() {
  const {items, setItems} = GetItems();
  const [filter, setFilter] = useState("");

  return (
    <FetchContext.Provider value={{items, setItems, filter, setFilter}}>
      <div className="App">
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route path="/" element = {<List/>}/>
            <Route path="/:id" element = {<Details/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </FetchContext.Provider>
  );
}

export default App;
