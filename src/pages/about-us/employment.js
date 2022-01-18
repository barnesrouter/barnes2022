import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../../components/layout"
import Tabbed from "../../components/tabbed"
import SEO from "../../components/seo"
import Img from "gatsby-image"
import { Parallax } from 'react-scroll-parallax';

import logo1 from "../../../content/assets/Barnes-White-Web-sm.png";
import employmentpdf from "../../../content/assets/Barnes-Job-Application-Fillable.pdf";
import Opportunities from "../../components/current-opportunities"



const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Employment" />
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
              <h1 className="no-margin"><span>Barnes </span>Employment</h1>
            </div>        
          </Parallax>

      </div>

      <main className="over-banner inside-lg">
        <div className="inside-content">
            <p className="margin-top-0">Barnes employs individuals in a wide range of positions and skill levels. We employ professional landscape designers to full-time mechanics, experienced landscape foremen, CDL drivers, equipment operators, hardscaping technicians, retail sales, tree care specialists, to office and accounting and more. We are always looking for full and part time team players with a great work ethic. So, if you think you qualify, please don't be shy about sending us your resume!</p>
            <p>We offer a fun and challenging work environment as well as competitive wages and benefits. If you are interested in working for Barnes Nursery Inc. Barnes is an 'Equal Opportunity Employer'.</p>
            
            <div className="text-center"><h3>To apply for a position</h3> <h4 className="margin-top-0"><Link to="/about-us/employment-application">Fill out our online application</Link></h4><h4 className="margin-top-0"><a href={employmentpdf}>or download PDF application</a></h4>	<p className="margin-top-0">We invite you to send your resume to Barnes Nursery, 3511 West Cleveland Rd. Huron, Ohio 44839.</p></div>

            <Opportunities />
            
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
