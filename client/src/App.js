import React from "react";
import './App.css';
import PortfolioHome from "./view/PortfolioHome"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      
          <Routes>
              <Route element={<PortfolioHome/>} path="/" />
          </Routes>
        

    </div>
  </BrowserRouter>
  );
}

export default App;
