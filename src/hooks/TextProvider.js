import React, { createContext, useContext, useState, useCallback } from 'react';

const TextContext = createContext();

function TextProvider(prop) {
  const [text, setText] = useState(() => {
    const textStorage = localStorage.getItem('@Markedown:textStorage');

    if (textStorage) {
      return textStorage;
    }

    return '# Welcome';
  });

  const typed = useCallback(textTyped => {
    localStorage.setItem('@Markedown:textStorage', textTyped);
    setText(textTyped);
  }, []);

  const clear = useCallback(() => {
    localStorage.removeItem('@Markedown:textStorage');
    setText('');
  }, []);

  return (
    <TextContext.Provider value={{ text, typed, clear }}>
      {prop.children}
    </TextContext.Provider>
  );
}

function useText() {
  const context = useContext(TextContext);

  if (!context) {
    throw new Error('useText must be used within a TextProvider');
  }

  return context;
}

export { TextProvider, useText };
