import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
//import { Parallax } from 'react-scroll-parallax';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';


import TabHuronGarden from './tabhurongarden';
import TabHuronCompost from './tabhuroncompost';
import TabCatawbaGarden from './tabcatawbagarden';
import TabBellevueCompost from './tabbellevuecompost';
import TabElyriaCompost from './tabelyriacompost';



import logo1 from "../../content/assets/Barnes-4C-web.png";


export default function Tabbed() {
    return (
    <StaticQuery
        query={graphql`
            query {
                huronGarden: file(relativePath: { eq: "gmap-huron-garden.png" }) {
                childImageSharp {
                    fluid(maxWidth: 570) {
                    ...GatsbyImageSharpFluid
                    }
                }
                }
                huronCompost: file(relativePath: { eq: "gmap-huron-compost.png" }) {
                childImageSharp {
                    fluid(maxWidth: 570) {
                    ...GatsbyImageSharpFluid
                    }
                }
                }
                catawbaGarden: file(relativePath: { eq: "gmap-catawba-garden.png" }) {
                childImageSharp {
                    fluid(maxWidth: 570) {
                    ...GatsbyImageSharpFluid
                    }
                }
                }
                bellevueCompost: file(relativePath: { eq: "gmap-bellevue-compost.png" }) {
                childImageSharp {
                    fluid(maxWidth: 570) {
                    ...GatsbyImageSharpFluid
                    }
                }
                }
                elyriaCompost: file(relativePath: { eq: "gmap-elyria-compost.png" }) {
                childImageSharp {
                    fluid(maxWidth: 570) {
                    ...GatsbyImageSharpFluid
                    }
                }
                }
            }
        `}
        render={data => (
            <div className="tabbed-parent inside-lg section">
                <div className="text-center">
                    <img src={logo1} alt="Barnes Location Hours" className="medium-logo" />
                    <h2>Locations and Hours</h2>
                </div>
                <div className="tabbed-container">
                    <Tabs defaultActiveKey="huron-garden" id="home-tab">
                        <Tab eventKey="huron-garden" title="Huron">
                            <div className="flex-md">
                                <aside className="fifty">
                                    <img src={logo1} alt="Barnes Huron Garden Center" className="small-logo" />
                                    <h4>Huron Garden Center</h4>

                                    <TabHuronGarden />
                                </aside>
                                <aside className="fifty">
                                <a href="https://www.google.com/maps/dir//41.4131513,+-82.6153636/">
                                <Img
                                    fluid={data.huronGarden.childImageSharp.fluid}
                                    alt='Barnes Newsletter'
                                    className="underlay-img"
                                />
                                </a>    
                                </aside>
                            </div>
                        </Tab>
                        <Tab eventKey="huron-compost" title="Huron">
                            <div className="flex-md">
                                <aside className="fifty">
                                    <img src={logo1} alt="Barnes Huron Compost Facility" className="small-logo" />
                                    <h4>Huron Compost Facility</h4>
                                    
                                    <TabHuronCompost />
                                </aside>
                                <aside className="fifty">
                                <a href="https://www.google.com/maps/dir//41.4078369,+-82.6170545/">
                                <Img
                                    fluid={data.huronCompost.childImageSharp.fluid}
                                    alt='Barnes Newsletter'
                                    className="underlay-img"
                                />    
                                </a>
                                </aside>
                            </div>
                        </Tab>
                        <Tab eventKey="catawba" title="Catawba">
                            <div className="flex-md">
                                <aside className="fifty">
                                    <img src={logo1} alt="Barnes Catawba Garden Center" className="small-logo" />
                                    <h4>Catawba Garden Center</h4>
                                    
                                    <TabCatawbaGarden />
                                </aside>
                                <aside className="fifty">
                                <a href="https://www.google.com/maps/dir//41.5425266,+-82.8481901/">
                                <Img
                                    fluid={data.catawbaGarden.childImageSharp.fluid}
                                    alt='Barnes Newsletter'
                                    className="underlay-img"
                                />
                                </a>    
                                </aside>
                            </div>
                        </Tab>
                        <Tab eventKey="bellevue" title="Bellevue">
                            <div className="flex-md">
                                <aside className="fifty">
                                    <img src={logo1} alt="Barnes Bellevue Compost Facility" className="small-logo" />
                                    <h4>Bellevue Compost Facility</h4>
                                    <TabBellevueCompost />
                                </aside>
                                <aside className="fifty">
                                <a href="https://www.google.com/maps/dir//41.2909761,+-82.8247675/">
                                <Img
                                    fluid={data.bellevueCompost.childImageSharp.fluid}
                                    alt='Barnes Newsletter'
                                    className="underlay-img"
                                />
                                </a>    
                                </aside>
                            </div>
                        </Tab>
                        <Tab eventKey="elyria" title="Elyria">
                            <div className="flex-md">
                                <aside className="fifty">
                                    <img src={logo1} alt="Barnes Elyria Compost Facility" className="small-logo" />
                                    <h4>Elyria Compost Facility</h4>
                                    <TabElyriaCompost />

                                </aside>
                                <aside className="fifty">
                                <a href="https://www.google.com/maps/dir//41.3700285,+-82.1131704/">
                                <Img
                                    fluid={data.elyriaCompost.childImageSharp.fluid}
                                    alt='Barnes Newsletter'
                                    className="underlay-img"
                                />
                                </a>    
                                </aside>
                            </div>
                        </Tab>
                    </Tabs>
                </div>
            </div>
        )}
    />
    )

}

