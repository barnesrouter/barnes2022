import React from "react"
//import { Link } from "gatsby"

import Bheader from "../components/bheader"
import Footer from "../components/footer"
import { ParallaxProvider } from 'react-scroll-parallax';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../sass/style.scss"
const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  

  return (
    <div className="full-site" data-is-root-path={isRootPath}>
      <ParallaxProvider>
        <Bheader />
        <main>{children}</main>
        <Footer />
      </ParallaxProvider>
    </div>
  )
}

export default Layout
