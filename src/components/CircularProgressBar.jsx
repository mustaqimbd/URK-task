import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const CircularProgressBar = ({ percentage, strokeWidth, trailColor, pathColor, textColor }) => {
  return (
    <div style={{ width: '100px' }}>
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        strokeWidth={strokeWidth}
        styles={buildStyles({
          textColor: textColor,
          trailColor: trailColor,
          trailWidth: 5,
          pathColor: pathColor,
          strokeLinecap: 'round',
        })}
      />
    </div>
  );
};

export default CircularProgressBar;
