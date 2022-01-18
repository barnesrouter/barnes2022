import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Tabbed from "../components/tabbed"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { Parallax } from 'react-scroll-parallax';

import logo1 from "../../content/assets/Barnes-White-Web-sm.png";
import waytogrow from "../../content/assets/WaytoGrow.pdf";

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Garden Centers" />
      <div className="banner">

          <Img 
            fluid={data.background.childImageSharp.fluid}
            alt="Test" 
            className="bannerImage"
          />
          <div className="overlay-test"></div>
          <div className="video-contain__gradient"></div>

          <Parallax className="page-overlay" y={[-10, 10]} >
            <div>
              <img src={logo1} alt="Barnes Garden Center Logo" className="heroImage" />
              <h1 className="no-margin"><span>Barnes </span>Garden Centers</h1>
            </div>        
          </Parallax>

      </div>

      <section className="over-banner inside-lg">
            <div className="inside-content text-center">
              <h3 className="border-below">Garden Centers in Huron and Catawba Ohio</h3>
              <p>It's the personal touches that make a garden truly unique! And Barnes Garden Centers have everything to make gardens bloom with color and distinction. The selection of unique gifts and hard to find accent pieces make shopping fun.</p>
              <p>Choose from countless varieties of colorful flowers and plants, distinctive pots, patio accessories and little treasures. Create a complete environment or a cozy corner. Allow your world to bloom with Barnes!</p>
              <h3><a href={waytogrow}>Click here for planting, watering, fertilizing tips and more!</a></h3>
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
    background: file(relativePath: {eq: "Garden-Centers-Spring-Guide-3.jpg"}) {
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
