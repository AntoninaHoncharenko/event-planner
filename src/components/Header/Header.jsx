import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateFilter } from '../../redux/filterSlice';
import { MainContainer } from '../Container/Container';
import { ReactComponent as ArrowIcon } from '../../assets/arrow.svg';
import { ReactComponent as SearchIcon } from '../../assets/search.svg';
import {
  HeaderWrap,
  Title,
  Wrap,
  LangBtn,
  InputWrap,
  Input,
  Label,
} from './Header.styled';

export const Header = () => {
  const dispatch = useDispatch();

  const handleInputChange = e => {
    dispatch(updateFilter(e.target.value));
  };

  return (
    <HeaderWrap>
      <MainContainer>
        <Wrap>
          <Link to="/">
            <Title>Event Planner</Title>
          </Link>
          <LangBtn type="button">
            UK
            <ArrowIcon />
          </LangBtn>
          <InputWrap>
            <Label htmlFor="query">
              <SearchIcon />
            </Label>
            <Input
              type="text"
              id="query"
              placeholder="Search by keywords"
              onChange={handleInputChange}
            />
          </InputWrap>
        </Wrap>
      </MainContainer>
    </HeaderWrap>
  );
};
