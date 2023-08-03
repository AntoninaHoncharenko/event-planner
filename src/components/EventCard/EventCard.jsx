import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectOneEvent } from '../../redux/selectors';
import { getOneEvent, deleteEvent } from '../../redux/operation';
import { PageTitle } from '../../components/Title/Title';
import {
  Card,
  Image,
  InfoWrap,
  Text,
  MarksWrap,
  Mark,
  Date,
  BtnWrap,
  EditBtn,
  DeleteBtn,
} from './EventCard.styled';

export const EventCard = () => {
  const { eventId } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOneEvent(eventId));
  }, [dispatch, eventId]);

  const event = useSelector(selectOneEvent);

  const navigate = useNavigate();

  const handleDelete = () => {
    dispatch(deleteEvent(eventId));
    navigate('/', { replace: true });
  };

  return (
    <>
      <PageTitle>{event.title}</PageTitle>
      <Card>
        <Image src={event.picture} alt="image" />
        <InfoWrap>
          <Text>{event.description}</Text>
          <MarksWrap>
            <Mark>{event.category}</Mark>
            <Mark priority={event.priority}>{event.priority}</Mark>
            <Mark>{event.location}</Mark>
          </MarksWrap>
          <Date>
            <span>{event.date} </span>
            at
            <span> {event.time}</span>
          </Date>
          <BtnWrap>
            <EditBtn>Edit</EditBtn>
            <DeleteBtn onClick={handleDelete}>Delete event</DeleteBtn>
          </BtnWrap>
        </InfoWrap>
      </Card>
    </>
  );
};
