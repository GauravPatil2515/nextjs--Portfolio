"use client";

import React, { useEffect, useState } from 'react';

interface TargetCursorProps {
  spinDuration?: number;
  hideDefaultCursor?: boolean;
  size?: number;
  color?: string;
}

const TargetCursor: React.FC<TargetCursorProps> = ({
  spinDuration = 2,
  hideDefaultCursor = true,
  size = 30,
  color = '#8b5cf6'
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [trail, setTrail] = useState<{ x: number; y: number }[]>([]);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      const newPosition = { x: e.clientX, y: e.clientY };
      setPosition(newPosition);
      setIsVisible(true);
      
      // Update trail
      setTrail(prevTrail => {
        const newTrail = [newPosition, ...prevTrail.slice(0, 3)]; // Keep only last 4 positions
        return newTrail;
      });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    // Add mouse move listener
    document.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    // Add listeners for cursor target elements
    const targetElements = document.querySelectorAll('.cursor-target');
    targetElements.forEach(element => {
      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);
    });

    // Hide default cursor if specified
    if (hideDefaultCursor) {
      document.body.style.cursor = 'none';
    }

    return () => {
      document.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      targetElements.forEach(element => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      });
      
      if (hideDefaultCursor) {
        document.body.style.cursor = 'auto';
      }
    };
  }, [hideDefaultCursor]);

  if (!isVisible) return null;

  return (
    <>
      {/* Trail effect */}
      {trail.map((pos, index) => (
        <div
          key={index}
          className="fixed pointer-events-none z-40"
          style={{
            left: pos.x - (size * 0.3) / 2,
            top: pos.y - (size * 0.3) / 2,
            width: size * 0.3,
            height: size * 0.3,
            opacity: (4 - index) * 0.1,
            transition: 'opacity 0.2s ease-out',
          }}
        >
          <div
            className="w-full h-full border rounded-full"
            style={{
              borderColor: color,
              opacity: 0.3,
            }}
          />
        </div>
      ))}
      
      {/* Main cursor */}
      <div
        className="fixed pointer-events-none z-50 mix-blend-difference"
        style={{
          left: position.x - size / 2,
          top: position.y - size / 2,
          width: size,
          height: size,
          transition: 'transform 0.15s ease-out, width 0.15s ease-out, height 0.15s ease-out',
          transform: `scale(${isHovering ? 1.5 : 1}) ${isClicking ? 'scale(0.8)' : ''}`,
        }}
      >
      {/* Outer ring */}
      <div
        className="absolute inset-0 border-2 rounded-full animate-spin"
        style={{
          borderColor: color,
          animationDuration: `${spinDuration}s`,
        }}
      />
      
      {/* Inner dot */}
      <div
        className="absolute top-1/2 left-1/2 w-1 h-1 rounded-full transform -translate-x-1/2 -translate-y-1/2"
        style={{
          backgroundColor: color,
        }}
      />
      
      {/* Crosshair lines */}
      <div
        className="absolute top-1/2 left-0 w-full h-px transform -translate-y-1/2 transition-opacity duration-150"
        style={{
          backgroundColor: color,
          opacity: isHovering ? 1 : 0.6,
        }}
      />
      <div
        className="absolute top-0 left-1/2 w-px h-full transform -translate-x-1/2 transition-opacity duration-150"
        style={{
          backgroundColor: color,
          opacity: isHovering ? 1 : 0.6,
        }}
      />
      </div>
    </>
  );
};

export default TargetCursor;
