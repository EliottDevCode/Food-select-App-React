import './App.css';
import * as React from "react";


import Search from "./components/Search";
import Meals from "./components/Meals";
import Modal from "./components/Modal";
import Favorites from './components/Favorites';

function App() {
  return (
   <main>
       {/*<Favorites/>*/}
       <Meals/>
       {/*<Modal/>*/}
       {/*<Search/>*/}
   </main>
  );
}

export default App;
