import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
//import Tabbed from "../../components/tabbed"
import SEO from "../../components/seo"
import Img from "gatsby-image"
import { Parallax } from 'react-scroll-parallax';

import logo1 from "../../../content/assets/Barnes-White-Web-sm.png";

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Tree Services" />

      <div className="banner">
        
          <Img 
            fluid={data.tree1.childImageSharp.fluid}
            alt="Test" 
            className="bannerImage"
          />
          <div className="overlay-test"></div>
          <div className="video-contain__gradient"></div>

          <Parallax className="page-overlay" y={[-10, 10]} >
            <div>
              <img src={logo1} alt="Barnes Garden Center Logo" className="heroImage" />
              <h1 className="no-margin"><span>Barnes </span>Tree Services</h1>
            </div>        
          </Parallax>

      </div>

      <main className="over-banner inside-lg">
            <div className="inside-content">
                 
              <h3 className="border-below no-margin">Tree Trimming and Removal</h3>
              
              <ul>
              <li>Tree removal - When trees are a hazard or must be removed for a variety of reasons.</li>
              <li>Stump removal - Whether left for years or from a recent take down, grinding out stumps will provide an opportunity for grass or new trees.</li>
              <li>Deep-root feeding - Injects fertilizer near roots to add vigor, eliminate sclerotic conditions and overall improve the health of the tree.</li>
              <li>Cabling/Bracing - Used to prevent potential structural failure due to ice, wind or other elements.</li>
              <li>Insect and Disease Control (Integrated Pest Management-IPM).</li>
              <li>Tree transplanting - Barnes moves trees from place to place using several mechanical digging and transporting machines. We also offer hand digging for the trees that may not be accessible otherwise.</li>
              <li>Winter Protection - From winter guard sprays to trunk guards, there are variety of protection measures to prevent damage caused by weather and animals.</li>
              <li>Storm damage clean-up - Offering 24 hour emergency service for catastrophic storm damage.</li>
              <li>Mulching - Using a shredded hardwood bark cover under the base of trees creates a finished look while providing root and trunk protection, increases water retention, and moderates soil temperatures (warmer in winter, cooler in summer) all which foster healthier plants.</li>
              </ul>

              <div className="in-image section-sm">
                <Img 
                  fluid={data.tree2.childImageSharp.fluid}
                  alt="Barnes Professional Design Process" 
                  className="in-image-img"
                />
                <h3 className="in-image-text no-margin">Tree Planting and Moving</h3>
                <div className="video-contain__gradient" />
              </div>

              <p>Barnes is well known for growing and planting the best trees ever!!! Barnes maintains a wide selection of shade and ornamental trees grown here in our own tree production nurseries. From smaller container size plants to the largest balled and burlapped trees, we have the personnel and equipment to do it all.</p> 

              <p>Looking for a certain tree variety, size, or even large numbers of trees or plants, give us a call at 800-421-8722 or email us at info@barnesnursery.com, for availability and prices.</p>   

              <p>Barnes moves trees, too. If you have a special tree that can not remain in its present location, we can move it either by machine or hand digging. Barnes provides free estimates for all tree moving projects.  We give firm estimates and honest professional advice as to whether it is cost effective to relocate your tree.</p>

              <h4>Soil Analysis</h4>
              <p>When a situation calls for more specific information regarding a soil's physical make-up, its available nutrients, or other growing conditions, Barnes will sample the soil and send those samples to a certified soil testing laboratory.</p>
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
    tree1: file(relativePath: {eq: "Barnes-Cherry-Blossom.jpg"}) {
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
    tree2: file(relativePath: {eq: "Barnes-Tree-Sapling.jpg"}) {
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
