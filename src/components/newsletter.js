import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Parallax } from 'react-scroll-parallax';
//import NewsletterForm from './newsletter-form'

import logo1 from "../../content/assets/Barnes-White-Web-sm.png";

const Newsletter = () => {
  const data = useStaticQuery(graphql`
    query {
      newsletter: file(relativePath: { eq: "Barnes-Ask-Barnes-Plant-Closeup.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 996) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  
  const newsletter = data?.newsletter?.childImageSharp?.fluid
  return (
        
        <div className="inside-xxl flex-md feature newsletter">
          <div className="sixty order-1 over-under align-vertical text-center box-shadow">

            <div className="overlay">
              <h2><span className="go-away">Barnes</span> <span className="go-3">Newsletter</span></h2>
              <img src={logo1} alt="Barnes Logo Newsletter" className="newsletterwhite" />
              <p>Join our email listing for amazing offers, coupons, and current information</p>
            </div>

            <div className="underlay">
             
              <Img
                fluid={newsletter}
                alt='Barnes Newsletter'
                className="underlay-img"
              />

            </div>
          </div>

        <div className="forty order-1 align-vertical">
          <Parallax className="test-class" y={[0, 20]} >
          <iframe title="Barnes Mailjet" class="mj-w-res-iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://app.mailjet.com/widget/iframe/6D4l/KIX" width="100%"></iframe>

<script type="text/javascript" src="https://app.mailjet.com/statics/js/iframeResizer.min.js"></script>
          </Parallax>
        </div>

      </div>
    )
}

export default Newsletter

