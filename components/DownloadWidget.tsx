import containerStyles from "styles/Container.module.css";
import { PDFDocument } from "pdf-lib";
import { downloadUint8ToPdf } from "util/download-file";

const DownloadWidget = ({
  formatString,
  pdfData,
}: {
  formatString: string;
  pdfData: Uint8Array;
}) => {
  async function handleDownload(e) {
    e.preventDefault();
    const digits = formatString
      .trim()
      .split(" ")
      .map((v) => Number(v));

    const uploadedDoc = await PDFDocument.load(pdfData);
    const newDoc = await PDFDocument.create();
    const [firstPage] = await newDoc.copyPages(uploadedDoc, [0]);
    newDoc.addPage(firstPage);
    const newPdfBytes = await newDoc.save();

    downloadUint8ToPdf(newPdfBytes, "file.pdf");
  }
  return (
    <div className={containerStyles.container}>
      <h1>Your string: {formatString}</h1>
      <button type="button" onClick={handleDownload}>
        Download
      </button>
      <style jsx>{`
        button {
          @apply border-blue-400 border-2 rounded px-2 py-1;
        }
      `}</style>
    </div>
  );
};
export default DownloadWidget;
