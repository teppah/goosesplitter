import Head from "next/head";
import PDFZone from "components/PDFZone";
import { useState } from "react";
import FormatInput from "components/FormatInput";
import DownloadWidget from "components/DownloadWidget";

const Home = () => {
  const [pdfData, setPdfData] = useState<Uint8Array>(null);
  const [formatString, setFormatString] = useState<string>(null);
  const [isValidFormat, setIsValidFormat] = useState(false);
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
      <div className="content">
        <PDFZone data={pdfData} setData={setPdfData} />
        <div>
          <FormatInput
            formatString={formatString}
            setFormatString={setFormatString}
            isValidFormat={isValidFormat}
            setIsValidFormat={setIsValidFormat}
          />
          <DownloadWidget
            formatString={formatString}
            pdfData={pdfData}
            isValidFormat={isValidFormat}
          />
        </div>
      </div>

      <style jsx>{`
        header {
          height: 30vh;
          @apply flex flex-col items-stretch justify-end;
        }
        header div {
          @apply flex flex-row justify-center items-center;
        }
        header img {
          width: 35px;
          height: 35px;
          @apply border-gray-500 border-2 border-dashed rounded-full;
          @apply p-1;
        }
        @screen lg {
          header img {
            width: 55px;
            height: 55px;
          }
        }
        .title {
          @apply text-3xl;
          @apply font-bold;
          font-family: "Titillium Web", sans-serif;
        }
        @screen lg {
          .title {
            @apply text-5xl;
          }
        }
        p {
          @apply text-center;
          @apply mb-4;
        }
        @screen lg {
          p {
            @apply text-2xl;
          }
        }
        .layout {
          @apply flex flex-col items-center;
          @apply h-screen;
          @apply px-5;
          @apply w-full;
        }
        .content {
          @apply flex flex-col items-stretch;
          @apply w-full;
          max-width: 1000px;
        }
        .content > div {
          @apply flex flex-col items-stretch;
        }
        @screen lg {
          .content > div {
            @apply grid;
            @apply gap-x-2;
            grid-template-columns: 1fr 1fr;
            min-height: 8rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Home;
