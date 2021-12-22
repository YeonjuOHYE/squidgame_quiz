import { useState } from "react";
import { STATUS } from "../components/Status";

const CARD_LIST = [
  {
    id: 0,
    path: "https://aloeimages.s3.ap-northeast-2.amazonaws.com/squidquiz/1.png",
    answer: "101",
    status: "none",
  },
  {
    id: 1,
    path: "https://aloeimages.s3.ap-northeast-2.amazonaws.com/squidquiz/2.png",
    answer: "199",
    status: "none",
  },
  {
    id: 2,
    path: "https://aloeimages.s3.ap-northeast-2.amazonaws.com/squidquiz/3.png",
    answer: "67",
    status: "none",
  },
  {
    id: 3,
    path: "https://aloeimages.s3.ap-northeast-2.amazonaws.com/squidquiz/4.png",
    answer: "212",
    status: "none",
  },
];

export const getCardInfoById = (cardList, id) =>
  cardList.find((obj) => obj.id === id);

const useCardList = () => {
  const [cardList, setCardList] = useState(
    Array.from(Array(CARD_LIST.length), (val, index) => ({
      ...getCardInfoById(CARD_LIST, index),
      status: STATUS.NONE,
    }))
  );

  const updateCardStatus = (id, status) => {
    setCardList(
      cardList.map((card) => {
        if (id === card.id) {
          return { ...card, status };
        } else {
          return card;
        }
      })
    );
  };

  const checkAnswer = (id, answer) => {
    return getCardInfoById(CARD_LIST, id)?.answer === answer;
  };

  return [cardList, setCardList, updateCardStatus, checkAnswer];
};

export default useCardList;
