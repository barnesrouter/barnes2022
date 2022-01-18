import React from "react"
import { Link, graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"


const QuadContracting = ({data}) => {

  return (

    <>
    <div className="triple triple-nomargin inside-xxl flex-md space-around">
        <aside className="thirty">

          <Img 
              fluid={data.six1.childImageSharp.fluid}
              alt="Barnes Triple Image One"
              className="tripleImage box-shadow"
          />

          <div className="triple-text text-center box-shadow">
              <h3>Landscape Design &amp; Build</h3>
              <p>A quality landscape begins with a good design. Our professional team of designers has decades of combined experience in design and installation.</p>
              <Link className="button" to="/landscape-contracting/landscape-design-build">Learn More</Link>
          </div>
            
        </aside>
    
        <aside className="thirty">

          <Img 
              fluid={data.six2.childImageSharp.fluid}
              alt="Barnes Triple Image Two"
              className="tripleImage box-shadow"
          />
          
          <div className="triple-text text-center box-shadow">
              <h3>Landscape Maintenance</h3>
              <p>No matter how well designed and easy to maintain the landscape is, there is always an irreducible minimum of pruning, fertilizing and primping to do in the yard.</p>
            <Link className="button" to="/landscape-contracting/landscape-maintenance">Learn More</Link>
          </div>
          
        </aside>
        <aside className="thirty">

          <Img 
              fluid={data.six3.childImageSharp.fluid}
              alt="Barnes Triple Image Three"
              className="tripleImage box-shadow"
          />
          
          <div className="triple-text text-center box-shadow">
              <h3>Insect &amp; Disease Control</h3>
              <p>When trees or shrubs are fighting certain insect or disease infestations, we will recommend a treatment program to get the problems under control. </p>
              <Link className="button" to="/landscape-contracting/insect-disease-control">Learn More</Link>
          </div>
            
        </aside>
    </div>

    <div className="triple triple-nomargin inside-xxl flex-md space-around">
      <aside className="thirty">

        <Img 
            fluid={data.six4.childImageSharp.fluid}
            alt="Barnes Triple Image One"
            className="tripleImage box-shadow"
        />

        <div className="triple-text text-center box-shadow">
            <h3>New Lawn Installation</h3>
            <p>Barnes installs new lawns from spring through mid fall. We provide two options for installation: seeding or sodding.</p>
            <Link className="button" to="/landscape-contracting/new-lawn-installation">Learn More</Link>
        </div>
          
      </aside>

      <aside className="thirty">

        <Img 
            fluid={data.six5.childImageSharp.fluid}
            alt="Barnes Triple Image Two"
            className="tripleImage box-shadow"
        />
        
        <div className="triple-text text-center box-shadow">
            <h3>Lawn Fertilization</h3>
            <p>For most turf weeds, a majority of the weed leaf tissue remains intact following mowing due to their prostrate (horizontal) growth. </p>
          <Link className="button" to="/landscape-contracting/lawn-fertilization">Learn More</Link>
        </div>
        
      </aside>
      <aside className="thirty">

        <Img 
            fluid={data.six6.childImageSharp.fluid}
            alt="Barnes Triple Image Three"
            className="tripleImage box-shadow"
        />
        
        <div className="triple-text text-center box-shadow">
            <h3>Tree Services</h3>
            <p>Barnes is well known for growing and planting the best trees ever!</p>
            <Link className="button" to="/landscape-contracting/tree-services">Learn More</Link>
        </div>
          
      </aside>
    </div>
    </>
  )
}
export default props => (
  <StaticQuery
    query={graphql`
      query {
        six1: file(relativePath: { eq: "Barnes-Landscape-Design-Build-sq.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        six2: file(relativePath: { eq: "Barnes-Landscape-Design-Build-1-sq.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        six3: file(relativePath: { eq: "Barnes-Insect-Spray-sq.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        six4: file(relativePath: { eq: "Barnes-Lawn-Services-sq.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        six5: file(relativePath: { eq: "Barnes-Triple-Landscape-Contracting.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        six6: file(relativePath: { eq: "Barnes-Cherry-Blossom-sq.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <QuadContracting data={data} {...props} />}
  />
)
  
  

