import React, { useContext, useEffect } from 'react';
import { useTimer } from 'react-timer-hook';
import { MyContext } from '../../MyContext';

const Timer = ({ remainingTime }) => {
  const { setResOpen } = useContext(MyContext);
  const totalSeconds = remainingTime || 3; // Default time in seconds

  const expiryTimestamp = new Date();
  expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + totalSeconds);

  // Check if the user navigated from another page to the timer page
  const isNavigatedFromAnotherPage = () => {
    const previousLocation = localStorage.getItem('previousLocation');
    const currentLocation = window.location.pathname;
    return previousLocation && previousLocation !== currentLocation;
  };

  useEffect(() => {
    const shouldRestartTimer = isNavigatedFromAnotherPage();

    // If navigated from another page, restart the timer
    if (shouldRestartTimer) {
      localStorage.removeItem('remainingTime'); // Clear remaining time
      restart(expiryTimestamp);
    }

    // Save the current location to localStorage for comparison
    localStorage.setItem('previousLocation', window.location.pathname);
  }, [remainingTime, restart]);

  const { seconds, minutes, hours, isRunning, pause, resume, restart } = useTimer({
    expiryTimestamp,
    onExpire: () => setResOpen(true),
  });

  return (
    <div>
      <p className="text-sm">
        Time Remaining:{' '}
        {`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds
          .toString()
          .padStart(2, '0')}`}
      </p>
    </div>
  );
};

export default Timer;
