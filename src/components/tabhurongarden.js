import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const TabHuronGarden = () => {

    const data = useStaticQuery(graphql`
        query HuronGardenQuery {
            markdownRemark(fileAbsolutePath: {regex: "/barnes-garden-center/"}) {
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

export default TabHuronGarden