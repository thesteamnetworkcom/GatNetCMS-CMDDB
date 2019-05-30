import React from "react";
import { graphql } from "gatsby";

export const DeckBuilderHomepageTemplate = () => {
    return(
        <React.Fragment>
            <span> HOLLLLLYYYYY SHIIIIITTTTT </span>
        </React.Fragment>
    );
};

const DeckBuilderHomepagePage = ({ data }) => {
    const { mardownRemark: page, footerData, navbarData } = data;

    return (
        <Layout footerData={footerData} navbarData={navbarData}>
            <DeckBuilderHomepageTemplate/>
        </Layout>
    );
};

export default DeckBuilderHomepagePage;

export const dbQuery = graphql`
    query DeckBuilderHomepagePage($id: String!){
        markdownRemark(id: { eq: $id }){
            html
            frontmatter {
                title
            }
        }
        ...LayoutFragment
    }
`;
