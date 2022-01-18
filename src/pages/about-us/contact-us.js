import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import Tabbed from "../../components/tabbed"
import SEO from "../../components/seo"
import Img from "gatsby-image"
import { Parallax } from 'react-scroll-parallax';
import AskBarnes from "../../components/askbarnes"
import Newsletter from "../../components/newsletter"


import logo1 from "../../../content/assets/Barnes-White-Web-sm.png";


const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Contact Us" />
      <div className="banner">
        
          <Img 
            fluid={data.contactUs.childImageSharp.fluid}
            alt="Test" 
            className="bannerImage"
          />
          <div className="overlay-test"></div>
          <div className="video-contain__gradient"></div>

          <Parallax className="page-overlay" y={[-10, 10]} >
            <div>
              <img src={logo1} alt="Barnes Garden Center Logo" className="heroImage" />
              <h1 className="no-margin"><span>Barnes </span>Contact Us</h1>
            </div>        
          </Parallax>

      </div>

      <main className="over-banner inside-lg">
        
        <div id="locations-gc">
          <Tabbed />

        </div>
      </main>
      <AskBarnes />
      <Newsletter />
      
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
    contactUs: file(relativePath: {eq: "Barnes-About-Us.jpg"}) {
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
