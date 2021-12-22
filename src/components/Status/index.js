import React, { useLayoutEffect } from "react";
import StatusSVG from "./Status";

export const STATUS = {
  NONE: "none",
  WRONG: "wrong",
  CORRECT: "correct",
  ING: "ing",
};

const getStatusId = (cardId) => {
  return `card_${cardId}`;
};

const endAnimation = (cardId, animationName) => {
  const animationElems = document
    .getElementById(getStatusId(cardId))
    .getElementsByClassName(animationName);
  for (let i = 0; i < animationElems.length; i++) {
    animationElems.item(i).endElement();
  }
};

const beginAnimation = (cardId, animationName) => {
  const animationElems = document
    .getElementById(getStatusId(cardId))
    .getElementsByClassName(animationName);
  for (let i = 0; i < animationElems.length; i++) {
    animationElems.item(i).beginElement();
  }
};

const Status = ({ status, style, cardId }) => {
  useLayoutEffect(() => {
    if (status === STATUS.WRONG) {
      endAnimation(cardId, "to_ing_animation");
      beginAnimation(cardId, "to_wrong_animation");
    } else if (status === STATUS.ING) {
      beginAnimation(cardId, "to_ing_animation");
    } else if (status === STATUS.CORRECT) {
      beginAnimation(cardId, "to_correct_animation");
    }
  }, [cardId, status]);

  return (
    <div
      class="card"
      id={`card_${cardId}`}
      style={{ ...style, display: "block", position: "relative" }}
    >
      <StatusSVG />
    </div>
  );
};

export default Status;
