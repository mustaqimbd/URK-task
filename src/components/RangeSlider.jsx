import React from "react";

const RangeSlider = ({ max, value }) => {
  return (
    <>
      <input
        type="range"
        id="range"
        name="range"
        min="0"
        max={`${max}`}
        value={`${value}`}
        readOnly
        style={{
          "--active-bg-color": "#88B0FC",
          "--thumb-color": "#E5E7EB",
          WebkitAppearance: "none",
          width: "100%",
          height: "5px",
          background: `linear-gradient(to right, var(--active-bg-color) 0%, var(--active-bg-color) ${
            (value / max) * 100
          }%, var(--thumb-color) ${
            (value / max) * 100
          }%, var(--thumb-color) 100%)`,
          borderRadius: "3px",
          outline: "none",
          padding: "0",
          margin: "0",
          boxShadow: "none",
          cursor: "pointer",
          position: "relative",
        }}
      />
      <style>
        {`
        input[type="range"]::-webkit-slider-thumb {
          background: white; 
          width: 20px;
          height: 20px;
          border-radius: 50%;
          cursor: pointer;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
          -webkit-appearance: none;
        }
        `}
      </style>
    </>
  );
};

export default RangeSlider;
