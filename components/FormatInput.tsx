import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import containerStyles from "styles/Container.module.css";

const FormatInput = ({
  formatString,
  setFormatString,
  isValidFormat,
  setIsValidFormat,
}: {
  formatString: string;
  setFormatString: Dispatch<SetStateAction<string>>;
  isValidFormat: boolean;
  setIsValidFormat: Dispatch<SetStateAction<boolean>>;
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const legalCharacters = /[0-9 ]+/g;
    const match = e.target.value.match(legalCharacters);
    // has extra illegal characters
    if (match && match[0] != e.target.value) {
      setIsValidFormat(false);
    } else {
      // empty string
      if (e.target.value === "") {
        setIsValidFormat(false);
      } else {
        setIsValidFormat(true);
      }
    }
    setFormatString(e.target.value);
  };
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
      {!isValidFormat && (
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
          @apply text-lg;
          @apply font-semibold;
          font-family: "Titillium Web", sans-serif;
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
