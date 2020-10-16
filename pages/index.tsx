import Head from "next/head";
import PDFZone from "components/PDFZone";
import dynamic from "next/dynamic";
import { useState } from "react";
import FormatInput from "components/FormatInput";
import DownloadWidget from "components/DownloadWidget";
const Viewer = dynamic(() => import("components/Viewer"), { ssr: false });

const Home = () => {
  const [pdfData, setPdfData] = useState<Uint8Array>(null);
  const [formatString, setFormatString] = useState<string>(null);
  return (
    <section className="layout">
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
          <FormatInput
            formatString={formatString}
            setFormatString={setFormatString}
          />
          <DownloadWidget formatString={formatString} />
        </div>
        <Viewer data={pdfData} setData={setPdfData} />
      </section>

      <style jsx>{`
        .layout {
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
