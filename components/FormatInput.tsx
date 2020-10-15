const FormatInput = () => {
  return (
    <div>
      <h2>Enter your desired format</h2>
      <input type="text" />
      <p>Space-separated values for the number of page per question</p>
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
