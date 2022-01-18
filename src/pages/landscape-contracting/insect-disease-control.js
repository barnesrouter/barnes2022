import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import Tabbed from "../../components/tabbed"
import SEO from "../../components/seo"
import Img from "gatsby-image"
import { Parallax } from 'react-scroll-parallax';

import logo1 from "../../../content/assets/Barnes-White-Web-sm.png";

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Insect &amp; Disease Control" />
      <div className="banner">
        
          <Img 
            fluid={data.insect.childImageSharp.fluid}
            alt="Test" 
            className="bannerImage"
          />
          <div className="overlay-test"></div>
          <div className="video-contain__gradient"></div>

          <Parallax className="page-overlay" y={[-10, 10]} >
            <div>
              <img src={logo1} alt="Barnes Garden Center Logo" className="heroImage" />
              <h1 className="no-margin"><span>Barnes </span>Insect &amp; Disease Control</h1>
            </div>        
          </Parallax>

      </div>

      <main className="over-banner inside-lg">
            <div className="inside-content">
              <p className="margin-top-0">When trees or shrubs are fighting certain insect or disease infestations, we will recommend a treatment program to get the problems under control. In certain situations we may recommend one or any combination of treatments to best suit your situation.</p>
              <p>A comprehensive four-step insect disease control program includes the following:</p>
              <p><strong>Early Spring:</strong> A blend of balanced fertilizer will be injected or broadcast to strengthen root systems and to enhance summer growth, flowering and general appearance.  </p>
              <p><strong>Spring:</strong> This is a time insects and diseases can devastate your plant material if allowed to develop unchecked. An application of insecticide and fungicide to the foliage will control the insects and diseases common to this area.</p>
              <p><strong>Early Summer:</strong> The summer heat encourages development of a whole new population of insects and disease problems. Sucking insects like aphids and mites and chewing insects like leaf beetles along with diseases like powdery mildew, scab or blight can cause damage. We specially mix a combination of insecticide and fungicide to control your tree and/or shrub problems.</p>
              <p><strong>Late Summer:</strong> With this final application of insecticide and fungicide, we rid your trees and shrubs of disease and late-hatching insects and eliminate the pest that would over-winter without treatment.</p>
              
                 
              <h3 className="border-below">Spider Spray</h3>

              <p>Spiders seem to be attracted to the beautiful homes and buildings along Lake Erie. Barnes has extensive experience treating the exteriors of these structures to control spiders. Using high pressure spray equipment, we treat the building's EXTERIOR including overhangs, eaves, doors, windows and foundation.</p>
              <p>Optimum spider control (without over doing it) is achieved in two sprayings:  The first in June, and the second in late August-September (weather dependent).  While some customers request only the June application, the vast majority prefer the additional treatment in late August-September.  These treatments keep homes and buildings clean and free from the majority of spiders and the debris they leave behind!</p>
              <p>Barnes provides free estimates for this service.  Call us at 419-433-5525 to discuss this service and/or schedule an estimate. Or email us at info@barnesnursery.com with any questions, or to sign up for the service.</p>
              
           
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
    insect: file(relativePath: {eq: "Barnes-Insect-Spray.jpg"}) {
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
