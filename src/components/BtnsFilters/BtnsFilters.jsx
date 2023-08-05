import { useState } from 'react';
import { useMedia } from 'react-use';
import PropTypes from 'prop-types';
import { ReactComponent as Filter1 } from '../../assets/filter1.svg';
import { ReactComponent as Filter2 } from '../../assets/filter2.svg';
import { ReactComponent as Plus } from '../../assets/plus.svg';
import { ReactComponent as ArrowUp } from '../../assets/arrow-up.svg';
import {
  Wrap,
  BtnWrap,
  FilterBtn,
  SortBtn,
  FilterButtonText,
  PlusBtn,
  PlusBtnText,
  CategoryFilter,
  FilterList,
  CategoryTitleWrap,
  FilterTitleWrap,
  CategoryTitle,
  CategoryItem,
  FilterItem,
} from './BtnsFilters.styled';
import { categories } from '../../data';

export const BtnsFilters = ({
  filterByName,
  filterByPriority,
  filterByDate,
  filterByCategory,
}) => {
  const [isCategoryListOpen, setIsCategoryListOpen] = useState(false);
  const [isFilterListOpen, setIsFilterListOpen] = useState(false);
  const [category, setCategory] = useState('');
  const [sortValue, setSortValue] = useState('');

  const tablet = useMedia('(min-width: 768px)', { defaultState: true });

  const toggleFilter = value => {
    if (value === 'filter') {
      setIsFilterListOpen(prevstate => !prevstate);
    } else if (value === 'category') {
      setIsCategoryListOpen(prevstate => !prevstate);
    }
  };

  const onFilter = (type, value, query) => {
    if (type === 'name') {
      filterByName(query);
      setSortValue(`${type} ${query}`);
    } else if (type === 'date') {
      filterByDate(query);
      setSortValue(`${type} ${query}`);
    } else if (type === 'priority') {
      filterByPriority(query);
      setSortValue(`${type} ${query}`);
    } else if (type === 'category') {
      filterByCategory(query);
      setCategory(query);
    }
    toggleFilter(value);
  };

  return (
    <Wrap>
      <BtnWrap>
        <FilterBtn
          type="button"
          onClick={() => toggleFilter('category')}
          category={category}
        >
          {tablet && (
            <FilterButtonText category={category}>
              {category ? category : 'Category'}
            </FilterButtonText>
          )}

          <Filter1 />
        </FilterBtn>
        <SortBtn
          type="button"
          onClick={() => toggleFilter('filter')}
          sortValue={sortValue}
        >
          {tablet && <FilterButtonText>Sort by</FilterButtonText>}
          <Filter2 />
        </SortBtn>
        <PlusBtn to="/create">
          <Plus />
          {tablet && <PlusBtnText>Add new event</PlusBtnText>}
        </PlusBtn>
      </BtnWrap>
      {isCategoryListOpen && (
        <CategoryFilter>
          <CategoryTitleWrap onClick={() => toggleFilter('category')}>
            <Filter1 />
            <CategoryTitle>Category</CategoryTitle>
          </CategoryTitleWrap>
          <ul>
            {categories.map(categoryItem => {
              return (
                <CategoryItem
                  key={categoryItem}
                  onClick={() => onFilter('category', 'category', categoryItem)}
                  category={category}
                  categoryValue={categoryItem}
                >
                  {categoryItem}
                </CategoryItem>
              );
            })}
          </ul>
        </CategoryFilter>
      )}
      {isFilterListOpen && (
        <FilterList>
          <FilterTitleWrap onClick={() => toggleFilter('filter')}>
            <CategoryTitle>Sort by</CategoryTitle>
            <Filter2 />
          </FilterTitleWrap>
          <ul>
            <FilterItem
              onClick={() => onFilter('name', 'filter', 'increase')}
              sort={sortValue}
              value={'name increase'}
            >
              <p>by name</p>
              <ArrowUp />
            </FilterItem>
            <FilterItem
              onClick={() => onFilter('name', 'filter', 'decrease')}
              sort={sortValue}
              value={'name decrease'}
            >
              <p>by name</p>
              <ArrowUp />
            </FilterItem>
            <FilterItem
              onClick={() => onFilter('date', 'filter', 'increase')}
              sort={sortValue}
              value={'date increase'}
            >
              <p>by date</p>
              <ArrowUp />
            </FilterItem>
            <FilterItem
              onClick={() => onFilter('date', 'filter', 'decrease')}
              sort={sortValue}
              value={'date decrease'}
            >
              <p>by date</p>
              <ArrowUp />
            </FilterItem>
            <FilterItem
              onClick={() => onFilter('priority', 'filter', 'increase')}
              sort={sortValue}
              value={'priority increase'}
            >
              <p>by priority</p>
              <ArrowUp />
            </FilterItem>
            <FilterItem
              onClick={() => onFilter('priority', 'filter', 'decrease')}
              sort={sortValue}
              value={'priority decrease'}
            >
              <p>by priority</p>
              <ArrowUp />
            </FilterItem>
          </ul>
        </FilterList>
      )}
    </Wrap>
  );
};

BtnsFilters.propTypes = {
  filterByName: PropTypes.func.isRequired,
  filterByPriority: PropTypes.func.isRequired,
  filterByDate: PropTypes.func.isRequired,
  filterByCategory: PropTypes.func.isRequired,
};
