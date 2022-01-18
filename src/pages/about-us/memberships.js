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
      <SEO title="Memberships &amp; Affiliations" />
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
              <h1 className="no-margin"><span>Barnes </span>Memberships &amp; Affiliations</h1>
            </div>        
          </Parallax>

      </div>

      <main className="over-banner inside-lg">
        <div className="inside-content">
            <h3 className="border-below margin-top-0">Our Memberships</h3>
            <ul>
                <li><a href="http://www.americanhort.org">AmericanHort</a></li>
                <li><a href="http://www.landscapeprofessionals.org">National Association of Landscape Professionals</a></li>
                <li><a href="http://www.isa-arbor.com/">International Society of Arboriculture</a></li>
                <li><a href="http://www.onla.org/">Ohio Nursery and Landscape Association</a></li>
                <li><a href="http://www.compostingcouncil.org/">US Composting Council</a></li>
                <li><a href="http://www.ohiocompost.org/">Organics Recycling Association of Ohio</a></li>
                <li><a href="http://www.ieca.org/">International Erosion Control Association </a></li>
                <li><a href="http://www.ohiocompost.org/">Ohio Compost</a></li>
            </ul>
            <h3 className="border-below">Our Helpful Links</h3>
            <ul>
                <li>Ohio Line Soil Testing <a href="http://www.ohioline.com/">www.ohioline.com</a></li>
                <li>Landscape Calculator <a href="http://www.landscapecalculator.com/">www.landscapecalculator.com</a></li>
                <li>Ohio Prairie Organization <a href="http://www.ohioprairie.org/">www.OhioPrairie.org</a></li>
                <li>Ohio State University Horticulture &amp; Crop Science in Virtual Perspective <a href="http://hcs.osu.edu/">http://hcs.osu.edu</a></li>
                <li>Ohio State University PlantFacts <a href="http://plantfacts.osu.edu/">http://plantfacts.osu.edu</a></li>
                <li>Ohio State University Webgarden <a href="http://webgarden.osu.edu/">http://webgarden.osu.edu</a></li>
                <li>Butterfly Website <a href="http://www.butterflywebsite.com/">www.Butterflywebsite.com</a></li>
            </ul>		
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
