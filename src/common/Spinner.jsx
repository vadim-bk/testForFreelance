import React from 'react';
import styled from 'styled-components';

import spinner from '../img/spinner.gif';

export const Spinner = () => {
  const Wrapper = styled.div`
    position: absolute;
    left: calc(50% - 50px);
    top: calc(50% - 50px);
  `;

  const Img = styled.img`
    width: 100px;
  `;
  return (
    <Wrapper>
      <Img src={spinner} />
    </Wrapper>
  );
};
