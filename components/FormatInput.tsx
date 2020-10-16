import { ChangeEvent, Dispatch, SetStateAction } from "react";
import containerStyles from "styles/Container.module.css";

const FormatInput = ({
  formatString,
  setFormatString,
}: {
  formatString: string;
  setFormatString: Dispatch<SetStateAction<string>>;
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setFormatString(e.target.value);
    console.log(e.target.value);
  };
  return (
    <div className={containerStyles.container}>
      <h2>Enter your desired format</h2>
      <input type="text" value={formatString} onChange={handleChange} />
      <style jsx>{`
        input {
          @apply border border-black px-1;
          @apply font-mono;
        }
      `}</style>
    </div>
  );
};
export default FormatInput;
