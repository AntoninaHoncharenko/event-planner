import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateFilter } from '../../redux/filterSlice';
import { MainContainer } from '../Container/Container';
import { ReactComponent as SearchIcon } from '../../assets/search.svg';
import {
  HeaderWrap,
  Title,
  Wrap,
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
