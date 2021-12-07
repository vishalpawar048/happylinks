import Head from "next/head";
import Layout from "./components/Layout";
import Main from "./components/Main";

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


