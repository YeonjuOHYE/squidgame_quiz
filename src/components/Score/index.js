import React from "react";
import { CSSTransition } from "react-transition-group";
import "./score.css";
import { showScoreState } from "../Quiz";
import { useRecoilState } from "recoil";

const FONT_STYLE = { fontFamily: "Bebas Neue", fontSize: "300px" };

const Score = ({ score, cardLength }) => {
  const [showScore] = useRecoilState(showScoreState);
  return (
    <CSSTransition in={showScore} classNames="score" timeout={5000}>
      {showScore ? (
        <div>
          <span style={{ ...FONT_STYLE, color: "white" }}>{score}</span>
          <span style={{ ...FONT_STYLE, color: "white" }}>{"/"}</span>
          <span style={{ ...FONT_STYLE, color: "white" }}>{cardLength}</span>
        </div>
      ) : (
        <></>
      )}
    </CSSTransition>
  );
};

export default Score;
