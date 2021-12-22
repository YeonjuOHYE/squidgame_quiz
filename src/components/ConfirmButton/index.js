import React, { useLayoutEffect, useRef } from "react";
//import {ReactComponent as ConfirmSVG} from "./confirm.svg";
import ConfirmSVG from "./confirm.svg";

const ConfirmButton = ({ handleClick }) => {
  const isOnAnimation = useRef();

  useLayoutEffect(() => {
    const confirmElem = document.getElementById("confirm_point");
    const confirmAnimation = document.getElementById(
      "confirm_circleSpinAnimation"
    );
    const moveAnimation = document.getElementById("confirm_arrowMoveAnimation");

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
      <ConfirmSVG />
    </div>
  );
};

export default ConfirmButton;
