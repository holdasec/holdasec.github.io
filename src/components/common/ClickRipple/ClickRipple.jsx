import { useEffect, useState } from 'react';
import './ClickRipple.css';

const ClickRipple = () => {
  const [ripples, setRipples] = useState([]);

  useEffect(() => {
    const handleClick = (event) => {
      const target = event.target;
      if (
        target instanceof HTMLElement &&
        target.closest('input, textarea, select, [data-no-ripple]')
      ) {
        return;
      }

      const id = `${Date.now()}-${Math.random()}`;
      setRipples((prev) => [...prev, { id, x: event.clientX, y: event.clientY }]);

      window.setTimeout(() => {
        setRipples((prev) => prev.filter((ripple) => ripple.id !== id));
      }, 900);
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <div className="click-ripple-layer" aria-hidden="true">
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="click-ripple"
          style={{ left: ripple.x, top: ripple.y }}
        >
          <span className="click-ripple-ring click-ripple-ring--primary" />
          <span className="click-ripple-ring click-ripple-ring--secondary" />
          <span className="click-ripple-core" />
        </span>
      ))}
    </div>
  );
};

export default ClickRipple;
