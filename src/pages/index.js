import React, { useEffect, useState } from "react";
import Quiz from "../components/Quiz";
import Score from "../components/Score";
import { STATUS } from "../components/Status/index.js";
import useCardList, { getCardInfoById } from "../hooks/useCardList.js";
import { RecoilRoot } from "recoil";
import "./stack.css";

function App() {
  const [idOnView, setIdOnView] = useState(0);
  const [isStackOver, setIsStackOver] = useState(false);

  const [cardList, , updateCardStatus, checkAnswer] = useCardList();
  const checkAndSetNextIdOnView = () => {
    if (idOnView + 1 >= cardList.length) {
      setIsStackOver(true);
    } else {
      setIdOnView(idOnView + 1);
    }
  };

  const onClickConfirm = (answer) => {
    if (checkAnswer(idOnView, answer)) {
      updateCardStatus(idOnView, STATUS.CORRECT);
    } else {
      updateCardStatus(idOnView, STATUS.WRONG);
    }
    checkAndSetNextIdOnView();
  };

  const onClickPass = () => {
    updateCardStatus(idOnView, STATUS.WRONG);
    checkAndSetNextIdOnView();
  };

  useEffect(() => {
    updateCardStatus(idOnView, STATUS.ING);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idOnView]);

  return (
    <RecoilRoot>
      <div
        className="appContainer"
        style={{
          position: "absolute",
          backgroundImage: `url(${getCardInfoById(cardList, idOnView).path})`,
          height: "100%",
          width: "100%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          WebkitFilter: "blur(8px)",
          zIndex: -100,
          top: 0,
          left: 0,
        }}
      />
      <div
        id="container"
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          width: "100%",
        }}
      >
        <Quiz
          effect="krisna"
          onClickConfirm={onClickConfirm}
          onClickPass={onClickPass}
          cardList={cardList}
          isStackOver={isStackOver}
        />
        <Score
          score={
            cardList?.filter(({ status }) => status === STATUS.CORRECT)?.length
          }
          cardLength={cardList?.length}
          card={cardList}
          isStackOver={isStackOver}
        />
      </div>
    </RecoilRoot>
  );
}

export default App;
