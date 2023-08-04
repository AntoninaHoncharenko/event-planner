import { useState } from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as Filter1 } from '../../assets/filter1.svg';
import { ReactComponent as Filter2 } from '../../assets/filter2.svg';
import { ReactComponent as Plus } from '../../assets/plus.svg';
import { ReactComponent as ArrowUp } from '../../assets/arrow-up.svg';
import {
  Wrap,
  BtnWrap,
  FilterBtn,
  PlusBtn,
  CategoryFilter,
  FilterList,
  CategoryTitleWrap,
  FilterTitleWrap,
  CategoryTitle,
  CategoryItem,
  FilterItem,
} from './Buttons.styled';
import { categories } from '../../data';

export const Buttons = ({
  filterByName,
  filterByPriority,
  filterByDate,
  filterByCategory,
}) => {
  const [isCategoryListOpen, setIsCategoryListOpen] = useState(false);
  const [isFilterListOpen, setIsFilterListOpen] = useState(false);

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
    } else if (type === 'date') {
      filterByDate(query);
    } else if (type === 'priority') {
      filterByPriority(query);
    } else if (type === 'category') {
      filterByCategory(query);
    }
    toggleFilter(value);
  };

  return (
    <Wrap>
      <BtnWrap>
        <FilterBtn type="button" onClick={() => toggleFilter('category')}>
          <Filter1 />
        </FilterBtn>
        <FilterBtn type="button" onClick={() => toggleFilter('filter')}>
          <Filter2 style={{ stroke: '#3F3F3F' }} />
        </FilterBtn>
        <PlusBtn to="/create">
          <Plus />
        </PlusBtn>
      </BtnWrap>
      {isCategoryListOpen && (
        <CategoryFilter>
          <CategoryTitleWrap onClick={() => toggleFilter('category')}>
            <Filter1 />
            <CategoryTitle>Category</CategoryTitle>
          </CategoryTitleWrap>
          <ul>
            {categories.map(category => {
              return (
                <CategoryItem
                  key={category}
                  onClick={() => onFilter('category', 'category', category)}
                >
                  {category}
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
            <Filter2 style={{ stroke: '#7B61FF' }} />
          </FilterTitleWrap>
          <ul>
            <FilterItem onClick={() => onFilter('name', 'filter', 'increase')}>
              <p>by name</p>
              <ArrowUp />
            </FilterItem>
            <FilterItem onClick={() => onFilter('name', 'filter', 'decrease')}>
              <p>by name</p>
              <ArrowUp />
            </FilterItem>
            <FilterItem onClick={() => onFilter('date', 'filter', 'increase')}>
              <p>by date</p>
              <ArrowUp />
            </FilterItem>
            <FilterItem onClick={() => onFilter('date', 'filter', 'decrease')}>
              <p>by date</p>
              <ArrowUp />
            </FilterItem>
            <FilterItem
              onClick={() => onFilter('priority', 'filter', 'increase')}
            >
              <p>by priority</p>
              <ArrowUp />
            </FilterItem>
            <FilterItem
              onClick={() => onFilter('priority', 'filter', 'decrease')}
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

Buttons.propTypes = {
  filterByName: PropTypes.func.isRequired,
  filterByPriority: PropTypes.func.isRequired,
  filterByDate: PropTypes.func.isRequired,
  filterByCategory: PropTypes.func.isRequired,
};
