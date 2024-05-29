// File: App.jsx located in root-directory
import React from "react";
import Header from "./component/Header";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Login from "./component/Login";
import Register from "./component/Register";
import Diary from "./component/Diary";
import Footer from "./component/Footer";

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <Home />
      <Register />
      <Login />
      <Diary />
      <Footer />
    </div>
  );
}

export default App;
