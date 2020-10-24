import { Dispatch, memo, SetStateAction, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/umd/Page/AnnotationLayer.css";
import btnStyles from "styles/Button.module.css";
import documentStyles from "styles/Document.module.css";
import clsx from "clsx";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
const Viewer = ({
  data,
  setData,
}: {
  data: Uint8Array;
  setData: Dispatch<SetStateAction<Uint8Array>>;
}) => {
  const [numPages, setNumPages] = useState<number>(null);
  const [hidden, setHidden] = useState(false);
  const onLoadSuccess = (pdf: pdfjs.PDFDocumentProxy) => {
    setNumPages(pdf.numPages);
  };
  const handleButtonClick = (e) => {
    e.preventDefault();
    setHidden(!hidden);
  };
  const containerName = clsx("pdf");
  return (
    <div className={containerName}>
      {/* <button
        type="button"
        onClick={handleButtonClick}
        className={btnStyles.btn}
      >
        {hidden ? "Show Preview" : "Hide Preview"}
      </button> */}
      {!data && !hidden && (
        <div>
          <h1>Document preview will show up here...</h1>
        </div>
      )}
      {data && !hidden && (
        <Document
          file={{ data }}
          onLoadSuccess={onLoadSuccess}
          className={documentStyles.document}
        >
          {Array.from(new Array(numPages), (el, index) => {
            return (
              <Page
                key={index + 1}
                pageNumber={index + 1}
                width={200}
                renderTextLayer={false}
                className={documentStyles.page}
              />
            );
          })}
        </Document>
      )}
      <style jsx>{`
        .pdf {
          @apply flex flex-col items-center;
          @apply px-0;
          @apply w-full;
        }
      `}</style>
    </div>
  );
};

const MemoViewer = memo(Viewer);

export default MemoViewer;
