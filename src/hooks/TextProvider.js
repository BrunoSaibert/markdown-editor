import React, { createContext, useContext, useState, useCallback } from 'react';

const TextContext = createContext();

function TextProvider({ children }) {
  const [text, setText] = useState('# olá 123');

  const typed = useCallback(textTyped => {
    setText(textTyped);
  }, []);

  const clear = useCallback(() => {
    setText('');
  }, []);

  return (
    <TextContext.Provider value={{ text, typed, clear }}>
      {children}
    </TextContext.Provider>
  );
}

function useText() {
  const context = useContext(TextContext);

  if (!context) {
    throw new Error('useAuth must be used within a AuthProvider');
  }

  return context;
}

export { TextProvider, useText };
