import * as React from "react";
import Helmet from 'react-helmet';
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { normalizedData } from "@utils";
import Layout from "@layout";
import Header from "@layout/header/layout-01";
import Footer from "@layout/footer/layout-01";
import HeroArea from "@containers/hero/layout-02";
import AboutArea from "@containers/about/layout-02";
import ParallaxArea from "@containers/parallax";
import PortfolioArea from "@containers/portfolio/layout-03";
import ClientArea from "@containers/client/layout-03";

const IndexPage = ({ data }) => {
    const content = normalizedData(data?.homePage?.content || []);

    return (
        <>
        <Helmet>
            <meta name="description" content="Ali Shan is the top Pakistani model and content creator." />
            <meta name="keywords" content="AliShan, Ali Shan, Ali shan official, Alishangay, ali shan gay, alishanofficial_, ali shan dancer, ali shan tiktoker, pakistan top tiktoker, 
            ali tiktoker, shan tiktoker, ali shan instagram, ali shan facebook, ali shan address, ali shan lahore, alishanofficial, gay, gay boy, gay model, gay model in pakistan, pakistani gay" ></meta>
            </Helmet>
        <Layout pageTitle="alishanofficial_">
            <Header
                className="rn-d-none"
                data={{
                    ...data.header,
                    ...data.navigation,
                    socials: data.site.siteMetadata.socials,
                }}
            />
           
            <main className="main-page-wrapper">
                <HeroArea data={content["hero-section"]} />
                <AboutArea data={content["about-section"]} hasSeparator />
                <ParallaxArea data={content["parallax-section"]} />
                <PortfolioArea data={content["portfolio-section"]} />
                <ClientArea data={content["client-section"]} />
            </main>
            <Footer data={{ ...data.footer }} className="section-separator" />
        </Layout>
        
        </>
        
        
    );
};

export const query = graphql`
    query IndexPageQuery {
        site {
            ...Site
        }
        header: general(section: { eq: "header-5" }) {
            ...Header01
        }
        navigation: general(section: { eq: "menu-6" }) {
            menu {
                ...Menu01
            }
        }
        footer: general(section: { eq: "footer-1" }) {
            ...Footer01
        }
        homePage(title: { eq: "model-home" }) {
            content {
                ...Content01
            }
        }
    }
`;

IndexPage.propTypes = {
    data: PropTypes.shape({
        site: PropTypes.shape({
            siteMetadata: PropTypes.shape({
                socials: PropTypes.arrayOf(PropTypes.shape({})),
                contact: PropTypes.shape({
                    phone: PropTypes.string,
                    email: PropTypes.string,
                }),
                getform_url: PropTypes.string,
            }),
        }),
        homePage: PropTypes.shape({
            content: PropTypes.arrayOf(PropTypes.shape({})),
        }),
        navigation: PropTypes.shape({}),
        header: PropTypes.shape({}),
        footer: PropTypes.shape({}),
    }),
};

export default IndexPage;
