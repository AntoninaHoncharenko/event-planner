import PropTypes from 'prop-types';
import { ReactComponent as ArrowLeft } from '../../assets/arrow-left.svg';
import { ReactComponent as ArrowRight } from '../../assets/arrow-right.svg';
import { Wrap, Nav, ArrowBtn, NumberBtn } from './Pagination.styled';

export const Pagination = ({ page, toNextPage, toPrevPage, totalPages }) => {
  return (
    <Wrap>
      <Nav>
        <ArrowBtn
          type="button"
          onClick={toPrevPage}
          disabled={page > 1 ? false : true}
        >
          <ArrowLeft />
        </ArrowBtn>
        <NumberBtn type="button">{page}</NumberBtn>
        <ArrowBtn
          type="button"
          onClick={toNextPage}
          disabled={page === totalPages ? true : false}
        >
          <ArrowRight />
        </ArrowBtn>
      </Nav>
    </Wrap>
  );
};

Pagination.propTypes = {
  page: PropTypes.number.isRequired,
  toNextPage: PropTypes.func.isRequired,
  toPrevPage: PropTypes.func.isRequired,
  totalPages: PropTypes.number.isRequired,
};
