import { graphql, useStaticQuery } from "gatsby";
import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import logo from "../images/logo.svg";
import court from "../images/court.svg";
import game from "../images/game.mp4";

function IndexPage() {
  const { site } = useStaticQuery(graphql`
    query SiteMetaQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  return (
    <Layout hideHeader>
      <SEO
        keywords={[`flat`, `volleyball`, `flat volleyball`, `beach volleyball`]}
        title="Home"
      />

      <section className="text-center">
        <img
          alt={`${site.siteMetadata.title} logo`}
          className="block md:w-1/2 mx-auto mb-8"
          src={logo}
        />

        <h2 className="inline-block p-3 mb-4 text-2xl font-bold bg-yellow-400">
          {site.siteMetadata.description}
        </h2>

        <img
          alt="Court dimensions"
          className="block md:w-1/2 mx-auto mb-8 mt-8 "
          src={court}
        />

        <p className="leading-loose">
          Beach Volleyball rules apply, but instead of the net there’s a gap between the fields.
        </p>

        <video
          className="block md:w-1/2 mx-auto mb-8 mt-8"
          src={game}
          controls
        />
      </section>
    </Layout>
  );
}

export default IndexPage;
