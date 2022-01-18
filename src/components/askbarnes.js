import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { Parallax } from 'react-scroll-parallax';
import Contact21Tuts from './contact-tuts'

import logo1 from "../../content/assets/Barnes-White-Web-sm.png";

const AskBarnes = () => {
  const data = useStaticQuery(graphql`
    query AskQuery {
      askBarnes: file(absolutePath: { regex: "/Barnes-Ask-Barnes-Family-Gardening.jpg/" }) {
        childImageSharp {
          fluid(maxWidth: 996) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const askBarnes = data?.askBarnes?.childImageSharp?.fluid
  return (
        
        <div className="inside-xxl flex-md feature ask-barnes">
          <div className="sixty order-2 over-under align-vertical text-center box-shadow">

            <div className="overlay">
              <h2><span className="go-1">Ask</span> <span className="go-2">Dr.</span> <span className="go-away">Barnes</span></h2>
              <img src={logo1} alt="Barnes Logo Ask Barnes" className="askbarneswhite" />
              <p>Have a problem with a plant? Or any other general inquiries? We will Respond ASAP.</p>
            </div>

            <div className="underlay">
              
              
              {askBarnes && (
                <Image
                  fluid={askBarnes}
                  alt='Ask Dr Barnes Background'
                  className="underlay-img"
                />
              )}

            </div>
          </div>

          <div className="forty order-1 align-vertical">
            <Parallax className="test-class" y={[0, 20]} >
                <Contact21Tuts />
            </Parallax>
          </div>
          
        </div>
    )
}

export default AskBarnes