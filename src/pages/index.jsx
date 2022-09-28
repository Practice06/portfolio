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
<html lang="en" />
<meta name="google-site-verification" content="UdSoR9Phzzv0Xj01RmA4h4o1wiozhbljlUX9cxe6Hu0"/>
</Helmet>
        <Layout pageTitle="Ali Shan">
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
