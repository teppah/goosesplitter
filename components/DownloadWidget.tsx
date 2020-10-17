import containerStyles from "styles/Container.module.css";
import { PDFDocument } from "pdf-lib";
import { downloadUint8ToFile } from "util/download-file";
import sum from "lodash/sum";
import { getZipFromPdf } from "util/process-pdf";

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
    const totalPages = sum(digits);
    const uploadedDoc = await PDFDocument.load(pdfData);
    if (uploadedDoc.getPageCount() != totalPages) {
      alert(
        `wrong page count. string says ${totalPages} but pdf has ${uploadedDoc.getPageCount()}`
      );
      return;
    }

    const zipFile = await getZipFromPdf(uploadedDoc, digits);
    const zipBytes = await zipFile.generateAsync({
      type: "uint8array",
      compression: "DEFLATE",
      compressionOptions: { level: 3 },
    });
    downloadUint8ToFile(zipBytes, "files.zip", "application/zip");
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
