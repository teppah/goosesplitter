import { Dispatch, SetStateAction, useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import clsx from "clsx";
const Viewer = dynamic(() => import("components/Viewer"), { ssr: false });

import containerStyles from "styles/Container.module.css";
import btnStyles from "styles/Button.module.css";
import dynamic from "next/dynamic";

const PDFZone = ({
  data,
  setData,
}: {
  data: Uint8Array;
  setData: Dispatch<SetStateAction<Uint8Array>>;
}) => {
  const [filename, setFilename] = useState("");
  const onDrop = useCallback(async (files: File[]) => {
    if (files.length == 0) {
      return;
    }
    const first = files[0];
    let stream = await first.arrayBuffer();
    let newArray = new Uint8Array(stream);
    setData(newArray);
    let filename = "";
    if (first.name.length > 16) {
      filename = first.name.slice(0, 13).trim() + "...";
    } else {
      filename = first.name;
    }
    setFilename(filename);
  }, []);
  const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
    onDrop,
    accept: ["application/pdf"],
    noClick: true,
    noKeyboard: true,
  });

  let zoneName = clsx({
    [`${containerStyles.container}`]: true,
    zone: true,
    over: isDragActive,
  });
  return (
    <div {...getRootProps({ className: zoneName })} className={zoneName}>
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
      <Viewer data={data} setData={setData} />
      <style jsx>{`
        .zone {
          @apply bg-gray-100;
        }
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
        button {
          @apply mb-2;
        }
      `}</style>
    </div>
  );
};

export default PDFZone;
