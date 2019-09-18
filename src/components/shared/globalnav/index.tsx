import React from "react";
import { NavStyled } from "./styled";
import { Link } from "@reach/router";

const Globalnav = () => {
  return (
    <NavStyled>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </NavStyled>
  )
}

export default Globalnav