import styled from 'styled-components';
import { colors } from '../../vars';
import { Link } from 'react-router-dom';

export const Main = styled.main`
  /* width: 100vw;
  height: 100vh; */
  background-image: url(src/assets/bg-mob.png);
  background-repeat: no-repeat;
  background-position: top center;
  background-size: cover;

  @media (min-width: 768px) {
    background-image: url(src/assets/bg-tablet-add.png);
  }

  @media (min-width: 1440px) {
    background-image: url(src/assets/bg-desk-det.png);
  }
`;

export const Section = styled.section`
  padding: 42px 0 136px;

  @media (min-width: 768px) {
    padding: 40px 0 308px;
  }

  @media (min-width: 1440px) {
    padding: 18px 0 298px;
  }
`;

export const Title = styled.h2`
  color: ${colors.text};
  font-size: 24px;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 24px;
`;

export const BackLink = styled(Link)`
  display: flex;
  width: 67px;
  align-items: center;
  gap: 8px;
  margin-bottom: 24px;
`;

export const BackText = styled.p`
  color: ${colors.accent};
  font-size: 14px;
  font-weight: 500;
  line-height: normal;
`;
