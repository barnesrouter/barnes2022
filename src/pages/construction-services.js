import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Tabbed from "../components/tabbed"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { Parallax } from 'react-scroll-parallax';

import logo1 from "../../content/assets/Barnes-White-Web-sm.png";

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Construction Services" />
      <div className="banner">

          <Img 
            fluid={data.construct1.childImageSharp.fluid}
            alt="Test" 
            className="bannerImage"
          />
          <div className="overlay-test"></div>
          <div className="video-contain__gradient"></div>

          <Parallax className="page-overlay" y={[-10, 10]} >
            <div>
              <img src={logo1} alt="Barnes Garden Center Logo" className="heroImage" />
              <h1 className="no-margin"><span>Barnes </span>Construction Services</h1>
            </div>        
          </Parallax>

      </div>

      <section className="over-banner inside-lg">
        <div className="inside-content">
          <h3 className="border-below">Big Equipment Services</h3>
          
          <ul>
          <li>Big John Tree Moving</li>
          <li>14-ton National Crane</li>
          <li>Backhoe Contracting</li>
          <li>Rockhound</li>
          <li>Dozer Work</li>
          <li>Excavator Work</li>
          <li>Roll-Off Container Service</li>
          </ul>
          
          <h4>Snow Removal Services</h4>
          <p>Barnes Nursery provides expert, reliable snow and ice service to commercial as well as residential customers. Our equipment fleet includes heavy duty plows for the biggest and toughest jobs. Barnes provides contracts customized for your particular needs. Call for quotes for your winter weather services.</p>
        </div>
        <div id="locations-gc">
          <Tabbed />
        </div>
      </section>
      
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
    construct1: file(relativePath: {eq: "Barnes-Contsruction-Equipment.jpg"}) {
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
