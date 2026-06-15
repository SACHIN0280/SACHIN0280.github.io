import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button'
      ) {
        setIsPointer(true);
      } else {
        setIsPointer(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      <div 
        className={`fixed top-0 left-0 w-8 h-8 border border-white/50 rounded-full pointer-events-none z-50 transition-all duration-150 ease-out transform -translate-x-1/2 -translate-y-1/2 mix-blend-difference ${isPointer ? 'scale-150 bg-white/20' : 'scale-100'}`}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
      <div 
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
    </>
  );
};

export default CustomCursor;
