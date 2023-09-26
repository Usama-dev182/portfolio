// components/Typewriter.js
import React from 'react';
import Typewriter from 'react-typewriter-effect';

const TypewriterComponent = () => {
  return (
    <Typewriter
      onInit={(typewriter) => {
        typewriter
          .typeString('Hello, World!')
          .pauseFor(1000)
          .deleteAll()
          .typeString('This is a typewriter effect in Next.js')
          .pauseFor(1000)
          .start();
      }}
    />
  );
};

export default TypewriterComponent;
