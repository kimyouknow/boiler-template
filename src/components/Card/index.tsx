import reactIconImg from '@/assets/images/React-icon.png';

import * as S from './style';

interface Iprops {
  content: string;
  msg: string;
}

function Card({ content, msg }: Iprops) {
  return (
    <S.Container>
      <h1>
        {content} {msg}
        <span>asdfasdf</span>
      </h1>
      <S.ReactIconImg src={reactIconImg} alt="react-icon" />
      <S.PauseCircle />
    </S.Container>
  );
}

export default Card;
