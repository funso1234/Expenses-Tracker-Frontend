import React from 'react';
import './App.css'
import index from '../src/route/index'
// import {Header} from "./components/Header";
// import {Balance} from "./components/Balance";
// import {IncomeExpenses} from "./components/incomeExpenses";
// import TransactionList from "./components/TransactionList";
// import AddTransaction from "./components/AddTransaction";
// import {GlobalProvider} from "./context/GlobalState";
// import Transction from "./components/Transction";
import {RouterProvider} from 'react-router-dom'

function App() {
  return (
    <RouterProvider router={index} />
  );
}

export default App;
