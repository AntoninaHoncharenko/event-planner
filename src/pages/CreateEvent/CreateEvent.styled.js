import styled from 'styled-components';
import { colors } from '../../vars';

export const Main = styled.main`
  width: 100vw;
  height: 100vh;
  background-image: url(src/assets/bg-mob.png);
  background-repeat: no-repeat;
`;

export const Section = styled.section`
  padding: 42px 0 136px;
`;

export const Title = styled.h2`
  color: ${colors.text};
  font-size: 24px;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 24px;
`;