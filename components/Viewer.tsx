import { Dispatch, memo, SetStateAction, useState } from "react";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
import "react-pdf/dist/umd/Page/AnnotationLayer.css";
import btnStyles from "styles/Button.module.css";

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
      <button
        type="button"
        onClick={handleButtonClick}
        className={btnStyles.btn}
      >
        {hidden ? "Show" : "Hide"}
      </button>
      {!data && !hidden && (
        <div>
          <h1>Preview will show up here...</h1>
        </div>
      )}
      {data && !hidden && (
        <Document file={{ data }} onLoadSuccess={onLoadSuccess}>
          <div className="doc">
            {Array.from(new Array(numPages), (el, index) => {
              return (
                <div className="page-wrapper">
                  <Page
                    key={index + 1}
                    pageNumber={index + 1}
                    className="page"
                    width={300}
                    renderTextLayer={false}
                  />
                </div>
              );
            })}
          </div>
        </Document>
      )}
      <style jsx>{`
        .doc {
          @apply grid;
          grid-template-columns: repeat(auto-fit, 300px);
        }
        .pdf {
          @apply flex flex-col items-stretch;
        }
        .page-wrapper {
          @apply shadow;
          @apply mb-1;
        }
        .page {
        }
      `}</style>
    </div>
  );
};

const MemoViewer = memo(Viewer);

export default MemoViewer;
