import React, { useRef, useEffect } from "react";
import "./css/animatedText.css";

const ScrambleText = () => {
  const textRef = useRef(null); // React ref to access the DOM element

  // TextScramble class (no changes required)
  class TextScramble {
    constructor(el) {
      this.el = el;
      this.chars = '!<>-_\\/[]{}—=+*^?#________';
      this.update = this.update.bind(this);
    }

    setText(newText) {
      const oldText = this.el.innerText;
      const length = Math.max(oldText.length, newText.length);
      const promise = new Promise((resolve) => (this.resolve = resolve));
      this.queue = [];
      for (let i = 0; i < length; i++) {
        const from = oldText[i] || '';
        const to = newText[i] || '';
        const start = Math.floor(Math.random() * 40);
        const end = start + Math.floor(Math.random() * 40);
        this.queue.push({ from, to, start, end });
      }
      cancelAnimationFrame(this.frameRequest);
      this.frame = 0;
      this.update();
      return promise;
    }

    update() {
      let output = '';
      let complete = 0;
      for (let i = 0, n = this.queue.length; i < n; i++) {
        let { from, to, start, end, char } = this.queue[i];
        if (this.frame >= end) {
          complete++;
          output += to;
        } else if (this.frame >= start) {
          if (!char || Math.random() < 0.28) {
            char = this.randomChar();
            this.queue[i].char = char;
          }
          output += `<span class="dud">${char}</span>`;
        } else {
          output += from;
        }
      }
      this.el.innerHTML = output;
      if (complete === this.queue.length) {
        this.resolve();
      } else {
        this.frameRequest = requestAnimationFrame(this.update);
        this.frame++;
      }
    }

    randomChar() {
      return this.chars[Math.floor(Math.random() * this.chars.length)];
    }
  }

  // List of phrases
  const phrases = [
    'I did PhD',
    'from',
    'Indian Institue of Technology Guwahati (IITG) ',
    '&',
    'I teaches',
    'Ethical Hacking',
    'and ',
    'Cyber Security'
  ];

  // Effect to apply the scrambling effect when the component mounts
  useEffect(() => {
    const el = textRef.current; // Access the DOM element via ref
    const fx = new TextScramble(el);

    let counter = 0;
    const next = () => {
      fx.setText(phrases[counter]).then(() => {
        setTimeout(next, 2000); // Change text every 2 seconds
      });
      counter = (counter + 1) % phrases.length;
    };

    next(); // Start the scramble effect

    return () => cancelAnimationFrame(fx.frameRequest); // Cleanup on component unmount
  }, []); // Empty dependency array means this runs once on mount

  return (
    <div className="text-change-container">
      <div ref={textRef} className="text-change"></div>
    </div>
  );
};

export default ScrambleText;
