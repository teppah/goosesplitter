import { Dispatch, SetStateAction, useState } from "react";
import { Document, Page } from "react-pdf";
import dynamic from "next/dynamic";
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
    <div>
      {data && (
        <Document file={{ data }} onLoadSuccess={onLoadSuccess}>
          {Array.from(new Array(numPages), (el, index) => {
            return <Page key={index + 1} pageNumber={index + 1} />;
          })}
        </Document>
      )}
    </div>
  );
};

export default Viewer;
