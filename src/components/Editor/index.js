import React, { useEffect, useRef, useState } from 'react';

import { useText } from '../../hooks/TextProvider';

import * as S from './styles';

function Editor() {
  const { text, typed, clear } = useText();
  const [copySuccess, setCopySuccess] = useState('');
  const myInput = useRef();

  useEffect(() => {
    myInput.current.value = text;
    myInput.current.focus();
  }, [myInput, text]);

  const copyToClipboard = e => {
    myInput.current.select();
    document.execCommand('copy');
    e.target.focus();

    setCopySuccess('Copied!');

    setTimeout(() => {
      setCopySuccess('');
    }, 3000);
  };

  return (
    <S.Container>
      <S.Input ref={myInput} onChange={e => typed(e.target.value)} />

      <S.ButtonGroup>
        <button type="button" onClick={clear}>
          <span role="img" aria-label="Clear">
            🗑
          </span>{' '}
          Clear
        </button>

        <button type="button" onClick={copyToClipboard}>
          <span role="img" aria-label="Copy to clipboard">
            ✨
          </span>{' '}
          Copy
        </button>

        {copySuccess && <span className="success">{copySuccess}</span>}
      </S.ButtonGroup>
    </S.Container>
  );
}

export default Editor;
