import Head from "next/head";
import PDFZone from "components/PDFZone";
import dynamic from "next/dynamic";
import { useState } from "react";
import FormatInput from "components/FormatInput";
const Viewer = dynamic(() => import("components/Viewer"), { ssr: false });

const Home = () => {
  const [pdfData, setPdfData] = useState<Uint8Array>(null);
  return (
    <div>
      <Head>
        <title>GooseSplitter</title>
        <link rel="icon" href="/goose.png" />
      </Head>
      <main>
        <h1 className="title">GooseSplitter</h1>
        <p>
          A tool to conveniently split scanned PDFs into individual questions
          for Crowdmark Submission
        </p>
        <section className="content">
          <PDFZone data={pdfData} setData={setPdfData} />
          <FormatInput />
          <Viewer data={pdfData} setData={setPdfData} />
        </section>
      </main>

      <style jsx>{`
        main {
          @apply flex flex-col items-center;
        }
        .content {
          @apply mt-8;
          @apply grid;
          grid-gap: 1rem;
          grid-template-columns: auto 15rem auto;
        }
        .title {
          @apply font-mono text-4xl;
        }
      `}</style>
    </div>
  );
};

export default Home;
