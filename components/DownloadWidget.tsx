import containerStyles from "styles/Container.module.css";
const DownloadWidget = ({ formatString }: { formatString: string }) => {
  return (
    <div className={containerStyles.container}>
      <h1>Your string: {formatString}</h1>
    </div>
  );
};
export default DownloadWidget;
