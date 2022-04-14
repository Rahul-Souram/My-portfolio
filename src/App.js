import React, { useState, useRef } from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./comp/Navbar";
import Footer from "./comp/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import ScrollArrow from "./comp/Scrolltop";

function App() {
  const [isEditing, setEditing] = useState(false);
  const inputRef = useRef();
  const focus = () => {
    setEditing(!isEditing);
    if (isEditing) {
      inputRef.current.focus();
    }
  };
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/About">
            <About focus={focus} />
          </Route>
          <Route path="/Projects">
            <Projects inputRef={inputRef} />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>
          <Route path="/*">
            <Error />
          </Route>
        </Switch>
        <ScrollArrow />
        <Footer />
      </Router>
    </>
  );
}

export default App;
