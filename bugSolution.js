```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const [effectRan, setEffectRan] = useState(false);

  useEffect(() => {
    if (!effectRan) {
      console.log('Effect running only once');
      setEffectRan(true);
    }
  }, [effectRan]); // Add effectRan to dependency array

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default MyComponent;
```