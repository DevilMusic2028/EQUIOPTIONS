import React, { useState, useEffect, useRef } from 'react';

const Counter = ({ target, speed = 120 }) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);

  useEffect(() => {
    const updateCount = () => {
      setCount((prevCount) => {
        if (prevCount < target) {
          const increment = target / speed;
          const newCount = prevCount + increment;
          return newCount > target ? target : newCount;
        }
        return target;
      });
    };

    const timer = setInterval(updateCount, 1);

    return () => clearInterval(timer);
  }, [target, speed]);

  return (
    <div 
      ref={counterRef}
      className="counter text-4xl font-bold mt-4"
    >
      {Math.round(count)}
    </div>
  );
};

export default Counter;