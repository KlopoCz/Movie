import React from "react";

const SvgCircle = ({ radius, vote_average, SvgClass }) => {
  return (
    <div>
      <svg
        className={`${SvgClass}`}
        // viewBox="0 0 180 180"
        width="64"
        height="64"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          className="circle-chart__background"
          stroke="#111111"
          strokeWidth="5"
          fill="#111111"
          cx="32"
          cy="32"
          r="25"
        />
        <circle
          className="circle-chart__circle"
          stroke="#00acc1"
          strokeWidth="5"
          strokeDasharray={radius}
          strokeLinecap="round"
          fill="none"
          cx="32"
          cy="32"
          r="25"
        />
        <text
          className="circle-chart__percent"
          x="32"
          y="40"
          alignmentBaseline="central"
          textAnchor="middle"
          fontSize="22"
          fill="#ffffff"
        >
          {vote_average}
        </text>
      </svg>
    </div>
  );
};

export default SvgCircle;
