import React, { useLayoutEffect } from "react";
import Input from "../Input";
import ConfirmButton from "../ConfirmButton";
import RejectButton from "../RejectButton";
import Status from "../Status";
import { atom, useRecoilState } from "recoil";
import CardStack from "../../common/CardStack";
import { CSSTransition } from "react-transition-group";
import "./quiz.css";

export const inputValueState = atom({
  key: "inputValue",
  default: "",
});

export const showScoreState = atom({
  key: "showScore",
  default: false,
});

const Quiz = (props) => {
  const { effect, onClickConfirm, onClickPass, cardList, isStackOver } = props;
  const [inputValue, setInputValue] = useRecoilState(inputValueState);
  const [showScore, setShowScore] = useRecoilState(showScoreState);

  const handleChageValue = (e) => {
    setInputValue(e.target.value);
  };

  useLayoutEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    CardStack.createInstance(document.getElementById("stack"));
  }, []);

  return (
    <CSSTransition
      in={!isStackOver}
      classNames="quiz"
      timeout={2000}
      onExited={() => {
        setShowScore(true);
      }}
    >
      {!showScore ? (
        <div className="stack-container" style={{ WebkitFilter: "none" }}>
          <div
            style={{
              width: "100%",
              height: "50px",
              marginBottom: "7%",
              justifyContent: "center",
              position: "relative",
              display: "flex",
              alignItems: "center",
            }}
          >
            {cardList.map((card) => {
              return (
                <Status
                  key={card.id}
                  cardId={card.id}
                  status={card.status}
                  style={{
                    width: "17px",
                    height: "17px",
                    display: "block",
                    margin: "5%",
                  }}
                />
              );
            })}
          </div>
          <ul id="stack" className={`stack stack--${effect}`}>
            {cardList.map((card, i) => (
              <li key={i} className="stack__item" key={card.name}>
                <img width="100%" height="100%" src={card.path} />
              </li>
            ))}
          </ul>
          <Input value={inputValue} handleChageValue={handleChageValue} />
          <div className="controls" style={{ marginTop: 0 }}>
            <div>
              <ConfirmButton
                handleClick={() => {
                  CardStack.getInstance().accept();
                  onClickConfirm(inputValue);
                  setInputValue("");
                }}
              />
              <RejectButton
                handleClick={() => {
                  CardStack.getInstance().reject();
                  onClickPass();
                  setInputValue("");
                }}
              />
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </CSSTransition>
  );
};

export default Quiz;
