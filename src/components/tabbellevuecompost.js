import React from "react"
import { StaticQuery, graphql } from "gatsby"


export default function TabBellevueCompost() {
    return (
      <StaticQuery
        query={graphql`
            query BellevueCompostQuery {
                markdownRemark(fileAbsolutePath: {regex: "/bellevue-compost-facility/"}) {
                    html
                }
            }
        `}
        render={data => (
            <div
                dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
                itemProp="articleBody"
            />
        )}
      />
    )
  }
  
  
