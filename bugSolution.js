```javascript
import React, { useState, useCallback, useRef } from 'react';

const MyComponent = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  const handleClick = useCallback(() => {
    countRef.current += 1;
    setCount(countRef.current);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};

export default MyComponent;
```