import React from "react"
import { Link, graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import { Parallax } from 'react-scroll-parallax';


const Triple = ({data}) => {

    
  
  return (
        
        <div className="triple inside-xxl flex-md space-around">
            <aside className="thirty">

                <Img 
                    fluid={data.triple1.childImageSharp.fluid}
                    alt="Barnes Triple Image One"
                    className="tripleImage box-shadow"
                />

                <Parallax className="custom-class" y={[0, -20]} >
                <div className="triple-text text-center box-shadow">
                    <h3>Garden Centers</h3>
                    <p>It's the personal touches that make a garden truly unique! Barnes Garden Centers have everything to make gardens bloom with color and distinction.</p>
                    <Link className="button" to="/garden-centers">Learn More</Link>
                </div>
                </Parallax>
            </aside>
        
            <aside className="thirty">

                <Img 
                    fluid={data.triple2.childImageSharp.fluid}
                    alt="Barnes Triple Image Two"
                    className="tripleImage box-shadow"
                />
                
                <Parallax className="custom-class" y={[0, -30]} >
                <div className="triple-text text-center box-shadow">
                    <h3>Landscape Contracting</h3>
                    <p>A quality landscape begins with a good design. Our professional team of designers has decades of combined experience in 
design and installation.</p>
                  <Link className="button" to="/landscape-contracting/all-services">Learn More</Link>
              </div>
              </Parallax>
            </aside>
            <aside className="thirty">

                <Img 
                    fluid={data.triple3.childImageSharp.fluid}
                    alt="Barnes Triple Image Three"
                    className="tripleImage box-shadow"
                />
                
                <Parallax className="custom-class" y={[0, -20]} >
                <div className="triple-text text-center box-shadow">
                    <h3>Composting</h3>
                    <p>Barnes produces a variety of mulches, blended soils and soil amendments for use in landscapes, lawns and gardens.</p>
                    <Link className="button" to="/composting/landscape-materials">Learn More</Link>
                </div>
                </Parallax>
            </aside>
        </div>
        
    )
}
export default props => (
    <StaticQuery
      query={graphql`
        query {
          triple1: file(relativePath: { eq: "Barnes-Triple-1.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 996) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          triple2: file(relativePath: { eq: "Barnes-Triple-4.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 996) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          triple3: file(relativePath: { eq: "Barnes-Triple-3.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 996) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => <Triple data={data} {...props} />}
    />
  )
  
  

