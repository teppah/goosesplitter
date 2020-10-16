import Head from "next/head";
import PDFZone from "components/PDFZone";
import dynamic from "next/dynamic";
import { useState } from "react";
import FormatInput from "components/FormatInput";
const Viewer = dynamic(() => import("components/Viewer"), { ssr: false });

const Home = () => {
  const [pdfData, setPdfData] = useState<Uint8Array>(null);
  return (
    <section className="contain">
      <Head>
        <title>GooseSplitter</title>
        <link rel="icon" href="/goose.png" />
      </Head>
      <h1 className="title">GooseSplitter</h1>
      <p>
        A tool to conveniently split scanned PDFs into individual questions for
        Crowdmark Submission
      </p>
      <section className="content">
        <div className="left">
          <PDFZone data={pdfData} setData={setPdfData} />
          <FormatInput />
        </div>
        <Viewer data={pdfData} setData={setPdfData} />
      </section>

      <style jsx>{`
        .contain {
          @apply flex flex-col items-center;
          @apply h-screen;
          width: 100%;
        }
        .content {
          @apply mt-8;
          @apply flex flex-row;

          width: 60%;
          max-width: 1000px;
        }
        .content .left {
          @apply mr-3;
          @apply flex-initial;
        }
        .title {
          @apply font-mono text-4xl;
        }
      `}</style>
    </section>
  );
};

export default Home;
