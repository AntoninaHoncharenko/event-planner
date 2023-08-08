import styled from 'styled-components';
import { colors } from '../../helpers/vars';

export const Main = styled.main`
  background-image: url(/src/assets/bg-mob.png);
  background-repeat: no-repeat;
  background-size: cover;

  @media (min-width: 768px) {
    background-image: url(/src/assets/bg-tablet.png);
  }

  @media (min-width: 1440px) {
    height: 1349px;
    background-image: url(/src/assets/bg-desk.png);
  }
`;

export const Section = styled.section`
  padding: 44px 0 42px;

  @media (min-width: 768px) {
    padding: 40px 0 122px;
  }

  @media (min-width: 1440px) {
    padding: 64px 0 77px;
  }
`;

export const Wrap = styled.div`
  @media (min-width: 1440px) {
    display: flex;
    justify-content: space-between;
    margin-bottom: 44px;
  }
`;

export const Title = styled.h2`
  color: ${colors.text};
  font-size: 32px;
  font-weight: 600;
  line-height: normal;
`;
