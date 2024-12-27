import React from 'react';
import { clockTheme } from './theme';
import { calculateRotation } from './utils';

interface ClockHandsProps {
  hours: number;
  minutes: number;
  seconds: number;
  milliseconds: number;
}

const ClockHands: React.FC<ClockHandsProps> = ({ hours, minutes, seconds, milliseconds }) => {
  // Calculate smooth rotations including milliseconds for fluid movement
  const secondRotation = calculateRotation(seconds, 'seconds') + (milliseconds / 1000 * 6);
  const minuteRotation = calculateRotation(minutes, 'minutes') + (seconds / 60 * 6);
  const hourRotation = calculateRotation(hours, 'hours') + (minutes / 60 * 30) + (seconds / 3600 * 30);

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      {/* Hour Hand */}
      <div 
        className={`absolute w-1.5 h-24 origin-center rounded-full ${clockTheme.hands.hour} transition-transform duration-300`}
        style={{ transform: `rotate(${hourRotation}deg) translateY(-12px)` }}
      />
      
      {/* Minute Hand */}
      <div 
        className={`absolute w-1 h-32 origin-center rounded-full ${clockTheme.hands.minute} transition-transform duration-300`}
        style={{ transform: `rotate(${minuteRotation}deg) translateY(-16px)` }}
      />
      
      {/* Second Hand */}
      <div 
        className={`absolute w-0.5 h-36 origin-center rounded-full ${clockTheme.hands.second}`}
        style={{ transform: `rotate(${secondRotation}deg) translateY(-18px)` }}
      />
      
      {/* Center Pin */}
      <div className={`absolute w-4 h-4 rounded-full -translate-x-1/2 -translate-y-1/2 ${clockTheme.hands.pin}`} />
    </div>
  );
};

export default ClockHands;