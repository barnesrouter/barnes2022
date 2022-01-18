import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { Parallax } from 'react-scroll-parallax';

import logo1 from "../../content/assets/Barnes-White-Web-sm.png";

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
      <SEO title="All events" />

      <div className="banner">
        
          <Img 
            fluid={data.events.childImageSharp.fluid}
            alt="Test" 
            className="bannerImage"
          />
          <div className="overlay-test"></div>
          <div className="video-contain__gradient"></div>

          <Parallax className="page-overlay" y={[-10, 10]} >
            <div>
              <img src={logo1} alt="Barnes Garden Center Logo" className="heroImage" />
              <h1 className="no-margin"><span>Barnes </span>Events</h1>
            </div>        
          </Parallax>

      </div>

      <main className="over-banner inside-lg blog-adjust">
        <div className="inside-content">
          <p style={{ padding: `40px` }}>
            
                No Events currently scheduled, please check back later.
              
          </p>
        </div>
      </main>
    </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All events" />

      <div className="banner">
        
          <Img 
            fluid={data.events.childImageSharp.fluid}
            alt="Test" 
            className="bannerImage"
          />
          <div className="overlay-test"></div>
          <div className="video-contain__gradient"></div>

          <Parallax className="page-overlay" y={[-10, 10]} >
            <div>
              <img src={logo1} alt="Barnes Garden Center Logo" className="heroImage" />
              <h1 className="no-margin"><span>Barnes </span>Events</h1>
            </div>        
          </Parallax>

      </div>

      <main className="over-banner inside-lg blog-adjust">
        <div className="inside-content">
          <ol style={{ listStyle: `none` }} className="auto-grid">
            {posts.map(post => {
              const title = post.frontmatter.title || post.fields.slug

              return (
                <li key={post.fields.slug}>
                  <article
                    className="post-list-item text-center"
                    itemScope
                    itemType="http://schema.org/Article"
                  >
                    <header>
                      <small>{post.frontmatter.edate}</small>
                      <div>
                        <h3>
                            <span itemProp="headline">{title}</span>
                        </h3>
                      </div>
                    </header>
                    <section>
                      <div
                        dangerouslySetInnerHTML={{ __html: post.html }}
                        
                      />
                    </section>
                  </article>
                </li>
              )
            })}
          </ol>
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
    events: file(relativePath: {eq: "Barnes-Events.jpg"}) {
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
    allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}, filter: {frontmatter: {publish: {eq: "YES"}}}) {
      nodes {
        excerpt
        html
        fields {
          slug
        }
        frontmatter {
          edate(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
