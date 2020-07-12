import React from 'react';
import marked from 'marked';

import { useText } from '../../hooks/TextProvider';

import * as S from './styles';

function Result() {
  const { text } = useText();

  return (
    <S.Container>
      <S.Result
        className="markdown-github"
        dangerouslySetInnerHTML={{ __html: marked(text) }}
      />
    </S.Container>
  );
}

export default Result;
