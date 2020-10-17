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
          @apply text-base text-center;
          @apply border-2 rounded-md border-gray-500 px-1;
          @apply bg-gray-400;
          @apply font-mono;
          @apply transition-all duration-100;
        }
        input:focus {
          @apply border-gray-400;
          @apply bg-gray-100;
        }
      `}</style>
    </div>
  );
};
export default FormatInput;
