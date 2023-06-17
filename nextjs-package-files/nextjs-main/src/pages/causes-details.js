import CausesDetailsPage from "@/components/CausesDetails/CausesDetails";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/PageHeader/PageHeader";
import React from "react";

const CausesDetails = () => {
  return (
    <Layout pageTitle="Campanha">
      <PageHeader pageTitle="Campanha" />
      <CausesDetailsPage />
    </Layout>
  );
};

export default CausesDetails;
