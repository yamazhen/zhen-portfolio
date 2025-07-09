"use client";
import { useEffect, useState } from "react";

interface UseTypewriterReturn {
  displayText: string;
  showCursor: boolean;
}

interface TypewriterTextProps {
  text: string;
  className?: string;
  speed?: number;
  deleteSpeed?: number;
  delaySpeed?: number;
  loop?: boolean;
}

const useTypewriter = (
  text: string,
  speed: number = 100,
  deleteSpeed: number = 50,
  delaySpeed: number = 1500,
  loop: boolean = true,
): UseTypewriterReturn => {
  const [displayText, setDisplayText] = useState<string>("");
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [showCursor, setShowCursor] = useState<boolean>(true);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [isComplete, setIsComplete] = useState<boolean>(false);

  useEffect(() => {
    if (isComplete && !loop) return;

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (currentIndex < text.length) {
            setDisplayText((prev) => prev + text[currentIndex]);
            setCurrentIndex((prev) => prev + 1);
          } else {
            if (loop) {
              setTimeout(() => setIsDeleting(true), delaySpeed);
            } else {
              setIsComplete(true);
            }
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText((prev) => prev.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentIndex(0);
          }
        }
      },
      isDeleting ? deleteSpeed : speed,
    );

    return () => clearTimeout(timeout);
  }, [
    currentIndex,
    text,
    speed,
    deleteSpeed,
    delaySpeed,
    isDeleting,
    displayText,
    loop,
    isComplete,
  ]);

  useEffect(() => {
    if (isComplete && !loop) {
      setShowCursor(false);
      return;
    }

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, [isComplete, loop]);

  return { displayText, showCursor };
};

const TypewriterText: React.FC<TypewriterTextProps> = ({
  text,
  className,
  speed = 100,
  deleteSpeed = 50,
  delaySpeed = 1500,
  loop = true,
}) => {
  const { displayText, showCursor } = useTypewriter(
    text,
    speed,
    deleteSpeed,
    delaySpeed,
    loop,
  );

  return (
    <span className={`relative ${className}`}>
      <span className="invisible">{text}</span>

      <span className="absolute inset-0">
        {displayText}
        <span className={`${showCursor ? "opacity-100" : "opacity-0"}`}>|</span>
      </span>
    </span>
  );
};

export default TypewriterText;
