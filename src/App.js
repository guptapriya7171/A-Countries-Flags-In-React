import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Country from "./components/Country";


export default class App extends Component {
  render() {
    return (
    
      <div>
        <Navbar />
       <Country/>
      </div>
      
    );
  }
}
