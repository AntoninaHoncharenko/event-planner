import PropTypes from 'prop-types';
import { Title } from './Title.styled';

export const PageTitle = ({ children }) => {
  return <Title>{children}</Title>;
};

PageTitle.propTypes = {
  children: PropTypes.string.isRequired,
};
