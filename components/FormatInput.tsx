const FormatInput = () => {
  return (
    <div>
      <h2>Enter your desired format</h2>
      <input type="text" />
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
