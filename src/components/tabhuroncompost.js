import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const TabHuronCompost = () => {

    const data = useStaticQuery(graphql`
        query HuronCompostQuery {
            markdownRemark(fileAbsolutePath: {regex: "/huron-compost-facility/"}) {
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

export default TabHuronCompost