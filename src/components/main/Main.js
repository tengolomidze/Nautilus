import Header from "../Header";
import Body from "./Body";
import Footer from "../Footer";
import Loading from "../Loading";
import { useState, useEffect } from "react";

const  Main = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    window.onload = () => setLoading(false)
  }, []);

    return (
      <div>
        {loading ? <Loading/> : ""}
        <Header/>
        <Body/>
        <Footer/>
      </div>
    );
  }
  
  export default Main;