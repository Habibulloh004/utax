import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useTimer } from 'react-timer-hook';
import { MyContext } from '../../MyContext';

function Timer() {
  const { setResOpen, resOpen, open } = useContext(MyContext);
  const expiryTimestamp = new Date();
  expiryTimestamp.setHours(expiryTimestamp.getHours() + 1);
  expiryTimestamp.setMinutes(expiryTimestamp.getMinutes() + 40);
  const { seconds, minutes, hours, pause, resume } = useTimer({
    expiryTimestamp,
    onExpire: () => {
      console.warn('Timer expired');
      setResOpen(!resOpen);
    },
  });

  useEffect(() => {
    if (open) {
      pause();
    } else {
      resume();
    }
  }, [open]);


  return (
    <div>
      <p className="text-sm">
        Time Remaining: {hours}:{minutes}:{seconds.toString().padStart(2, '0')}
      </p>
    </div>
  );
}

export default Timer;
