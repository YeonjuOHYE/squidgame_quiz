import React from "react";
import { useRecoilState } from "recoil";
import { inputValueState } from "../Quiz";
import "./input.css";

const Input = () => {
  const [inputValue, setInputValue] = useRecoilState(inputValueState);
  return (
    <div className="group">
      <input
        type="text"
        required="required"
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        value={inputValue}
      />
      <span className="highlight"></span>
      <span className="bar"></span>
      <label>참가자 번호를 입력하세요</label>
    </div>
  );
};

export default Input;
