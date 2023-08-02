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
  return (
    <Card>
      <Image src="/src/assets/img.jpg" alt="image" />
      <InfoWrap>
        <Text>
          Discover an enchanting evening celebrating the world of art at our
          exclusive gallery opening.
        </Text>
        <MarksWrap>
          <Mark>Art</Mark>
          <Mark>High</Mark>
          <Mark>Kyiv</Mark>
        </MarksWrap>
        <Date>
          <span>12.07 </span>
          at
          <span> 12:00 am</span>
        </Date>
        <BtnWrap>
          <EditBtn>Edit</EditBtn>
          <DeleteBtn>Delete event</DeleteBtn>
        </BtnWrap>
      </InfoWrap>
    </Card>
  );
};
