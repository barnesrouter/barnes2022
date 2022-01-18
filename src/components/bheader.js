import React from "react"
import { Link } from "gatsby"
import Menu from "../components/menu"
import logo1 from "../../content/assets/Barnes-4C-logo.png";

const Bheader = () => {
  
  return (
      
        <header className="main-header always-flex justify">
            <div className="logo-contain">
              <Link to="/">
                <img src={logo1} alt="Barnes Header Logo" className="bheader-logo" />
              </Link>
            </div>
            <Menu />
        </header>
        
    
  )
}

export default Bheader
