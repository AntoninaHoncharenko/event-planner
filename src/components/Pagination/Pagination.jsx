import { Wrap, ArrowBtn, NumberBtn } from './Pagination.styled';
import { ReactComponent as ArrowLeft } from '../../assets/arrow-left.svg';
import { ReactComponent as ArrowRight } from '../../assets/arrow-right.svg';

export const Pagination = () => {
  return (
    <Wrap>
      <ArrowBtn type="button">
        <ArrowLeft />
      </ArrowBtn>
      <NumberBtn type="button">1</NumberBtn>
      <NumberBtn type="button">2</NumberBtn>
      <NumberBtn type="button">...</NumberBtn>
      <NumberBtn type="button">4</NumberBtn>
      <ArrowBtn type="button">
        <ArrowRight />
      </ArrowBtn>
    </Wrap>
  );
};
