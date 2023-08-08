import styled from 'styled-components';
import { colors } from '../../helpers/vars';
import BgMob from '../../assets/bg-mob.png';
import BgTab from '../../assets/bg-tablet.png';
import BgDesk from '../../assets/bg-desk.png';

export const Main = styled.main`
  background-image: url(${BgMob});
  background-repeat: no-repeat;
  background-size: cover;

  @media (min-width: 768px) {
    background-image: url(${BgTab});
  }

  @media (min-width: 1440px) {
    height: 1349px;
    background-image: url(${BgDesk});
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
