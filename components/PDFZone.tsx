import { Dispatch, SetStateAction, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import containerStyles from "styles/Container.module.css";
import btnStyles from "styles/Button.module.css";

const PDFZone = ({
  data,
  setData,
}: {
  data: Uint8Array;
  setData: Dispatch<SetStateAction<Uint8Array>>;
}) => {
  const onDrop = useCallback(async (files: File[]) => {
    const first = files[0];
    let stream = await first.arrayBuffer();
    let newArray = new Uint8Array(stream);
    setData(newArray);
  }, []);
  const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
    onDrop,
    accept: ["application/pdf"],
  });
  return (
    <div {...getRootProps()} className={containerStyles.container}>
      <input {...getInputProps()}></input>
      {isDragActive ? (
        <p>Drop the file here</p>
      ) : (
        <div>
          <p>Drag n drop here!</p>
          <button type="button" onClick={open} className={btnStyles.btn}>
            Open
          </button>
        </div>
      )}
      <style jsx>{`
        h1 {
          @apply font-serif;
        }
        .dropzone {
          @apply p-4;
        }
      `}</style>
    </div>
  );
};

export default PDFZone;
