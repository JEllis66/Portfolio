import React from "react";
import './App.css';
import Home from "./components/Home"
import PortfolioAbout from "./view/PortfolioAbout"
import PortfolioProjects from "./view/PortfolioProjects"
import PortfolioResume from "./view/PortfolioResume"
import PortfolioContact from "./view/PortfolioContact"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      
          <Routes>
              <Route element={<Home/>} path="/" />
              <Route element={<PortfolioAbout/>} path="/PortfolioAbout" />
              <Route element={<PortfolioProjects/>} path="/PortfolioProjects" />
              <Route element={<PortfolioResume/>} path="/PortfolioResume" />
              <Route element={<PortfolioContact/>} path="/PortfolioContact" />
          </Routes>
        

    </div>
  </BrowserRouter>
  );
}

export default App;
