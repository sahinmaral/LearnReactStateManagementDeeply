import { faRotate } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Loading = () => {
  return (
    <div className="loading-area">
      <FontAwesomeIcon icon={faRotate} className="loading-icon" />
      <p className="">Loading ...</p>
    </div>
  );
};

export default Loading;
