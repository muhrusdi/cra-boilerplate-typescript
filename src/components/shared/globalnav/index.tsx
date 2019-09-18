import React from "react";
import { NavStyled } from "./styled";
import { Link } from "@reach/router";
import Container from "@components/shared/container"

const Globalnav = () => {
  return (
    <NavStyled>
      <Container>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </Container>
    </NavStyled>
  )
}

export default Globalnav