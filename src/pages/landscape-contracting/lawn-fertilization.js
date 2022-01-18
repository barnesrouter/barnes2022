import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import Tabbed from "../../components/tabbed"
import Quad from "../../components/quad"
import SEO from "../../components/seo"
import Img from "gatsby-image"
import { Parallax } from 'react-scroll-parallax';

import logo1 from "../../../content/assets/Barnes-White-Web-sm.png";

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Lawn Fertilization" />
      <div className="banner">
        
          <Img 
            fluid={data.lawn1.childImageSharp.fluid}
            alt="Test" 
            className="bannerImage"
          />
          <div className="overlay-test"></div>
          <div className="video-contain__gradient"></div>

          <Parallax className="page-overlay" y={[-10, 10]} >
            <div>
              <img src={logo1} alt="Barnes Garden Center Logo" className="heroImage" />
              <h1 className="no-margin"><span>Barnes </span>Lawn Services</h1>
            </div>        
          </Parallax>

      </div>

      <main className="over-banner inside-lg">
        <div className="inside-content">
              
          <h3 className="border-below no-margin">Lawn Fertilization Programs</h3>
          <p><strong>*Special note regarding mowing and application timing:</strong><br/> For most turf weeds, a majority of the weed leaf tissue remains intact following mowing due to their prostrate (horizontal) growth. Thus, the timing of mowing before or after an application should have little measurable impact on total weed control if little foliage is removed.  Conventional wisdom is to let the broadleaf weeds grow up a bit before spraying to maximize the amount of leaf tissue and thus herbicide entering the plant. </p>
          
          <p><strong>The 4-Step Program</strong> is recommended in cases where lawns are irrigated.</p>

          <p><strong>The 3-Step Program</strong> (skipping Step 3, the summer application) is a better choice when a lawn is not under regular irrigation. Frequently lawns without regular irrigation go dormant during the hot summer months making a fertilizer application unnecessary.  </p>
          
          <p><strong>The Custom Program</strong> allows you to select any of the 4 Steps described below.  In addition, we can apply weed control without fertilizer, or fertilizer without weed control. </p>

          <p><strong>The Premium Program</strong> was created for those who irrigate very regularly and REALLY ‘LOVE THEIR LAWN’. This program is guaranteed to keep your lawn healthy and green throughout the entire growing season.  The Premium Program includes:</p>
          <ul>
            <li>Monthly applications of fertilizer and weed control</li>
            <li>Early identification of potential fungus and or insect problems (While there is an extra charge if a fungicide needs to be applied, Premium Program subscribers receive a 15% discount off regular prices.)</li>
            <li>A FREE grub control application if needed (or requested)</li>
            <li>The Premium Program is fully guaranteed – or your money back!</li>
          </ul>
          <p>All of our Lawn Service Programs include service calls at no extra charge!</p>
        
        </div>
      </main>

      <div className="text-center"><h3 className="border-below">Description of Steps</h3></div>

      <Quad />

      <main className="over-banner inside-lg">
        <div className="inside-content">
          <h3 className="border-below no-margin">Additional Services</h3>
          <p><strong>Lawn Aeration</strong></p>
          <p>Aeration is beneficial for all established lawns.  It is the best way to reduce thatch, loosen up compacted soils and make it easier for water, air and nutrients to reach the roots of your turf.  Lawn aeration is recommended to be done in the spring or fall.</p>
          <p><strong>Grub Control</strong></p>
          <p>Grubs are controlled with an application of insect control that targets white grubs - usually in June.  This control is only applied when grubs are identified as present in a lawn or to lawns that are at higher risk for attack.</p>
          <p><strong>Flea and Tick Control</strong></p>
          <p>If fleas and ticks become rampant and threaten the health of people or pets, an application of turf insect control can help to reduce these populations in the yard.</p>
          <p><strong>Fungus/Disease Control</strong></p>
          <p>Many lawn fungus problems go away naturally when weather conditions change. However, in certain cases fungicides are required to reduce disease activity and maintain a healthy lawn.</p>
          <p><strong>Soil Testing</strong></p>
          <p>There are cases where soil testing may be recommended to help determine a more specific nutrient management for a lawn or landscape area.  Please call us directly for a personalized quote.</p>
          <p>All Organic and “Low Environmental Impact” Lawn Programs are being piloted by Barnes.  Please contact us for information and updates regarding these options.</p>
        </div>
          <div id="locations-gc">
            <Tabbed />
          </div>
        
      </main>
      
    </Layout>
  )
}
export default BlogIndex


export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    lawn1: file(relativePath: {eq: "Barnes-Landscape-Maintenance-2.jpg"}) {
      childImageSharp {
        fluid {
          aspectRatio
          base64
          sizes
          src
          srcSet
        }
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
