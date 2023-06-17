import BecomeVolunteerPage from "@/components/BecomeVolunteerPage/BecomeVolunteerPage";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/PageHeader/PageHeader";
import React from "react";

const BecomeVolunteer = () => {
  return (
    <Layout pageTitle="Torne-se Voluntário">
      <PageHeader pageTitle="Torne-se Voluntário" />
      <BecomeVolunteerPage />
    </Layout>
  );
};

export default BecomeVolunteer;
