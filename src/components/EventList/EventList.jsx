import { Link } from 'react-router-dom';
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

export const EventList = () => {
  return (
    <List>
      <Card>
        <ImgThumb>
          <Image src="/src/assets/img.jpg" alt="image" />
          <MarksWrap>
            <Category>Art</Category>
            <Priority>High</Priority>
          </MarksWrap>
          <Overlay>
            <DetailsWrap>
              <p>
                <span>12.07 </span>
                at
                <span> 12:00</span>
              </p>
              <p>Kyiv</p>
            </DetailsWrap>
          </Overlay>
        </ImgThumb>
        <InfoWrap>
          <Title>Galery Opening</Title>
          <Text>
            Discover an enchanting evening celebrating the world of art at our
            exclusive gallery opening.
          </Text>
          <Link to="/1">
            <MoreBtn>More info</MoreBtn>
          </Link>
        </InfoWrap>
      </Card>
    </List>
  );
};
