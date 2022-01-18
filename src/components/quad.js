import React from "react"
import { graphql, StaticQuery } from "gatsby"
//import Img from "gatsby-image"
//import { Parallax } from 'react-scroll-parallax';

const Quad = ({data}) => {

  return (
        
        <div className="triple quad inside-xxl flex-md space-around">
            

                <div className="triple-text text-center box-shadow quad-mod">
                    <h3>Step 1 - Early Spring</h3>
                    <p><strong>Pre-emergent crabgrass control and formulated liquid fertilizer.</strong></p>
                    <p>Pre-emergent crabgrass control is applied in the early spring before crabgrass begins growing. </p>
                    <p>If you are reseeding, please request that we do not apply pre-emergent crabgrass control.  It will interfere with the germination of your grass seed.</p>
                </div>
                
                <div className="triple-text text-center box-shadow quad-mod">
                    <h3>Step 2 - Late Spring</h3>
                    <p><strong>Broadleaf weed control and formulated liquid fertilizer.</strong></p>
                    <p>Dandelions and other broadleaf weeds are managed with this round.</p>
                    <p>Our liquid fertilizer formulation provides continued nourishment to keep your lawn green. Thick, healthy lawns crowd out weeds.</p>
                </div>
              
                <div className="triple-text text-center box-shadow quad-mod">
                    <h3>Step 3 - Summer</h3>
                    <p><strong>Formulated liquid fertilizer and broadleaf weed control.</strong></p>
                    <p>This application is NOT RECOMMENDED for properties that are not irrigated (especially during a hot, dry summer). Barnes does NOT treat lawns in the summer when they are dormant due to heat and lack of irrigation. </p>
                </div>

                <div className="triple-text text-center box-shadow quad-mod">
                    <h3>Step 4 - Late Summer/Fall</h3>
                    <p><strong>Formulated liquid fertilizer and broadleaf weed control.</strong></p>
                    <p>Formulated liquid fertilizer continues to provide nourishment to lawns, especially as they recover from the stress of high heat summers. Broadleaf weed control continues to keep persistent weeds in check.</p>
                </div>
                
            
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
          triple2: file(relativePath: { eq: "Barnes-Triple-2.jpg" }) {
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
      render={data => <Quad data={data} {...props} />}
    />
  )
  
  

