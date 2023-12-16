import React from "react"
import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import Navigation from './components/navigation';

function App() {

  return (
    <div className="App">
        <Header text={'React JS Blog'}/>
        <Navigation />
        <Footer text={'CopyRight 2023'}/>
    </div>
  );
}

export default App;
