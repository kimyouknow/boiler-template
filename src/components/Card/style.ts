import styled from 'styled-components';

import pauseCircleIcon from '@/assets/icons/pauseCircle.svg';

export const Container = styled.div`
  width: 24px;
  height: 24px;
  h1 {
    font-family: 'NanumMyeongjo';
    background-color: tomato;
  }
`;

export const ReactIconImg = styled.img`
  width: 50px;
  height: 50px;
`;

export const PauseCircle = styled(pauseCircleIcon)`
  width: 24px;
  height: 24px;
`;
