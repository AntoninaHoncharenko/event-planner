import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  List,
  Card,
  ImgThumb,
  Image,
  MarksWrap,
  Category,
  Priority,
  Overlay,
  DetailsWrap,
  InfoWrap,
  Title,
  Text,
  MoreBtn,
} from './EventList.styled';

export const EventList = ({ events }) => {
  return (
    <List>
      {events.map(event => {
        return (
          <Card key={event.id}>
            <ImgThumb>
              <Image src={event.picture} alt="image" />
              <MarksWrap>
                <Category>{event.category}</Category>
                <Priority priority={event.priority}>{event.priority}</Priority>
              </MarksWrap>
              <Overlay>
                <DetailsWrap>
                  <p>
                    <span>{event.date} </span>
                    at
                    <span> {event.time}</span>
                  </p>
                  <p>{event.location}</p>
                </DetailsWrap>
              </Overlay>
            </ImgThumb>
            <InfoWrap>
              <Title>{event.title}</Title>
              <Text>{event.description}</Text>
              <Link to={`/${event.id}`}>
                <MoreBtn>More info</MoreBtn>
              </Link>
            </InfoWrap>
          </Card>
        );
      })}
    </List>
  );
};

EventList.propTypes = {
  events: PropTypes.array.isRequired,
};
