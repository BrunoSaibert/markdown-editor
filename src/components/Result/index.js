import React from 'react';
import marked from 'marked';

import { useText } from '../../hooks/TextProvider';

import * as S from './styles';

function Result() {
  const { text } = useText();

  return (
    <S.Container
      dangerouslySetInnerHTML={{ __html: marked(text, { sanitize: true }) }}
    />
  );
}

export default Result;
