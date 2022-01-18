//import React from "react"
import React, {useState} from 'react';

import { graphql } from "gatsby"
import Layout from "../../components/layout"
//import Tabbed from "../../components/tabbed"
import SEO from "../../components/seo"
import Img from "gatsby-image"
import { Parallax } from 'react-scroll-parallax';

//import logo1 from "../../../content/assets/Barnes-White-Web-sm.png";
//import oberlinpdf from "../../../content/assets/Oberlin-HandoutCard.pdf";

import { Modal, ModalHeader, ModalBody } from 'reactstrap';



const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Oberlin Food Waste Partnership" />
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
           {/* <img src={logo1} alt="Barnes Garden Center Logo" className="heroImage" />
            <h1 className="no-margin"><span>Barnes </span>Oberlin Food Waste Partnership</h1>*/}
          </div>
        </Parallax>

      </div>

      <main className="over-banner inside-lg oberlinn">
        
        <div className="inside-content oberlinstuff"> 
          
          <Img
            fluid={data.foodWaste1.childImageSharp.fluid}
            alt="Test"
            className="bannerImage"
          />

          <a target="_blank" rel="noreferrer" href="https://www.cityofoberlin.com/city-government/departments/sustainability/">
            <Img
              fluid={data.foodWaste2.childImageSharp.fluid}
              alt="Test"
              className="bannerImage"
              onClick={toggle}
            />
          </a>
          
          <div className="pointatme" onClick={toggle}>
            <Img
              fluid={data.foodWaste3.childImageSharp.fluid}
              alt="Test"
              className="bannerImage"
              onClick={toggle}
            />
          </div>


          <Modal isOpen={modal} toggle={toggle} >
              <ModalHeader toggle={toggle}><h3>Oberlin Signup</h3></ModalHeader>
              <ModalBody>
                  
                <div className="oberlin-subscribe">
                <iframe class="mj-w-res-iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://app.mailjet.com/widget/iframe/6D4l/KIZ" width="100%"></iframe>

                <script type="text/javascript" src="https://app.mailjet.com/statics/js/iframeResizer.min.js"></script>
                </div>

              </ModalBody>
          </Modal>

          
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
    landscapeMaterials: file(relativePath: {eq: "Barnes-Oberlin-New.jpg"}) {
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
    foodWaste1: file(relativePath: {eq: "Oberlin-WebPage-r1_01.png"}) {
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
    foodWaste2: file(relativePath: {eq: "Oberlin-WebPage-r1_02.png"}) {
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
    foodWaste3: file(relativePath: {eq: "Oberlin-WebPage-r1_03.png"}) {
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
