import React from 'react';

import * as S from './styles';

function Footer() {
  return (
    <S.Container>
      <p>
        Feito com <span>♥</span> by{' '}
        <a href="https://www.github.com/BrunoSaibert" target="blank">
          Bruno Henrique Saibert
        </a>
      </p>
    </S.Container>
  );
}

export default Footer;
