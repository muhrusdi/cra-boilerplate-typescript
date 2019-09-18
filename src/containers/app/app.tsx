import React from 'react';
import { Router, Link } from "@reach/router";
import About from "@containers/about";
import { Helmet } from "react-helmet";
import Home from "@containers/home";
import Globalnav from "@components/shared/globalnav";

const App: React.FC = () => {
  return (
    <div>
      <Helmet>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/modern-normalize/0.5.0/modern-normalize.min.css"
          rel="stylesheet"
        />
      </Helmet>
      <Globalnav/>
      <Router>
        <Home path="/"/>
        <About path="/about"/>
      </Router>
    </div>
  );
}

export default App;
