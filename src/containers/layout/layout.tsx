import React from "react";
import { Helmet } from "react-helmet";
import { Router, Link } from "@reach/router";

type Props = {
  children: React.ReactNode
}

const Layout = ({children}: Props) => {
  return (
    <>
      <div>
        {
          children
        }
      </div>
    </>
  )
}

export default Layout