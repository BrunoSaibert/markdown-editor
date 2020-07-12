import React from 'react';

import Header from './components/Header';
import Editor from './components/Editor';
import Result from './components/Result';

import GlobalStyle from './styles/global';

function App() {
  return (
    <>
      <Header />

      <main>
        <Editor />
        <Result />
      </main>

      <GlobalStyle />
    </>
  );
}

export default App;
