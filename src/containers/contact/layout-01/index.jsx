import React from "react";
import PropTypes from "prop-types";
import SectionTitle from "@components/section-title";
import ContactInfoCard from "@components/contact-info-card";
import {
    SectionTitleType,
    HeadingType,
    TextType,
    ImageType,
    SocialType,
} from "@utils/types";

const ContactArea = ({ data, id }) => {
    return (
        <div
            className="rn-contact-area rn-section-gap section-separator"
            id={id}
        >
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        {data?.section_title && (
                            <SectionTitle
                                {...data.section_title}
                                align="center"
                            />
                        )}
                    </div>
                </div>
                <div className="row mt--50 mt_md--40 mt_sm--40 mt-contact-sm">
                    <div className="col-lg-5" align="center">
                        <ContactInfoCard
                            image={data?.images?.[0]}
                            title={data?.headings?.[0].content}
                            subtitle={data?.headings?.[1].content}
                            desc={data?.texts?.[0].content}
                            socials={data?.socials}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

ContactArea.propTypes = {
    id: PropTypes.string,
    data: PropTypes.shape({
        section_title: PropTypes.shape(SectionTitleType),
        headings: PropTypes.arrayOf(PropTypes.shape(HeadingType)),
        texts: PropTypes.arrayOf(PropTypes.shape(TextType)),
        images: PropTypes.arrayOf(PropTypes.shape(ImageType)),
        socials: PropTypes.arrayOf(PropTypes.shape(SocialType)),
        phone: PropTypes.string,
        email: PropTypes.string,
    }),
};

ContactArea.defaultProps = {
    id: "contacts",
};

export default ContactArea;
