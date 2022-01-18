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
      <SEO title="Landscape Maintenance" />
      <div className="banner">

          <Img 
            fluid={data.landscapeMaintenance1.childImageSharp.fluid}
            alt="Test" 
            className="bannerImage"
          />
          <div className="overlay-test"></div>
          <div className="video-contain__gradient"></div>

          <Parallax className="page-overlay" y={[-10, 10]} >
            <div>
              <img src={logo1} alt="Barnes Garden Center Logo" className="heroImage" />
              <h1 className="no-margin"><span>Barnes </span>Landscape Maintenance</h1>
            </div>        
          </Parallax>

      </div>

      <main className="over-banner inside-lg">
            <div className="inside-content">

<p className="margin-top-0">No matter how well designed and easy to maintain the landscape is, there is always an irreducible minimum of pruning, fertilizing and primping to do in the yard. Helping our commercial and residential customers enhance their landscape is a vital part of Barnes services.</p>

<p>Barnes offers comprehensive estimates for any landscape maintenance work. Barnes personnel can estimate your yard work after an on-site visit with you, or on our own when you are not available. Whenever possible, it is a good idea to walk the property with your Barnes professional to discuss the work to be done in detail.</p>

<p>Seasonal clean-ups are designed to take care of planting beds (see BedCare) and overall yard maintenance, with attention to the appropriate seasonal practices. For example, in the spring, pruning, herbicide and mulching are important. In the fall, leaf removal and fertilization are appropriate.</p>
                
              
              <div className="in-image section-sm">
                <Img 
                  fluid={data.landscapeMaintenance2.childImageSharp.fluid}
                  alt="Barnes Professional Design Process" 
                  className="in-image-img"
                />
                <h3 className="in-image-text no-margin">Landscape Maintenance Services</h3>
                <div className="video-contain__gradient" />
              </div>

<h4>Bedcare</h4>
<p>Barnes Nursery Inc. provides an expert bed maintenance service that can include the following:</p>
<ul>
  <li>Selective pruning — controls the size and shape and improves plant health</li>
  <li>Defining bed lines — enhances overall appearance by proper edge cutting</li>
  <li>Weeding and weed control — removes existing weeds and adds herbicide (weed preventer)</li>
  <li>Fertilizing — provides nutrients to support healthy plant growth</li>
  <li>Mulching — provides a finished, professional appearance to the landscape. Mulch also: retains soil moisture by preventing the sun from baking soil surfaces; prevents wind from drying and eroding soil surfaces; allows water to penetrate soil reducing run off; prevents some weed seeds from germinating; Insect and disease control.</li>
</ul>

<p>Barnes manages pests when they threaten plant health. Estimates for insect and disease control are provided. For more detailed information on specific pest problems or comprehensive control programs see Insect and Disease Control.</p>

<h4>Seasonal color plantings (annuals, perennials, bulbs)</h4>
<p>Barnes designs and installs flower bed plantings, utilizing the latest selection of bulbs, perennials, and annuals throughout the growing season. Our staff can assist you in choosing the flower varieties and colors that will enhance your outdoor spaces. If your flowers just need fertilizing or clean-up, we can do that too!</p>

<p>Seasonal container plantings—whether choosing from our outstanding selection of containers or bringing in your favorite, we can plant your favorite collection or select one for you. Barnes will bring the plants to you, plant them on the spot, if that works better.</p>

<h4>Lawncare</h4>
<p>Mowing — commercial and residential lawn mowing services. We offer these services on an as-needed basis, or for season-long contracts. Our mowing services include single-family residences, condominium communities, apartment communities and office complexes. We provide bush-hogging for those unique mowing situations that require heavier equipment.</p>

<p>LawnCare Programs (Liquid and Dry) — Our lawncare programs include liquid and dry fertilization programs with weed control. Insect and disease control are only included as necessary and with client approval. We provide up to a four-step fertilizer/weed control lawn care program for our customers. But recognizing that one size does not fit all, we customize programs to fit individual needs.</p>

<p>For a more complete explanation of these services select more lawn option.</p>

<h4>Treecare</h4>
<p>Barnes offers a full line of tree services from trimming to removals, to tree planting, tree moving, fertilizing and insect and disease control.</p>

<p>For a more complete explanation of these services select more tree options.</p>

<h4>Soil Analysis</h4>
<p>When a situation call for more specific information regarding a soil’s physical make-up, its available nutrients, or other growing conditions, Barnes will sample the soil and send those samples to a certified soil testing laboratory.</p>
              
           
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
    landscapeMaintenance1: file(relativePath: {eq: "Barnes-Landscape-Design-Build-1.jpg"}) {
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
    landscapeMaintenance2: file(relativePath: {eq: "Barnes-Landscape-Maintenance-2.jpg"}) {
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
