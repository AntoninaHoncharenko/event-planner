import PropTypes from 'prop-types';
import { Container } from './Container.styled';

export const MainContainer = ({ children }) => {
  return <Container>{children}</Container>;
};

MainContainer.propTypes = {
  children: PropTypes.any.isRequired,
};
