import { useState, useEffect, useCallback } from 'react';

interface TypewriterTextProps {
  phrases: readonly string[];
  typingSpeed?: number;
  erasingSpeed?: number;
  pauseDuration?: number;
  className?: string;
}

const TypewriterText = ({
  phrases,
  typingSpeed = 120,
  erasingSpeed = 70,
  pauseDuration = 2000,
  className = '',
}: TypewriterTextProps) => {
  const [displayText, setDisplayText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isErasing, setIsErasing] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const tick = useCallback(() => {
    const currentPhrase = phrases[phraseIndex];

    if (isPaused) return;

    if (!isErasing) {
      if (displayText.length < currentPhrase.length) {
        setDisplayText(currentPhrase.slice(0, displayText.length + 1));
      } else {
        setIsPaused(true);
        setTimeout(() => {
          setIsPaused(false);
          setIsErasing(true);
        }, pauseDuration);
      }
    } else {
      if (displayText.length > 0) {
        setDisplayText(displayText.slice(0, -1));
      } else {
        setIsErasing(false);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
      }
    }
  }, [displayText, phraseIndex, isErasing, isPaused, phrases, pauseDuration]);

  useEffect(() => {
    if (isPaused) return;
    const speed = isErasing ? erasingSpeed : typingSpeed;
    const timer = setTimeout(tick, speed);
    return () => clearTimeout(timer);
  }, [tick, isErasing, isPaused, typingSpeed, erasingSpeed]);

  return (
    <span className={className}>
      {displayText}
      <span className="animate-blink">|</span>
    </span>
  );
};

export default TypewriterText;
