import React from 'react';

import { TextProvider } from './hooks/TextProvider';

import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Editor from './components/Editor';
import Result from './components/Result';

import GlobalStyle from './styles/global';

function App() {
  return (
    <TextProvider>
      <Header />

      <Main>
        <Editor />
        <Result />
      </Main>

      <Footer />

      <GlobalStyle />
    </TextProvider>
  );
}

export default App;
