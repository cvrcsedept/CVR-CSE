import React, { useState, useEffect } from "react";

const NumberLoader = ({ number, shouldLoad }) => {
  const [displayNumber, setDisplayNumber] = useState(0);

  useEffect(() => {
    if (shouldLoad) {
      let start = 0;
      const interval = setInterval(() => {
        start += Math.ceil(number / 50);
        if (start >= number) {
          setDisplayNumber(number);
          clearInterval(interval);
        } else {
          setDisplayNumber(start);
        }
      }, 30);
    }
  }, [shouldLoad, number]);

  return <span>{displayNumber}</span>;
};

export default NumberLoader;
