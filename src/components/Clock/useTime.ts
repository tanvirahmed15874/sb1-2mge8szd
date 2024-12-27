import { useState, useEffect } from 'react';

export const useTime = () => {
  const [time, setTime] = useState(() => new Date());

  useEffect(() => {
    // Update time every 100ms for smooth second hand movement
    const timer = setInterval(() => {
      setTime(new Date());
    }, 100);

    // Sync with system clock at the start of each second
    const now = new Date();
    const delay = 1000 - now.getMilliseconds();
    const syncTimer = setTimeout(() => {
      setTime(new Date());
      // Start the regular interval after sync
      const regularTimer = setInterval(() => {
        setTime(new Date());
      }, 1000);
      return () => clearInterval(regularTimer);
    }, delay);

    return () => {
      clearInterval(timer);
      clearTimeout(syncTimer);
    };
  }, []);

  return {
    hours: time.getHours() % 12,
    minutes: time.getMinutes(),
    seconds: time.getSeconds(),
    milliseconds: time.getMilliseconds()
  };
};