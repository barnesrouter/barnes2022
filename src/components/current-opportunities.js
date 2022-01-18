import React from "react"
import { Link } from "gatsby"

import logo1 from "../../content/assets/Barnes-4C-web.png";

import cdlTruckDriver from "../../content/assets/CDL_Truck_Driver.pdf";
import heavyEquipmentOperator from "../../content/assets/Heavy_Equipment_Operator.pdf";
import landscapeDesigner from "../../content/assets/Landscape_Designer.pdf";
import landscapeForeman from "../../content/assets/Landscape_Construction_Foreman.pdf";
import landscapeMember from "../../content/assets/Landscape_Crew_Member.pdf";
import employmentpdf from "../../content/assets/Barnes-Job-Application-Fillable.pdf";

const Opportunities = () => {
  
  return (
        
        <div className="tabbed-parent text-center opportunities">

            <div>
                <img src={logo1} alt="Barnes Location Hours" className="medium-logo" />
                <h2>Current Opportunities</h2>
            </div>

            <h4>Garden Centers</h4>
            <p>
                Hiring all positions<br/>
                <Link to="/about-us/employment-application">Fill out our online application</Link><br/>
                <a href={employmentpdf}>or download PDF application</a>
            </p>

            <h4>Compost Facilities</h4>
            <p><strong>Jobs currently available</strong><br />
            <a href={cdlTruckDriver}>CDL Truck Driver</a><br />
            <a href={heavyEquipmentOperator}>Heavy Equipment Operator</a><br />
            </p>
            
            <h4>Landscape Division</h4>
            <p><strong>Jobs currently available</strong><br />
            <a href={landscapeDesigner}>Landscape Designer/Estimator</a><br />
            <a href={landscapeForeman}>Landscape Construction Foreman</a><br />
            <a href={landscapeMember}>Landscape Crew Member</a><br />
            </p>

        </div>

    )
}

export default Opportunities
