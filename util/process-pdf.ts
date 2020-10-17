import JSZip from "jszip";
import { PDFDocument } from "pdf-lib";
import range from "lodash/range";

export async function getZipFromPdf(
  pdf: PDFDocument,
  pagesPerQ: number[]
): Promise<JSZip> {
  const zipFile = new JSZip();

  let count = 0;
  let index = 1;
  for (const nPages of pagesPerQ) {
    const newDoc = await PDFDocument.create();
    const pages = await newDoc.copyPages(pdf, range(count, count + nPages));
    for (const page of pages) {
      newDoc.addPage(page);
    }
    console.log(`${count}-${count + nPages}`);
    const bytes = await newDoc.save();
    zipFile.file(`${index}.pdf`, bytes);
    count += nPages;
    index++;
  }
  return zipFile;
}
