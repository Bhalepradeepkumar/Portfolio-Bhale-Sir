import React, { useState, useEffect } from "react";

const Preloader = () => {
  const hello = [
    "Hello", // English
    "नमस्ते", // Hindi
    "Hola", // Spanish
    "Bonjour", // French
    "Hallo", // German
    "Ciao", // Italian
    "こんにちは", // Japanese
    "안녕하세요", // Korean
    ""
  ];

  const [visibleText, setVisibleText] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("#000000");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (index < hello.length) {
        setVisibleText(hello[index]);
        setIndex(index + 1);
      }
    }, 190);

    setTimeout(() => {
      setBackgroundColor('#FFFFFF');
    }, 3000);

    return () => clearInterval(interval);
  }, [index, hello]); // Re-run the effect when index or hello changes

  return (
    <div className={`flex w-[100vw] h-[100vh] justify-center overflow-y-hidden items-center bg-[${backgroundColor}] transition-all duration-1000`}
    
    >
      <div className="textBox text-white text-3xl">{visibleText}</div>
    </div>
  );
};

export default Preloader;
