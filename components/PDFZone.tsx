import { Dispatch, SetStateAction, useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import clsx from "clsx";

import containerStyles from "styles/Container.module.css";
import btnStyles from "styles/Button.module.css";

const PDFZone = ({
  data,
  setData,
}: {
  data: Uint8Array;
  setData: Dispatch<SetStateAction<Uint8Array>>;
}) => {
  const [filename, setFilename] = useState("");
  const onDrop = useCallback(async (files: File[]) => {
    const first = files[0];
    let stream = await first.arrayBuffer();
    let newArray = new Uint8Array(stream);
    setData(newArray);
    setFilename(first.name);
  }, []);
  const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
    onDrop,
    accept: ["application/pdf"],
  });

  let zoneName = clsx({
    [`${containerStyles.container}`]: true,
    zone: true,
    over: isDragActive,
  });
  return (
    <div {...getRootProps()} className={zoneName}>
      <input {...getInputProps()}></input>
      {isDragActive ? (
        <p>Drop the PDF here</p>
      ) : (
        <div>
          <p>Drag your PDF here</p>
        </div>
      )}
      <button type="button" onClick={open} className={btnStyles.btn}>
        {filename || "Open"}
      </button>
      <style jsx>{`
        h1 {
          @apply font-serif;
        }
        .zone > div {
          @apply mb-1;
        }
        .over {
          @apply bg-gray-400;
          @apply border-solid border-gray-500;
        }
      `}</style>
    </div>
  );
};

export default PDFZone;
