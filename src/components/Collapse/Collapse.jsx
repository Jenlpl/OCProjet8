import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useState, useRef } from "react";

export default function Collapse({title, content}) {
  const [isActive, setIsActive] = useState(false);

  const parentRef = useRef();


  const toggleCollapse = () => {
    setIsActive(!isActive);
  };

  return (
      <div className="collapse">
        <div className="h2-button">
          <h2>{title}</h2>
          <button className={isActive ? "chevron active" : "chevron"} onClick={toggleCollapse}>
            <FontAwesomeIcon icon={faChevronUp} />
          </button>
        </div>
        <div
          className="content-parent"
          ref={parentRef}
          style={
            isActive
              ? { height: parentRef.current.scrollHeight + "px" }
              : { height: "0px" }
          }
        >
            <p className="content">
              {content}
            </p>
        </div>
      </div>  
  );
}
