import { Dispatch, SetStateAction, useState } from "react";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
const Viewer = ({
  data,
  setData,
}: {
  data: Uint8Array;
  setData: Dispatch<SetStateAction<Uint8Array>>;
}) => {
  const [numPages, setNumPages] = useState<number>(null);
  const onLoadSuccess = (pdf: pdfjs.PDFDocumentProxy) => {
    setNumPages(pdf.numPages);
  };
  return (
    <div className="pdf">
      {data && (
        <Document file={{ data }} onLoadSuccess={onLoadSuccess}>
          {Array.from(new Array(numPages), (el, index) => {
            return (
              <div className="lol">
                <Page key={index + 1} pageNumber={index + 1} />
              </div>
            );
          })}
        </Document>
      )}
      <style jsx>{`
        .pdf {
        }
        .lol {
          @apply border-2 border-black;
        }
      `}</style>
    </div>
  );
};

export default Viewer;
