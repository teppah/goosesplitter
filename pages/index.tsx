import Head from "next/head";

const Home = () => {
  return (
    <div>
      <Head>
        <title>GooseSplitter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="title">GooseSplitter</h1>
      </main>

      <style jsx>{`
        .title {
          @apply font-mono text-4xl;
        }
      `}</style>
    </div>
  );
};

export default Home;
