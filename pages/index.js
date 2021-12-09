import Layout from "../components/Layout";
import Main from "../components/Main";
import React, { useEffect } from "react";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>bruhh.io</title>
        <script
          type="text/javascript"
          src="https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/pannellum.js"
        ></script>
      </Head>
      <Layout>
        <Main></Main>
      </Layout>
    </>
  );
}
