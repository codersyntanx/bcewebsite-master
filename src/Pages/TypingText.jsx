import { useEffect, useRef, useState } from "react";

/**
 * TypingText
 * @param {string} text   - The string to animate.
 * @param {number} speed  - Typing speed in ms per character.
 */
function TypingText({ text, speed = 100, ...props }) {
  const [displayed, setDisplayed] = useState("");
  const indexRef = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayed((prev) => prev + text.charAt(indexRef.current));
      indexRef.current += 1;
      if (indexRef.current >= text.length) {
        clearInterval(interval);
      }
    }, speed);

    // Cleanup if unmounted
    return () => clearInterval(interval);
  }, [text, speed]);

  return <span {...props}>{displayed}</span>;
}

export default TypingText;
