import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 24px;

  @media (min-width: 320px) {
    width: 320px;
  }
  @media (min-width: 768px) {
    padding: 0 40px;
    width: 768px;
  }
  @media (min-width: 1440px) {
    padding: 0 80px;
    width: 1440px;
  }
`;
