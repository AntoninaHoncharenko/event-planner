import styled from 'styled-components';
import BgMob from '../../assets/bg-mob1.png';
import BgTab from '../../assets/bg-tablet-det.png';
import BgDesk from '../../assets/bg-desk-det.png';

export const Main = styled.main`
  background-image: url(${BgMob});
  background-repeat: no-repeat;
  background-position: top center;
  background-size: cover;

  @media (min-width: 768px) {
    background-image: url(${BgTab});
  }

  @media (min-width: 1440px) {
    background-image: url(${BgDesk});
  }
`;

export const Section = styled.section`
  padding: 42px 0 136px;

  @media (min-width: 768px) {
    padding: 40px 0 263px;
  }

  @media (min-width: 1440px) {
    padding: 18px 0 307px;
  }
`;
