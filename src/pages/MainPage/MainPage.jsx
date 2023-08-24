import { useState, useEffect } from 'react';
import { useMedia } from 'react-use';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectAllEvents,
  selectEvents,
  selectFilter,
  selectLoading,
} from '../../redux/selectors';
import { getAllEvents, getLimitedEvents } from '../../redux/operation';
import { Main, Section, Wrap, Title } from './MainPage.styled';
import { MainContainer } from '../../components/Container/Container';
import { EventList } from '../../components/EventList/EventList';
import { BtnsFilters } from '../../components/BtnsFilters/BtnsFilters';
import { PageTitle } from '../../components/Title/Title';
import { Pagination } from '../../components/Pagination/Pagination';
import { Loader } from '../../components/Loader/Loader';

const MainPage = () => {
  const [events, setEvents] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const mob = useMedia('(max-width: 767px)', { defaultState: false });
  const tablet = useMedia('(min-width: 768px) and (max-width: 1439px)', {
    defaultState: false,
  });
  const desk = useMedia('(min-width: 1440px)', { defaultState: true });

  const dispatch = useDispatch();
  const allEvents = useSelector(selectAllEvents);
  const limitedEvents = useSelector(selectEvents);
  const filter = useSelector(selectFilter);
  const isLoading = useSelector(selectLoading);

  const scroll = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    dispatch(getAllEvents());

    if (mob) {
      dispatch(getLimitedEvents({ page, limit: 4 }));
      scroll();
    } else if (tablet) {
      dispatch(getLimitedEvents({ page, limit: 6 }));
      scroll();
    } else if (desk) {
      dispatch(getLimitedEvents({ page, limit: 8 }));
      scroll();
    }
  }, [dispatch, mob, tablet, desk, page]);

  useEffect(() => {
    setEvents(limitedEvents);
  }, [limitedEvents]);

  useEffect(() => {
    if (mob) {
      setTotalPages(Math.ceil(allEvents.length / 4));
    } else if (tablet) {
      setTotalPages(Math.ceil(allEvents.length / 6));
    } else if (desk) {
      setTotalPages(Math.ceil(allEvents.length / 8));
    }
  }, [allEvents, mob, tablet, desk]);

  useEffect(() => {
    const filtered = limitedEvents.filter(event =>
      event.title.toLowerCase().includes(filter.toLowerCase())
    );

    setEvents(filtered);
  }, [limitedEvents, filter]);

  const filterByName = value => {
    const sortedEvents = [...events];

    if (value === 'increase') {
      sortedEvents.sort((a, b) => a.title.localeCompare(b.title));
    } else if (value === 'decrease') {
      sortedEvents.sort((a, b) => b.title.localeCompare(a.title));
    }

    setEvents(sortedEvents);
  };

  const filterByDate = value => {
    const sortedEvents = [...events];

    if (value === 'increase') {
      sortedEvents.sort((a, b) => new Date(a.date) - new Date(b.date));
    } else if (value === 'decrease') {
      sortedEvents.sort((a, b) => new Date(b.date) - new Date(a.date));
    }

    setEvents(sortedEvents);
  };

  const filterByPriority = value => {
    const priorityOrder = ['High', 'Medium', 'Low'];
    const sortedEvents = [...events];

    if (value === 'increase') {
      sortedEvents.sort(
        (a, b) =>
          priorityOrder.indexOf(b.priority) - priorityOrder.indexOf(a.priority)
      );
    } else if (value === 'decrease') {
      sortedEvents.sort(
        (a, b) =>
          priorityOrder.indexOf(a.priority) - priorityOrder.indexOf(b.priority)
      );
    }

    setEvents(sortedEvents);
  };

  const filterByCategory = value => {
    const filteredEvents = allEvents.filter(event => event.category === value);
    setEvents(filteredEvents);
  };

  const toNextPage = () => {
    setPage(prevState => prevState + 1);
  };

  const toPrevPage = () => {
    setPage(prevState => prevState - 1);
  };

  return (
    <Main>
      <Section>
        <MainContainer>
          <Wrap>
            {desk && <Title>My events</Title>}
            <BtnsFilters
              filterByName={filterByName}
              filterByPriority={filterByPriority}
              filterByDate={filterByDate}
              filterByCategory={filterByCategory}
            />
          </Wrap>
          {tablet && <PageTitle>My events</PageTitle>}
          <EventList events={events} />
          {events.length > 0 && (
            <Pagination
              page={page}
              toNextPage={toNextPage}
              toPrevPage={toPrevPage}
              totalPages={totalPages}
            />
          )}
        </MainContainer>
      </Section>
      {isLoading && <Loader />}
    </Main>
  );
};

export default MainPage;
