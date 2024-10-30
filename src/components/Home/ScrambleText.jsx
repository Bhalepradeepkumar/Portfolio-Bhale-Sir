import React, { useRef, useEffect } from "react";
import "./css/animatedText.css";

// this code written by umar Farooq
// id -> umarcbs
// on code pen 
const ScrambleText = () => {
  const textRef = useRef(null);
  class TextScramble {
    constructor(el) {
      this.el = el;
      this.chars = '!<>-_\\/?][]}{}`~/\}—=+*^?#!________';
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
        const start = Math.floor(Math.random() * 30);
        const end = start + Math.floor(Math.random() * 30);
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
    'IIT Guwahati',
    '&',
    'I teach',
    'Ethical Hacking',
    'and',
    'Cyber Security'
  ];

  useEffect(() => {
    const el = textRef.current; 
    const fx = new TextScramble(el);

    let counter = 0;
    const next = () => {
      fx.setText(phrases[counter]).then(() => {
        setTimeout(next, 2000); 
      });
      counter = (counter + 1) % phrases.length;
    };

    next(); 

    return () => cancelAnimationFrame(fx.frameRequest);
  }, []); 

  return (
    <div className="text-change-container">
      <div ref={textRef} className="text-change"></div>
    </div>
  );
};

export default ScrambleText;
