import Layout from "../components/Layout";
import Main from "../components/Main";
import React, { useEffect } from "react";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>bruhh.io</title>
      </Head>
      <Layout>
        <Main></Main>
      </Layout>
    </>
  );
}
