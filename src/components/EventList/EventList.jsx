import PropTypes from 'prop-types';
import { format } from 'date-fns';
import DefaultImg from '../../assets/default-small.png';
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
              <Image
                src={event.picture || DefaultImg}
                alt="image"
                loading="lazy"
              />
              <MarksWrap>
                {event.category && <Category>{event.category}</Category>}
                {event.priority && (
                  <Priority priority={event.priority}>
                    {event.priority}
                  </Priority>
                )}
              </MarksWrap>
              <Overlay>
                <DetailsWrap>
                  <p>
                    {event.date && (
                      <span>{format(new Date(event.date), 'd.MM')} </span>
                    )}

                    {event.time && (
                      <>
                        <span>at</span>
                        <span> {event.time && event.time.slice(0, -3)}</span>
                      </>
                    )}
                  </p>
                  <p>{event.location}</p>
                </DetailsWrap>
              </Overlay>
            </ImgThumb>
            <InfoWrap>
              <Title>{event.title}</Title>
              {/* <Text>{event.description}</Text> */}
              <Text
                line={4}
                element="p"
                truncateText="…"
                text={event.description}
              />
              <MoreBtn to={`/${event.id}`}>More info</MoreBtn>
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
