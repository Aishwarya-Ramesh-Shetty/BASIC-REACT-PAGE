
import React from "react";
import "./App.css";
import Header from "../src/contents/Header.js";
import Main from "../src/contents/Main.js";
import Footer from "../src/contents/Footer.js";
import { createRoot } from 'react-dom';



const App = () =>{
    return(
        <div>
            <Header/>
            <Main/>
            <Footer/>
            
        </div>
    )
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);