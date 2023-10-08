import React, { useState, useEffect } from 'react';

const Timer = () => {
  const totalSeconds = 100 * 60; // 100 minutes
  const [hours, setHours] = useState(1);
  const [minutes, setMinutes] = useState(40);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (hours === 0 && minutes === 0 && seconds === 0) {
        clearInterval(timer);
        // Timer has reached 0, handle what happens next (e.g., submit answers).
        alert('Time is up!');
      } else {
        if (minutes === 0 && seconds === 0) {
          setHours((prevHours) => prevHours - 1);
          setMinutes(59);
          setSeconds(59);
        } else if (seconds === 0) {
          setMinutes((prevMinutes) => prevMinutes - 1);
          setSeconds(59);
        } else {
          setSeconds((prevSeconds) => prevSeconds - 1);
        }
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [hours, minutes, seconds]);

  return (
    <div>
      <h1>
        Time Remaining:{' '}
        {`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds
          .toString()
          .padStart(2, '0')}`}
      </h1>
    </div>
  );
};

export default Timer;

// import React, { useState, useEffect } from 'react';

// const Timer = () => {
//   const [minutes, setMinutes] = useState(100);
//   const [seconds, setSeconds] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       if (minutes === 0 && seconds === 0) {
//         clearInterval(timer);
//         alert('Time is up!');
//       } else {
//         if (seconds === 0) {
//           setMinutes((prevMinutes) => prevMinutes - 1);
//           setSeconds(59);
//         } else {
//           setSeconds((prevSeconds) => prevSeconds - 1);
//         }
//       }
//     }, 1000);

//     return () => clearInterval(timer);
//   }, [minutes, seconds]);

//   return (
//     <div>
//       <h1>
//         Time Remaining:{' '}
//         {`${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`}
//       </h1>
//     </div>
//   );
// };

// export default Timer;
