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
      <SEO title="In the News" />
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
              <h1 className="no-margin"><span>Barnes </span>In the News</h1>
            </div>        
          </Parallax>

      </div>

      <main className="over-banner inside-lg">
        <div className="inside-content">
            <h3 className="border-below margin-top-0">Barnes Nursery and Crocker Park Introduce Barnes @ Crocker Park…an innovative partnership!</h3>
            <p>Crocker Park, Westlake, has always been recognized for its outstanding shopping experience, not only for their collection of top notched retailers, but for their beautiful natural spaces, pleasant pocket parks and lush container gardens tying the community together.  Crocker Park shoppers appreciating these unique, exciting urban gardens can now rely on Barnes Nursery to bring the ideas, plants, containers and more to their personal outdoor settings. This year Barnes Nursery will provide a fresh new link to the customer who wants a piece of the Crocker Park experience at home.</p>
            <p>Barnes Nursery, Huron, is a great, fun, family owned green industry landmark. Barnes loves to assist its customers in selecting a single plant all the way to providing simple to extensive landscape design, construction and maintenance. Barnes @ Crocker Park will help you take what inspires you and make it a reality. Experience our  “Garden Fashion Show” at Crocker Park beginning mid May through October, and let Barnes help you bring your favorite ideas home.</p>
            <blockquote>"Experiencing horticultural displays of the highest order all season is a great way for customers to discover new plant combinations, color and textural use and great garden design." said Julie Barnes, head of Barnes Garden Centers. "Imagine wandering through Crocker Park, seeing the perfect inspiration, and being able to make one call to help replicate it in your own setting."</blockquote>
            <blockquote>"With this partnership, we are bringing together the season long "Garden Fashion Show" experience at Crocker Park, with the retail/landscape professional footprint of Barnes Nursery to offer all our customers a complete horticultural experience! We think this partnership closes a loop." according to Krista Hermes, of Crocker Park.</blockquote>
            <p>Watch this new partnership bloom and grow. Find us on facebook and follow us on twitter throughout the growing season!  Click here to see our Crocker Color Combinations!</p>
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
