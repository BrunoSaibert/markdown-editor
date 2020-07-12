import React from 'react';
import marked from 'marked';

import * as S from './styles';

function Result() {
  const text = '';
  return (
    <div
      dangerouslySetInnerHTML={{ __html: marked(text, { sanitize: true }) }}
    />
  );
}

export default Result;
