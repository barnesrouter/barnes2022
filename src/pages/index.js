import React from "react"
import { graphql, Link } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links";

import Layout from "../components/layout"
import Triple from "../components/triple"
import Tabbed from "../components/tabbed"
import AskBarnes from "../components/askbarnes"
import Newsletter from "../components/newsletter"
import SEO from "../components/seo"

import BarnesLoop from "../../content/assets/BarnesHomeVideoSpring2022.mp4"

import { Parallax } from 'react-scroll-parallax';

import logo1 from "../../content/assets/Barnes-White-Web-sm.png";
import arrow1 from "../../content/assets/white-arrow.png";
import Opportunities from "../components/current-opportunities"




const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  
  
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Welcome to Barnes Nursery" />
      <div className="hero">
        <div className="video-contain">
          <video autoPlay="autoplay" muted loop="loop" id="bgvid">
            <source src={BarnesLoop} type="video/mp4" />
          </video>
          <div className="video-contain__gradient"></div>
        </div>
        <Parallax className="custom-class" y={[-10, 10]} >
        <div className="callto align-vertical">
          <div className="callto-content text-center">
              <img src={logo1} alt="Barnes Logo" className="heroImage" />
              <h1><span>Barnes </span>Let's Spring Ahead</h1>
              <AnchorLink to="/#first" className="down-button" title="Down" role="button" tabIndex="0"><img src={arrow1} alt="down"/></AnchorLink>
          </div>
        </div>
        </Parallax>
        <section id="first">
          <div className="gray-back">
            <div className="gray-back__washedout">
              <Triple />

              <Tabbed />
            </div>
          </div>
        </section>
        

        <section id="second">
          <div className="gray-back">
              <Opportunities />
              <div className="text-center">
                <h4>To apply please <Link to="/about-us/employment">View Employment Page</Link></h4>
                </div>
              <AskBarnes />
              <Newsletter />
          </div>
        </section>
        
      </div>
      
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
