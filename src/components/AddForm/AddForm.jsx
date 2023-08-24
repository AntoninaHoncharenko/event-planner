import { nanoid } from 'nanoid';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import toast from 'react-hot-toast';
import format from 'date-fns/format';

import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectLoading } from '../../redux/selectors';
import { addEvent } from '../../redux/operation';

import { Calendar } from '../DatePicker/DatePicker';
import { Time } from '../TimePicker/TimePicker';
import { ReactComponent as SelectIconUp } from '../../assets/arrow-select.svg';
import { ReactComponent as SelectIconDown } from '../../assets/arrow-select1.svg';
import { ReactComponent as DeleteIcon } from '../../assets/close-input.svg';
import { Loader } from '../Loader/Loader';

import { categories, priorities } from '../../helpers/data';
import { schema } from '../../helpers/schema';
import { storage } from '../../helpers/firebase';

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
  CalendarWrap,
  Error,
} from './AddForm.styled';

export const AddForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [picture, setPicture] = useState('');
  const [category, setCategory] = useState('Select category');
  const [priority, setPriority] = useState('Select priority');
  const [date, setDate] = useState('Select date');
  const [time, setTime] = useState(null);

  const fileInputRef = useRef(null);

  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [isPrioritiesOpen, setIsPrioritiesOpen] = useState(false);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const isLoading = useSelector(selectLoading);

  const clearInput = name => {
    if (name === 'title') {
      setTitle('');
    } else if (name === 'description') {
      setDescription('');
    } else if (name === 'location') {
      setLocation('');
    } else if (name === 'picture') {
      fileInputRef.current.value = '';
      setPicture(null);
    }
  };

  const handleInputChange = (name, value) => {
    if (name === 'title') {
      setTitle(value);
      updateErrors('title');
    } else if (name === 'description') {
      setDescription(value);
      updateErrors('description');
    } else if (name === 'location') {
      setLocation(value);
      updateErrors('location');
    }
  };

  const toggleOptions = value => {
    if (value === 'category') {
      setIsCategoriesOpen(prevState => !prevState);
    } else if (value === 'priority') {
      setIsPrioritiesOpen(prevState => !prevState);
    }
  };

  const toggleCalendar = () => {
    setIsCalendarOpen(prevState => !prevState);
    updateErrors('date');
  };

  // const changeOptions = value => {
  //   toggleOptions(value);
  // };

  const setCategoryValue = (category, value) => {
    setCategory(category);
    toggleOptions(value);
    updateErrors('category');
  };

  const setPriorityValue = (priority, value) => {
    setPriority(priority);
    toggleOptions(value);
    updateErrors('priority');
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
    description,
    category,
    priority,
    location,
    date,
    time,
  };

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

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onFormSubmit = e => {
    e.preventDefault();

    schema
      .validate(initialValues, { abortEarly: false })
      .then(() => {
        dispatch(addEvent(data))
          .unwrap()
          .then(responseData => {
            const eventId = responseData.id;
            navigate(`/${eventId}`, { replace: true });
            toast.success('Event is successfully added');
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
      });
  };

  return (
    <>
      <Form onSubmit={onFormSubmit}>
        <FlexWrap>
          <Flexitem>
            <Label htmlFor="title">Title</Label>
            <InputWrap>
              <Input
                id="title"
                type="text"
                value={title}
                onChange={e =>
                  handleInputChange('title', e.currentTarget.value)
                }
              />
              <DeleteBtn type="button" onClick={() => clearInput('title')}>
                <DeleteIcon />
              </DeleteBtn>
            </InputWrap>
            {errors.title && <Error>Write title</Error>}
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
              <DeleteBtn
                type="button"
                onClick={() => clearInput('description')}
              >
                <DeleteIcon />
              </DeleteBtn>
            </InputWrap>
            {errors.description && <Error>Write description</Error>}
          </Flexitem>

          <Flexitem>
            <FakeLabel>Select date</FakeLabel>
            <SelectWrap>
              <Select onClick={toggleCalendar} isCalendarOpen={isCalendarOpen}>
                <SelectText date={date}>
                  {date === 'Select date'
                    ? date
                    : format(new Date(date), 'dd/MM/yyyy')}
                </SelectText>
                {isCalendarOpen ? <SelectIconDown /> : <SelectIconUp />}
              </Select>
            </SelectWrap>
            {isCalendarOpen && (
              <CalendarWrap>
                <Calendar
                  setDate={setDate}
                  date={date}
                  toggleCalendar={toggleCalendar}
                />
              </CalendarWrap>
            )}

            {errors.date && <Error>Select date</Error>}
          </Flexitem>

          <Flexitem>
            <Label htmlFor="time">Select time</Label>
            <Time setTime={setTime} updateErrors={updateErrors} />
            {errors.time && <Error>Select time</Error>}
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
              />
              <DeleteBtn type="button" onClick={() => clearInput('location')}>
                <DeleteIcon />
              </DeleteBtn>
            </InputWrap>
            {errors.location && <Error>Write location</Error>}
          </Flexitem>

          <Flexitem>
            <FakeLabel>Category</FakeLabel>
            <SelectWrap>
              <Select
                onClick={() => toggleOptions('category')}
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
                        onClick={() =>
                          setCategoryValue(categoryItem, 'category')
                        }
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
            {errors.category && <Error>Select category</Error>}
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
                  <DeleteBtn
                    type="button"
                    onClick={() => clearInput('picture')}
                  >
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
                onClick={() => toggleOptions('priority')}
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
                        onClick={() =>
                          setPriorityValue(priorityItem, 'priority')
                        }
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
            {errors.priority && <Error>Select priority</Error>}
          </Flexitem>
        </FlexWrap>

        <Button type="submit">Add event</Button>
      </Form>
      {isLoading && <Loader />}
    </>
  );
};
