import { format } from 'date-fns';
import { useMedia } from 'react-use';
import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectOneEvent, selectLoading } from '../../redux/selectors';
import { getOneEvent, deleteEvent } from '../../redux/operation';

import { PageTitle } from '../../components/Title/Title';
import { Loader } from '../Loader/Loader';
import DefaultImgS from '../../assets/default-small.png';
import DefaultImgL from '../../assets/default-big.png';

import {
  Title,
  Card,
  Image,
  InfoWrap,
  Text,
  MarksWrap,
  Mark,
  EventDate,
  BtnWrap,
  EditBtn,
  DeleteBtn,
} from './EventCard.styled';

export const EventCard = () => {
  const { eventId } = useParams();

  const mobile = useMedia('(max-width: 767px)', { defaultState: true });
  const tablet = useMedia('(min-width: 768px)', { defaultState: true });
  const desk = useMedia('(min-width: 1440px)', { defaultState: false });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOneEvent(eventId));
  }, [dispatch, eventId]);

  const event = useSelector(selectOneEvent);
  const isLoading = useSelector(selectLoading);

  const navigate = useNavigate();

  const handleDelete = () => {
    dispatch(deleteEvent(eventId));
    navigate('/', { replace: true });
  };

  return (
    <>
      {isLoading && <Loader />}
      {!desk && <PageTitle>{event.title}</PageTitle>}
      {desk && <Title>{event.title}</Title>}
      <Card>
        {mobile && <Image src={event.picture || DefaultImgS} alt="image" />}
        {tablet && <Image src={event.picture || DefaultImgL} alt="image" />}
        <InfoWrap>
          <Text>{event.description}</Text>
          <MarksWrap>
            {event.category && <Mark>{event.category}</Mark>}
            {event.priority && (
              <Mark priority={event.priority}>{event.priority}</Mark>
            )}
            <Mark>{event.location}</Mark>
            {tablet && (event.date || event.time) && (
              <EventDate>
                {event.date && (
                  <span>{format(new Date(event.date), 'd.MM')} </span>
                )}
                at
                <span> {event.time} </span>
              </EventDate>
            )}
          </MarksWrap>
          {!tablet && (event.date || event.time) && (
            <EventDate>
              {event.date && (
                <span>{format(new Date(event.date), 'd.MM')} </span>
              )}
              at
              <span> {event.time} </span>
            </EventDate>
          )}
          <BtnWrap>
            <EditBtn to={`/${eventId}/edit`}>Edit</EditBtn>
            <DeleteBtn type="button" onClick={handleDelete}>
              Delete event
            </DeleteBtn>
          </BtnWrap>
        </InfoWrap>
      </Card>
    </>
  );
};
