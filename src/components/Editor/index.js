import React from 'react';

import { useText } from '../../hooks/TextProvider';

import * as S from './styles';

function Editor() {
  const { text, typed } = useText();

  return <S.Container onChange={e => typed(e.target.value)} value={text} />;
}

export default Editor;
