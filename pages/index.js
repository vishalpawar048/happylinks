import Head from "next/head";
import Layout from "../components/Layout";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import HomeBanner from "../components/HomeBanner";
import Header from "../components/Header";
import Main from "../components/Main";

export default function Home() {
  return (
    <>
      {/* <Layout>
        <div>
          <p>I am a paragraph of text that has a few words in it.</p>
        </div>
      </Layout> */}
      <Layout>
        <Main></Main>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();

  return {
    props: {
      allPostsData,
    },
  };
}
