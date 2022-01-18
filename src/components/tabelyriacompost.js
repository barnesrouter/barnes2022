import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const TabElyriaCompost = () => {

    const data = useStaticQuery(graphql`
        query ElyriaCompostQuery {
            markdownRemark(fileAbsolutePath: {regex: "/elyria-compost-facility/"}) {
                html
            }
        }
    `)
    
    return (
        <div
            dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
            itemProp="articleBody"
        />
    )
}

export default TabElyriaCompost