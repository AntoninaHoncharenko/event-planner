import { useState, useRef, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectOneEvent } from '../../redux/selectors';
import { getOneEvent } from '../../redux/operation';
import { updateEvent } from '../../redux/operation';
import * as yup from 'yup';
import {
  Form,
  FlexWrap,
  Flexitem,
  Label,
  InputWrap,
  DeleteBtn,
  Input,
  TextArea,
  SelectWrap,
  FakeLabel,
  Select,
  SelectText,
  OptionsWrap,
  CategoryOption,
  PriorityOption,
  InputFIle,
  FileWrap,
  Wrap,
  FileText,
  Button,
  Error,
} from './Edit.styled';
import { ReactComponent as SelectIconUp } from '../../assets/arrow-select.svg';
import { ReactComponent as SelectIconDown } from '../../assets/arrow-select1.svg';
import { ReactComponent as DeleteIcon } from '../../assets/close-input.svg';
import { categories, priorities } from '../../helpers/data';
import { Calendar } from '../EventForm/DatePicker/DatePicker';
import { Time } from '../EventForm/TimePicker/TimePicker';
import { nanoid } from 'nanoid';
import { storage } from '../../helpers/firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

export const Edit = () => {
  const { eventId } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOneEvent(eventId));
  }, [dispatch, eventId]);

  const event = useSelector(selectOneEvent);

  useEffect(() => {
    setTitle(event.title);
    setDescription(event.description);
    setLocation(event.location);
    setPicture(event.picture);
    setCategory(event.category);
    setPriority(event.priority);
    setDate(event.date);
    setTime(event.time);
  }, [event]);

  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [location, setLocation] = useState();
  const [picture, setPicture] = useState();
  const [category, setCategory] = useState();
  const [priority, setPriority] = useState();
  const [date, setDate] = useState();
  const [time, setTime] = useState();

  const fileInputRef = useRef(null);

  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [isPrioritiesOpen, setIsPrioritiesOpen] = useState(false);

  const clearInput = name => {
    if (name === 'title') {
      setTitle('');
      updateErrors('title');
    } else if (name === 'description') {
      setDescription('');
    } else if (name === 'location') {
      setLocation('');
      updateErrors('location');
    } else if (name === 'picture') {
      fileInputRef.current.value = '';
      setPicture(null);
    }
  };

  const handleInputChange = (name, value) => {
    if (name === 'title') {
      setTitle(value);
    } else if (name === 'description') {
      setDescription(value);
    } else if (name === 'location') {
      setLocation(value);
    }
  };

  const toggleOptions = value => {
    if (value === 'category') {
      setIsCategoriesOpen(prevState => !prevState);
    } else {
      setIsPrioritiesOpen(prevState => !prevState);
    }
  };

  const changeOptions = value => {
    toggleOptions(value);
  };

  const setCategoryValue = (category, value) => {
    setCategory(category);
    toggleOptions(value);
  };

  const setPriorityValue = (priority, value) => {
    setPriority(priority);
    toggleOptions(value);
  };

  const setPictureValue = event => {
    const image = event.target.files[0];
    const imageRef = ref(storage, `images/${image.name + nanoid()}`);
    uploadBytes(imageRef, image).then(snapshot => {
      getDownloadURL(snapshot.ref).then(url => {
        setPicture(url);
      });
    });
  };

  // validation
  const [errors, setErrors] = useState({});
  const updateErrors = value => {
    setErrors(prevState => ({ ...prevState, [value]: '' }));
  };

  const initialValues = {
    title,
    location,
  };

  const schema = yup.object().shape({
    title: yup.string().matches(/^[a-zA-Z\s]+$/),
    location: yup.string().matches(/^[a-zA-Z\s]+$/),
  });

  // get data and submit
  const data = {
    title,
    description,
    location,
    date,
    time,
    category: category === 'Select category' ? '' : category,
    priority: priority === 'Select priority' ? '' : priority,
    picture,
  };

  const navigate = useNavigate();

  const onFormSubmit = e => {
    e.preventDefault();

    schema
      .validate(initialValues, { abortEarly: false })
      .then(() => {
        dispatch(updateEvent({ id: eventId, event: data }))
          .unwrap()
          .then(responseData => {
            const eventId = responseData.id;
            navigate(`/${eventId}`, { replace: true });
          })
          .catch(error => {
            console.log(error);
          });
      })
      .catch(err => {
        const errors = err.inner.reduce(
          (acc, curr) => ({ ...acc, [curr.path]: curr.message }),
          {}
        );
        setErrors(errors);
        console.log(errors);
      });
  };

  return (
    <Form onSubmit={onFormSubmit}>
      <FlexWrap>
        <Flexitem>
          <Label htmlFor="title">Title</Label>
          <InputWrap>
            <Input
              id="title"
              type="text"
              value={title}
              onChange={e => handleInputChange('title', e.currentTarget.value)}
              errorValue={errors.title}
            />
            <DeleteBtn
              type="button"
              onClick={() => clearInput('title')}
              errorValue={errors.title}
            >
              <DeleteIcon />
            </DeleteBtn>
          </InputWrap>
          {errors.title && <Error>Invalid input</Error>}
        </Flexitem>

        <Flexitem>
          <Label htmlFor="descr">Description</Label>
          <InputWrap>
            <TextArea
              id="descr"
              value={description}
              onChange={e =>
                handleInputChange('description', e.currentTarget.value)
              }
            />
            <DeleteBtn type="button" onClick={() => clearInput('description')}>
              <DeleteIcon />
            </DeleteBtn>
          </InputWrap>
        </Flexitem>

        <Flexitem>
          <Label htmlFor="date">Select date</Label>
          <Calendar setDate={setDate} dateValue={event.date} />
        </Flexitem>

        <Flexitem>
          <Label htmlFor="time">Select time</Label>
          <Time setTime={setTime} time={time} />
        </Flexitem>

        <Flexitem>
          <Label htmlFor="location">Location</Label>
          <InputWrap>
            <Input
              id="location"
              type="text"
              value={location}
              onChange={e =>
                handleInputChange('location', e.currentTarget.value)
              }
              errorValue={errors.location}
            />
            <DeleteBtn
              type="button"
              onClick={() => clearInput('location')}
              errorValue={errors.location}
            >
              <DeleteIcon />
            </DeleteBtn>
          </InputWrap>
          {errors.location && <Error>Invalid input</Error>}
        </Flexitem>

        <Flexitem>
          <FakeLabel>Category</FakeLabel>
          <SelectWrap>
            <Select
              onClick={() => changeOptions('category')}
              isCategoriesOpen={isCategoriesOpen}
            >
              <SelectText category={category}>{category}</SelectText>
              {isCategoriesOpen ? <SelectIconDown /> : <SelectIconUp />}
            </Select>
            {isCategoriesOpen && (
              <OptionsWrap>
                {categories.map(categoryItem => {
                  return (
                    <CategoryOption
                      key={categoryItem}
                      onClick={() => setCategoryValue(categoryItem, 'category')}
                      category={category}
                      value={categoryItem}
                    >
                      {categoryItem}
                    </CategoryOption>
                  );
                })}
              </OptionsWrap>
            )}
          </SelectWrap>
        </Flexitem>

        <Flexitem>
          <Label htmlFor="picture">
            Add picture
            <FileWrap>
              <InputFIle
                id="picture"
                type="file"
                accept=".jpg, .jpeg, .png"
                onChange={setPictureValue}
                ref={fileInputRef}
              />
              <Wrap>
                {picture && <FileText>Picture added</FileText>}
                <DeleteBtn type="button" onClick={() => clearInput('picture')}>
                  <DeleteIcon />
                </DeleteBtn>
              </Wrap>
            </FileWrap>
          </Label>
        </Flexitem>

        <Flexitem>
          <FakeLabel>Priority</FakeLabel>
          <SelectWrap>
            <Select
              onClick={() => changeOptions('priority')}
              isPrioritiesOpen={isPrioritiesOpen}
            >
              <SelectText priority={priority}>{priority}</SelectText>
              {isPrioritiesOpen ? <SelectIconDown /> : <SelectIconUp />}
            </Select>
            {isPrioritiesOpen && (
              <OptionsWrap>
                {priorities.map(priorityItem => {
                  return (
                    <PriorityOption
                      key={priorityItem}
                      onClick={() => setPriorityValue(priorityItem, 'priority')}
                      priority={priority}
                      value={priorityItem}
                    >
                      {priorityItem}
                    </PriorityOption>
                  );
                })}
              </OptionsWrap>
            )}
          </SelectWrap>
        </Flexitem>
      </FlexWrap>

      <Button type="submit">Save</Button>
    </Form>
  );
};
