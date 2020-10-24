import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import containerStyles from "styles/Container.module.css";

const FormatInput = ({
  formatString,
  setFormatString,
}: {
  formatString: string;
  setFormatString: Dispatch<SetStateAction<string>>;
}) => {
  const [legal, setLegal] = useState(true);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const legalCharacters = /[0-9 ]+/g;
    const match = e.target.value.match(legalCharacters);
    console.log(match);
    if (match && match[0] != e.target.value) {
      setLegal(false);
    } else {
      setLegal(true);
    }
    setFormatString(e.target.value);
  };
  console.log(legal);
  return (
    <div className={containerStyles.container}>
      <h2>Enter your desired format</h2>
      <hr />
      <input
        type="text"
        value={formatString}
        onChange={handleChange}
        placeholder="# # # #"
      />
      {!legal && (
        <h3 className="error">Can only contain numbers 0-9 and spaces</h3>
      )}
      <style jsx>{`
        input {
          @apply text-base text-center;
          @apply border-2 rounded-md border-gray-400 px-1;
          @apply font-mono;
          @apply transition-all duration-100;
        }
        input:focus {
          @apply border-blue-400;
          @apply shadow-sm;
        }
        h2 {
          @apply text-xl;
        }
        hr {
          @apply w-full;
          @apply mt-1 mb-3;
        }
        .error {
          @apply text-red-600;
        }
      `}</style>
    </div>
  );
};
export default FormatInput;
