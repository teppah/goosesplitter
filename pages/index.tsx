import Head from "next/head";
import PDFZone from "components/PDFZone";
import { useState } from "react";
import FormatInput from "components/FormatInput";
import DownloadWidget from "components/DownloadWidget";

const Home = () => {
  const [pdfData, setPdfData] = useState<Uint8Array>(null);
  const [formatString, setFormatString] = useState<string>(null);
  return (
    <section className="layout">
      <Head>
        <title>GooseSplitter</title>
        <link rel="icon" href="/goose.png" />
      </Head>
      <header>
        <div>
          <h1 className="title">GooseSplitter</h1>
          <img src="/goose.png" alt="icon of a goose" />
        </div>
        <p>Split your PDFs for Crowdmark Submission</p>
      </header>
      <PDFZone data={pdfData} setData={setPdfData} />
      <FormatInput
        formatString={formatString}
        setFormatString={setFormatString}
      />
      <DownloadWidget formatString={formatString} pdfData={pdfData} />

      <style jsx>{`
        header {
          height: 30vh;
          @apply flex flex-col items-stretch justify-end;
        }
        header div {
          @apply flex flex-row justify-center;
        }
        header img {
          width: 35px;
          @apply border-gray-500 border-2 border-dashed rounded-full;
          @apply p-1;
        }
        .title {
          @apply font-mono text-3xl;
        }
        p {
          @apply text-center;
          @apply mb-4;
        }
        .layout {
          @apply flex flex-col items-stretch;
          @apply h-screen;
          @apply px-5;
          @apply w-full;
        }
        .content {
          @apply mt-8;
          @apply flex flex-row;

          width: 60%;
          max-width: 1500px;
        }
      `}</style>
    </section>
  );
};

export default Home;
