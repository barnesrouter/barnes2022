import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const TabCatawbaGarden = () => {

    const data = useStaticQuery(graphql`
        query CatawbaGardenQuery {
            markdownRemark(fileAbsolutePath: {regex: "/catawba-garden-center/"}) {
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

export default TabCatawbaGarden