import Layout from "@/components/Layout/Layout";
import NewsPage from "@/components/NewsPage/NewsPage";
import PageHeader from "@/components/PageHeader/PageHeader";
import React from "react";

const News = () => {
  return (
    <Layout pageTitle="Noticias">
      <PageHeader pageTitle="Noticias" />
      <NewsPage />
    </Layout>
  );
};

export default News;
