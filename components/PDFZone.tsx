import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

const PDFZone = () => {
  const onDrop = useCallback((files: File[]) => {
    console.log(files);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  return (
    <div>
      <h1>Drop Zone</h1>
      <div {...getRootProps()} className="dropzone">
        <input {...getInputProps()}></input>
        {isDragActive ? <p>Drop the file here</p> : <p>Drag n drop here!</p>}
      </div>
      <style jsx>{`
        h1 {
          @apply font-serif;
        }
        .dropzone,
        {
          @apply border-solid border-4 border-red-400;
        }
      `}</style>
    </div>
  );
};

export default PDFZone;
