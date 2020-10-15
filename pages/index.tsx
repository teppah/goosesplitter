import Head from "next/head";
import PDFZone from "components/PDFZone";
import dynamic from "next/dynamic";
import { useState } from "react";
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
        <PDFZone data={pdfData} setData={setPdfData} />
        <Viewer data={pdfData} setData={setPdfData} />
      </main>

      <style jsx>{`
        main {
          @apply flex flex-col items-center;
        }
        .title {
          @apply font-mono text-4xl;
        }
      `}</style>
    </div>
  );
};

export default Home;
