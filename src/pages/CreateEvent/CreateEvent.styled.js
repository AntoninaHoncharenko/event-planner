import styled from 'styled-components';
import { colors } from '../../helpers/vars';
import BgMob from '../../assets/bg-mob.png';
import BgTab from '../../assets/bg-tablet-add.png';
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
