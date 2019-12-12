import React from 'react';
import './App.css';
import Multiples from './components/Multiples'
import FileUpload from './components/FileUpload'
import Fibonacci from './components/Fibonacci';
import Transaction from './components/Transactions';
import DoubleLinkedListComp from './components/DoubleLinkedList';
import TokenEvaluation from './components/TokenEvaluation';
import SumSells from './components/SumSells';
// import axios from axios

function App() {
  return (
    <div className="App">
      <Multiples />
      <hr />
      <FileUpload />
      <hr />
      <Fibonacci />
      <hr />
      <Transaction />
      <hr />
      <DoubleLinkedListComp />
      <hr />
      <TokenEvaluation />
      <hr />
      <SumSells />
    </div>

  );
}

export default App;
