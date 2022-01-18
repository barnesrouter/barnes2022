import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import Tabbed from "../../components/tabbed"
import SEO from "../../components/seo"
import Img from "gatsby-image"
import { Parallax } from 'react-scroll-parallax';

import logo1 from "../../../content/assets/Barnes-White-Web-sm.png";
import newland from "../../../content/assets/NewLNDInstructions.pdf";

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Landscape Design &amp; Build" />
      <div className="banner">
        
          <Img 
            fluid={data.landscapeDesignBuild.childImageSharp.fluid}
            alt="Test" 
            className="bannerImage"
          />
          <div className="overlay-test"></div>
          <div className="video-contain__gradient"></div>

          <Parallax className="page-overlay" y={[-10, 10]} >
            <div>
              <img src={logo1} alt="Barnes Garden Center Logo" className="heroImage" />
              <h1 className="no-margin"><span>Barnes </span>Landscape Design &amp; Build</h1>
            </div>        
          </Parallax>

      </div>

      <main className="over-banner inside-lg">
            <div className="inside-content">
              <p className="margin-top-0">A quality landscape begins with a good design. Our professional team of designers has decades of combined experience in design and installation. 
                This imaginative, creative group has provided our customers with distinctive, yet functional landscapes that address their needs and wishes. 
                Coupled with the skills of our talented artisans in carpentry and masonry, we have the ability to enhance your landscape with unique accents like custom designed paths, walls, patios, decks, lighting, and water elements.</p>
              
              <h4>Did you know that a great landscape can increase the value of your property?</h4>
              <p>Whether an extensive Master Plan or a simple On-Site Sketch, utilize our expertise to help make your dream project come to life.</p>
              <blockquote>Landscape design and installation is the mainstay of Barnes Nursery. It is what has brought us front and center in the green industry! <span>--Julie Barnes</span></blockquote>
              
              <div className="in-image section-sm">
                <Img 
                  fluid={data.landscapeDesignBuild1.childImageSharp.fluid}
                  alt="Barnes Professional Design Process" 
                  className="in-image-img"
                />
                <h3 className="in-image-text no-margin">Barnes Professional Design Process</h3>
                <div className="video-contain__gradient" />
              </div>

              <ul className="section-sm">
                <li>Schedule an appointment by calling 419-433-5525 or 1-800-421-8722. Ask for landscape sales.</li>
                <li>Meet on-site with one of our professional design staff. Share your project's goals and any preferences you have such as plant choice, planting bed or patio location, etc.. The designer will assess the site and project to determine the scope of work required.</li>
                <li>The scope of work will determine whether an on-site sketch or a master plan would be most appropriate for your project.</li>
                <li>The On-Site Sketch - An On-Site Sketch is commonly done for a smaller focused area (i.e. the front of the house or around the patio). Frequently it is a project that the homeowner is not sure how to approach and needs help arriving at an attractive and functional solution. The On-Site Sketch is usually done on the spot at the time of the visit.</li>
                <li>The Master Plan - Master Plans are more appropriate for new construction or larger landscape renovation projects. They become an outdoor site plan incorporating elements such as walkways and pedestrian circulation, patios or other entertainment areas, water features, integrate grade changes, walls, planting areas, irrigation and drainage. Specific plants are identified on the plan. Our designer integrates their creativity and knowledge to reflect the needs and wishes of the client. Master Plans are usually implemented in stages--generally not all at once. Master Plans might be considered "works in progress".</li>
              </ul>

              <div className="in-image section-sm">
                <Img 
                  fluid={data.landscapeDesignBuild2.childImageSharp.fluid}
                  alt="Barnes Professional Design Process" 
                  className="in-image-img"
                />
                <h3 className="in-image-text no-margin">Masterplan Presentation</h3>
                <div className="video-contain__gradient" />
              </div>
              <p>A meeting is scheduled to present the Master Plan to the client. The plan delineates specific plant materials, along with other elements discussed with the client. Seeing the plan on paper offers the client a new perspective on their project. During the presentation changes can be easily incorporated. Once decisions are made, quotes are developed.</p>

              <h3>Plant and Material Selection</h3>   
              <p>Our clients have the opportunity to hand tag the materials for their job from our outstanding plant inventory. Or they can have our professionals select our finest plants for them. Hardscape materials including pavers, wall stone, rock, etc. are chosen by the client to suit their personal tastes. Our designers are there to assist in making the final decisions.</p>

              <h3>Landscape Installation</h3>   
              <p>Whether your project is simple or complex, our professional crew will arrive on your site and implement your job with skill and confidence. Our very experienced teams of installers have provided our customers with distinctive, functional landscapes that provide years of beauty and enjoyment.</p>

              <h4>Barnes provides from very simple to comprehensive landscape installation services including:</h4>
              <p>
              Planting beds, Plants, Walkways, Walls (decorative and functional), Fencing, Water features/fountains, 
              Nightscaping (landscape lighting), Irrigation, Lawns, Trees, Trees, Seasonal flower planting, Rain Gardens, Bio-swales
              </p>
              
              <h3><a href={newland}>Click here for more information on your new landscaping!</a></h3>
           
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
    landscapeDesignBuild: file(relativePath: {eq: "Barnes-Landscape-Design-Build.jpg"}) {
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
    landscapeDesignBuild1: file(relativePath: {eq: "Barnes-Landscape-Design-Build-1.jpg"}) {
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
    landscapeDesignBuild2: file(relativePath: {eq: "Barnes-Landscape-Design-Build-2.jpg"}) {
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
