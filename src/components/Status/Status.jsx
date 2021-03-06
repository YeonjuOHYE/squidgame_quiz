import React from "react";

const Status = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-5 -5 110 110">
      <path
        id="shape"
        d="M 100,50 C 100,77.6 77.6,100 50,100 22.4,100 0,77.6
                 0,50 0,22.4 22.4,0 50,0 77.6,0 100,22.4 100,50 Z;"
        stroke="#fff"
        fill="none"
        stroke-width="5"
      >
        <animate
          fill="freeze"
          repeatCount="indefinite"
          attributeName="fill"
          dur="1000ms"
          class="to_ing_animation"
          from="none"
          to="#fff"
          begin=""
        />
        <animate
          fill="freeze"
          attributeName="d"
          dur="500ms"
          repeatCount="1"
          class="to_wrong_animation"
          from="M 100,50 C 100,77.6 77.6,100 50,100 22.4,100 0,77.6
                 0,50 0,22.4 22.4,0 50,0 77.6,0 100,22.4 100,50 Z;"
          to="M 50,0 C 75,50 75,50 100,100 50,100 50,100 0,100
                 12.5,75 12.5,75 25,50 37.5,25 37.5,25 50,0 Z;"
          begin=""
        />
        <animate
          fill="freeze"
          attributeName="fill"
          dur="500ms"
          repeatCount="1"
          class="to_wrong_animation"
          from="none"
          to="#ff87c6"
          begin=""
        />
        <animate
          fill="freeze"
          attributeName="stroke"
          dur="500ms"
          repeatCount="1"
          class="to_wrong_animation"
          from="none"
          to="#ff87c6"
          begin=""
        />
        <animate
          fill="freeze"
          attributeName="fill"
          dur="500ms"
          repeatCount="1"
          class="to_correct_animation"
          from="none"
          to="#ff87c6"
          begin=""
        />
        <animate
          fill="freeze"
          attributeName="stroke"
          dur="500ms"
          repeatCount="1"
          class="to_correct_animation"
          from="none"
          to="#ff87c6"
          begin=""
        />
      </path>
    </svg>
  );
};

export default Status;
