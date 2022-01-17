import Layout from "../components/Layout";
import Main from "../components/Main";
import React, { useEffect } from "react";
import Head from "next/head";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <Head>
        <title>bruhh.io</title>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-V3R62JBH2D"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-V3R62JBH2D');
            `,
          }}
        />
      </Head>

      <Layout>
        <Main></Main>
      </Layout>
    </>
  );
}
