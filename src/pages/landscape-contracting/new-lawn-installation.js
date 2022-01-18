import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import Tabbed from "../../components/tabbed"
import SEO from "../../components/seo"
import Img from "gatsby-image"
import { Parallax } from 'react-scroll-parallax';

import logo1 from "../../../content/assets/Barnes-White-Web-sm.png";
import newlawn from "../../../content/assets/NewLWNInstructions.pdf";

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="New Lawn Installation" />
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
                 
              <h3 className="border-below no-margin">New Lawn Installation</h3>
              <p>Barnes installs new lawns from spring through mid fall. We provide two options for installation: seeding or sodding. Of course the best lawns are properly prepared prior to any new installation. Barnes is equipped to handle all of your lawn prep needs. We recommed installing new lawns in the early fall (late August to mid October).</p>
              
              <h4>Two ways to install a new lawn:</h4>
              <p><strong>Seeding-- the preferred method of establishing a lawn</strong></p>
              <ul>
                <li>half the cost of sod</li>
                <li>many wonderful seed blends available for any type of condition</li>
                <li>grass seed can be applied by drop spreaders or hydro-seeding equipment or a combination of both</li>
              </ul>

              <p><strong>Sodding-- when there is no time to wait for that instant green carpet</strong></p>
              <ul>
                <li>twice the cost of seeding</li>
                <li>highly perishable--must be put down immediately</li>
                <li>requires 2 weeks of concentrated heavy watering after installation to assure its success</li>
              </ul>
              <p><strong>NOTE: Watering is the key!!</strong>  Whether seed or sod, once installed it is imperative you maintain moisture in the soil for optimum results.</p>
              <h3><a href={newlawn}>Click here for more information on New Lawn Installation</a></h3>
           
              <div className="in-image section-sm">
                <Img 
                  fluid={data.lawn2.childImageSharp.fluid}
                  alt="Barnes Professional Design Process" 
                  className="in-image-img"
                />
                <h3 className="in-image-text no-margin">New seed/sod planting Preparation</h3>
                <div className="video-contain__gradient" />
              </div>

              <p>The prepartion for your new lawn is the hardest part of the job. Proper grading is imparative for a long term properly drained and easy mowing lawn. New lawn installation may include any of the following:</p>
              <ul>
                <li>Round-up application --eliminates any existing weeds or grass</li>
                <li>Rough grading</li>
                <li>Addition of custom blended soils or amendments to existing soil to enhance lawn performance while decreasing its dependence on water and fertilizers</li>
                <li>Fine grading</li>
                <li>Installation of irrigation systems</li>
              </ul>

              <h3 className="border-below">New seed/sod planting Timing</h3>
              <p><strong>If you have a choice, lawn installation is best done in the fall--late August to mid-October:</strong></p>
              <ul>
                <li>fewer weeds</li>
                <li>great growing weather: sunny but cooler, warm soil temperatures, great rains</li>
              </ul>
              <p>Spring and summer lawn installations are fine, but weeds are rampant, and the heat and frequent summer droughts require constant watering while new grass plants are germinating.</p>

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
    lawn2: file(relativePath: {eq: "Barns-Lawn-Care.jpg"}) {
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
