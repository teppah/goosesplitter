import { Dispatch, SetStateAction, useCallback } from "react";
import { useDropzone } from "react-dropzone";

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
    <div>
      <div {...getRootProps()} className="dropzone">
        <input {...getInputProps()}></input>
        {isDragActive ? (
          <p>Drop the file here</p>
        ) : (
          <div>
            <p>Drag n drop here!</p>
            <button type="button" onClick={open}>
              Open
            </button>
          </div>
        )}
      </div>
      <style jsx>{`
        h1 {
          @apply font-serif;
        }
        .dropzone {
          @apply p-4;
          @apply border-solid border-4 border-red-400;
        }
        button {
          @apply border-blue-400 border-2 rounded px-2 py-1;
        }
      `}</style>
    </div>
  );
};

export default PDFZone;
