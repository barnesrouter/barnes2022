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
      <SEO title="History" />
      <div className="banner">
        
          <Img 
            fluid={data.history1.childImageSharp.fluid}
            alt="Test" 
            className="bannerImage"
          />
          <div className="overlay-test"></div>
          <div className="video-contain__gradient"></div>

          <Parallax className="page-overlay" y={[-10, 10]} >
            <div>
              <img src={logo1} alt="Barnes Garden Center Logo" className="heroImage" />
              <h1 className="no-margin"><span>Barnes </span>History</h1>
            </div>        
          </Parallax>

      </div>

      <main className="over-banner inside-lg">
        <div className="inside-content">
          <h3 className="margin-top-0 border-below">Vintage Businesses Make Everlasting Mark</h3>
          <h2 className="margin-top-0 color-green">Roses Bloom Into Horticulture Dynasty</h2>
          <Img 
            fluid={data.barnesHistory1.childImageSharp.fluid}
            alt="Barnes History" 
            className="floatright inline-img"
          />
          <p>When Harold A. Barnes and his wife, Jeanne, planted their first crop of 11,000 rose bushes in 1950, little did they realize they were sowing the seeds of a Horticulture
            dynasty that has grown to become Barnes Nursery, one of Ohio's largest diversified green industry organizations.</p>

          
          <p>Harold's father, W.C., was the city gardener for Norwalk, and his son inherited the "green thumb." Barnes purchased a 50-acre farm on Cleveland Road
            West stretching from the curve then known as Slate Cut, to the marshland bordering the lake. The moderating effects of the water helped prevent frost damage to the delicate rose buds.
          </p>
          
          <p>
            A the eastern edge of the property was an elegant, sprawling farm house that many recall as Linker's Lodge. The house served as the first office for Barnes Roses
            and home for the couple and their son, Rob.
          </p>
          <blockquote>
            My dad had the philosophy that once a person hangs out their business sign, they should join a civic organization in their community and the Chamber of Commerce.
          </blockquote>
          <p>True to his word, Barnes Roses became one of the first members of the Huron Chamber of Commerce some 59 years ago. Harold, Bob, and his wife, Sharon, have all served
            several terms as directors and presidents of the local Chamber.
          </p>
          <p>
            More than 200 rose bushes created a formal garden in front of the Cleveland Rd. shop and drew many tourists driving down busy Route 6, then the main east/west artery
            between Cleveland and Toledo. To attract locals, Barnes hosted a week-end "Rose Festival" each June from 1952 through 1965. They sold hundreds of varieties of award-winning roses.
          </p>
          <p>
            After returning from serving in WWII, Harold attended Ohio State University and became one of the school's most loyal supporters, a tradition that has continued
            through two more generations. Bob and Sharon graduated from the Ohio institution in 1969 and their children continued the tradition, with Jarret and Julie graduating
            in 1992 and 1995, respectively.
          </p>
          <Img 
            fluid={data.barnesHistory2.childImageSharp.fluid}
            alt="Barnes History Past" 
            className="floatright inline-img-2"
          />
          <p>
            At the peak of the rose business in 1962, Harold, jeanne and Bob had 150,000 bushes in their fields. As transportation routes improved in the '60s, it became
            more difficult to compete with California rose growers who had the advantage of year-round growing conditions. In a giant leap of faith, the Barnes family made the
            decision in 1966 to quit growing roses and instead began planting shade and ornamental trees.
          </p>
          <p>
            The nursery business took off in 1968. When Bob returned from OSU a year later, he rejoined "Barnes Brigade." And the rest is history.
          </p>
          <p>
            The distinctive metallic green for the company's fleet of vehicles came about in 1978, and in 1983 the company won the first of many awards for massive Horticulture
            displays at the Cleveland Home and Flower Show. In 1987 they acquired the 50-acre Rosin property doubling the size of their Cleveland Road farm. Today the company
            has about 75,000 shade and ornamental trees planted over 450 acres in Huron Township.
          </p>
          <p>
            Sharon joined the Barnes family and the business when she married Bob in 1966. In 1991 she initiated the Camp Road Compst Facility, one of the most successful
            in Ohio, and is recognized for her expertise in the field.
          </p>
          <p>
            This licensed operation recycles more than 20,000 tons of yard trimmings, food, agricultural and industrial residuals into quality soil products, diverting material from valuable
            landfill space and returning organic resources to these soils.
          </p>
          <p>
            Compost that is produced through this process is a key building block in developing high performance soils for use in a variety of horticultural applications.
          </p>
          <p>
            Over the past two years, Barnes Composting facility, has been part of Ohio's infrastructure targeted to divert food scraps from the waste stream.
            Barnes is currently accepting food residuals from grocery stores, resorts and restaurants, as well as implementing Ohio's first curbside residential food scrap
            recycling program in Huron.
          </p>
          <p>
            Today the third generation -- Jarrent and Julie Barnes Foster are integral in the operation, with Jarret specializing in overseeing daily management and behind-the-scenes
            operations in the nursery and Julie managing the Huron and Catawba Island garden centers and much of fht business elements of the company.
          </p>
          <p>
            Affiliated with, and active participants in numerous national and state professional organizations, the company has made indelible mark providing support and "sweat equity"
            to area non-profits, including this year's Bicentennial celebration, the ARTirondack chairs community art project and the Chamber's "Taste of Wine and Roses."
          </p>
          <p>
            While Harold and Jeanne have both passed away the dream they planted continues to bloom and grow.
          </p>
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
    history1: file(relativePath: {eq: "Barnes-About-Us.jpg"}) {
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
    barnesHistory1: file(relativePath: {eq: "Barnes-History-1.jpg"}) {
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
    barnesHistory2: file(relativePath: {eq: "Barnes-History-2.jpg"}) {
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
