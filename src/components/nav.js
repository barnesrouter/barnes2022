import React, { useState, useRef } from 'react'
import Arrow from "../components/arrow"

function Accordion(props) {

    const [setActive, setActiveState] = useState("");
    const [setHeight, setHeightState] = useState("0px");

    const content = useRef(null);

    function toggleAccordion() {
        setActiveState(setActive === "" ? "active" : "");
        setHeightState(setActive === "active" ? "0px" : `${content.current.scrollHeight}px`)
    }

    return (
        <div id={props.id} className="accordion__section flex-md">
            <div className="menu-content">
                <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
                    <h4 className="accordion__title always-flex justify">{props.title}<span><Arrow /></span></h4>
                </button>
                <div ref={content} style={{maxHeight: `${setHeight}`}} className="accordion__content"><ul dangerouslySetInnerHTML={{ __html: props.content }}></ul></div>
            
            </div>
             <div className="menu-image"><div></div></div>
        </div>
        
    )
}
export default Accordion