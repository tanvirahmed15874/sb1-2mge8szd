import React from 'react';
import ClockHand from './ClockHand';
import ClockFace from './ClockFace';
import ClockHands from './ClockHands';
import { useTime } from './useTime';
import { clockTheme } from './theme';

const Clock = () => {
  const { hours, minutes, seconds, milliseconds } = useTime();

  return (
    <div className={`
      relative w-[400px] h-[400px] rounded-full 
      border-8 ${clockTheme.border} ${clockTheme.background}
      ${clockTheme.shadow}
      backdrop-blur-sm
    `}>
      <ClockFace />
      <ClockHands 
        hours={hours} 
        minutes={minutes} 
        seconds={seconds}
        milliseconds={milliseconds}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <ClockHand
          value={hours}
          count={2}
          size="text-3xl"
          radius={100}
          spacing={15}
          opacityStep={0.5}
          type="hours"
        />
        
        <ClockHand
          value={minutes}
          count={3}
          size="text-2xl"
          radius={150}
          spacing={12}
          opacityStep={0.4}
          type="minutes"
        />
        
        <ClockHand
          value={seconds}
          count={4}
          size="text-xl"
          radius={190}
          spacing={8}
          opacityStep={0.3}
          type="seconds"
        />
      </div>
    </div>
  );
};

export default Clock;