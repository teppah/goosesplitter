import { Dispatch, memo, SetStateAction, useState } from "react";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
import "react-pdf/dist/umd/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
const Viewer = ({
  data,
  setData,
}: {
  data: Uint8Array;
  setData: Dispatch<SetStateAction<Uint8Array>>;
}) => {
  const [numPages, setNumPages] = useState<number>(null);
  const [hidden, setHidden] = useState(true);
  const onLoadSuccess = (pdf: pdfjs.PDFDocumentProxy) => {
    setNumPages(pdf.numPages);
  };
  const handleButtonClick = (e) => {
    e.preventDefault();
    setHidden(!hidden);
  };
  return (
    <div className="pdf">
      <button type="button" onClick={handleButtonClick}>
        {hidden ? "Show" : "Hide"}
      </button>
      {!data && !hidden && (
        <div>
          <h1>Preview will show up here...</h1>
        </div>
      )}
      {data && !hidden && (
        <Document file={{ data }} onLoadSuccess={onLoadSuccess} className="doc">
          {Array.from(new Array(numPages), (el, index) => {
            return (
              <div className="page-wrapper">
                <Page key={index + 1} pageNumber={index + 1} className="page" />
              </div>
            );
          })}
        </Document>
      )}
      <style jsx>{`
        button {
          @apply border-blue-400 border-2 rounded px-2 py-1;
        }
        .doc {
        }
        .pdf {
        }
        .page-wrapper {
          @apply border-2 border-black;
        }
        .page {
        }
      `}</style>
    </div>
  );
};

const MemoViewer = memo(Viewer);

export default MemoViewer;
