import React, { useState } from 'react';

import * as S from './styles';

function Editor() {
  const [text, setText] = useState('# olá 123');

  return (
    <textarea onChange={e => setText(e.target.value)} value={text} autoFocus />
  );
}

export default Editor;
