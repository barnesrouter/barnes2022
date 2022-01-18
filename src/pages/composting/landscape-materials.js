import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import Tabbed from "../../components/tabbed"
import SEO from "../../components/seo"
import Img from "gatsby-image"
import { Parallax } from 'react-scroll-parallax';

import logo1 from "../../../content/assets/Barnes-White-Web-sm.png";
import retailHuron from "../../../content/assets/pdfs/Retail-2021-Bulk-Pricing-Huron.pdf";
import retailCatawba from "../../../content/assets/pdfs/Retail-2021-Bulk-Pricing-Catawba.pdf"
import compostingInbound from "../../../content/assets/pdfs/2021-INBOUND-Fees-Huron-Compost-Facility.pdf";
import compostingBellevuepdf from "../../../content/assets/pdfs/2021-Bellevue-Flyer.pdf";
import compostingElyriapdf from "../../../content/assets/pdfs/2021-Elyria-Flyer.pdf";

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Landscape Materials" />
      <div className="banner">

        <Img
          fluid={data.landscapeMaterials.childImageSharp.fluid}
          alt="Test"
          className="bannerImage"
        />
        <div className="overlay-test"></div>
        <div className="video-contain__gradient"></div>

        <Parallax className="page-overlay" y={[-10, 10]} >
          <div>
            <img src={logo1} alt="Barnes Garden Center Logo" className="heroImage" />
            <h1 className="no-margin"><span>Barnes </span>Composting</h1>
          </div>
        </Parallax>

      </div>

      <main className="over-banner inside-lg">
        <div className="inside-content">
         
          <p>Barnes produces a variety of mulches, blended soils and soil amendments for use in landscapes, lawns and gardens.</p>
          <p>Buy directly from us and save!  Material can be picked up at our facility, or we'll deliver to your location or job site anywhere in north central Ohio.</p>

          <p>Do you need help determining how much mulch or soil product you may need? <a target="_blank" rel="noreferrer" href="https://www.inchcalculator.com/mulch-calculator/">Click here for a materials calculator.</a></p>

          <div className="in-image section-sm">
            <Img
              fluid={data.landscapeMaterials1.childImageSharp.fluid}
              alt="Barnes Professional Design Process"
              className="in-image-img"
            />
            <h3 className="in-image-text no-margin">Composting / Recycling Services</h3>
            <div className="video-contain__gradient" />
          </div>
          <p>Today, Barnes Nursery operates one of the most successful regional composting facilities in Ohio. This licensed operation recycles over 20,000 tons of yard trimmings, food, agricultural and industrial residuals into quality compost, diverting material from valuable landfill space and returning organic resources to our soils. Compost that is produced through this process is a key building block in developing high performance soils for use in a variety of horticultural applications.</p>

          <h4>Materials Accepted</h4>
          <ul>
            <li>brush</li><li>tree trimmings (13" diameter or less)</li><li>grass</li><li>leaves</li><li>yard trimmings</li><li>wood chips</li><li>sod</li><li>soil</li><li>Christmas trees</li>
          </ul>
          <p>NO TREATED LUMBER ACCEPTED</p>
          <p>If yard waste is collected in plastic garbage bags, individuals delivering the material must empty the bags on site and dispose of them in the receptacles. Barnes cannot accept yard waste in plastic bags. ALL PLASTIC MUST BE REMOVED FROM THE MATERIAL AS IT IS DUMPED ON SITE! Barnes provides receptacles on site for plastic and other non-compostables.</p>

          <h4>Current Bulk Products</h4>
          <p>
            <a href={retailHuron}>Huron Retail Pricing</a><br />
            <a href={retailCatawba}>Catawba Retail Pricing</a><br />
          </p>

          <h4>Disposal Fees</h4>
          <p>
            <a href={compostingInbound}>2021 Inbound Fees</a><br />
            <a href={compostingBellevuepdf}>Bellevue Facility</a><br />
            <a href={compostingElyriapdf}>Elyria Facility</a>
          </p>

          <h4>FAQ's</h4>
          <p><strong>Q: How is Barnes managing the impact of the compost facility on the community? </strong></p>
          <p>A: We continue on our path of continuous improvement. Barnes is always seeking ways to improve our best management practices during the composting process.  During the past two years we have made a number of improvements, including the use of organic odor control agents and inoculants.  We also track weather forecasts and wind conditions when scheduling our operations to minimize impact on our neighbors.</p>

          <p><strong>Q: Does the compost facility benefit Erie County?</strong></p>
          <p>A: The compost facility has been serving the community for more than 21 years, effectively diverting organic materials from landfills and recycling them into high performing horticultural products that help remediate our soil and water resources while reducing our need for chemical fertilizers and pesticides. </p>

          <p><strong>Q: Does the compost facility operate under a license? </strong></p>
          <p>A: Yes, the facility is operated under an Ohio EPA Class 2 composting license.  We work closely with the Erie County Health Department as well as our regulators at the Ohio EPA to ensure the facility is compliant with all the rules and conditions the facility operates under.</p>

          <p><strong>Q: How does Barnes work in conjunction with the Health Department?</strong></p>
          <p>A: We provide daily reports to the Erie County Health Department which works closely with us and the Ohio EPA to ensure the facility is compliant with all the rules it operates under. Together, we listen to our neighbors and diligently look into any concerns to identify solutions as needed.</p>

          <p><strong>Q: How does weather affect the facility?</strong></p>
          <p>A: Wind and weather conditions can affect our facility.  We carefully monitor weather forecasts to attempt to schedule our operations so that they have minimal impact on our neighbors.</p>


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
    landscapeMaterials: file(relativePath: {eq: "Barnes-Mulch-Plant-Growing.jpg"}) {
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
    landscapeMaterials1: file(relativePath: {eq: "Barnes-Soil-inhand.jpg"}) {
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
