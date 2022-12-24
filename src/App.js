import Main from "./components/main/Main";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const  App = () => {

  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
