import React, { useLayoutEffect, useRef } from "react";
//import {ReactComponent as RejectSVG} from "./reject.svg";
import RejectSVG from "./reject.svg";

const RejectButton = ({ handleClick }) => {
  const isOnAnimation = useRef();

  useLayoutEffect(() => {
    const confirmElem = document.getElementById("reject_point");
    const confirmAnimation = document.getElementById(
      "reject_circleSpinAnimation"
    );
    const moveAnimation = document.getElementById("reject_arrowMoveAnimation");

    confirmElem.addEventListener("mouseenter", () => {
      if (isOnAnimation.current) {
        return;
      }
      confirmAnimation.beginElement();
      moveAnimation.beginElement();
      isOnAnimation.current = true;
    });

    confirmElem.addEventListener("click", handleClick);

    moveAnimation.addEventListener("endEvent", () => {
      isOnAnimation.current = false;
    });

    return () => {
      confirmElem.removeEventListener("click", handleClick);
    };
  }, [handleClick]);

  return (
    <div style={{ display: "block" }}>
      <RejectSVG />
    </div>
  );
};

export default RejectButton;
