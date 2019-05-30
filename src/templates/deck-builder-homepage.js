import React from "react";
import { graphql } from "gatsby";

export const DeckBuilderHomepageTemplate = () => (
        <React.Fragment>
            <span> HOLLLLLYYYYY SHIIIIITTTTT </span>
        </React.Fragment>>
);

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
        mardownRemark(id: { eq: $id }){
            html
            frontmatter {
                title
            }
        }
        ...LayoutFragment
    }
`;
