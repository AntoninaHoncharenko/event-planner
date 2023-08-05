import { useState, useRef } from 'react';
import { nanoid } from 'nanoid';
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
  Option,
  InputFIle,
  FileWrap,
  Wrap,
  FileText,
  Button,
} from './EventForm.styled';
import { ReactComponent as SelectIconUp } from '../../assets/arrow-select.svg';
import { ReactComponent as SelectIconDown } from '../../assets/arrow-select1.svg';
import { ReactComponent as DeleteIcon } from '../../assets/close-input.svg';
import { categories, priorities } from '../../data';
import { Calendar } from './DatePicker/DatePicker';
import { Time } from './TimePicker/TimePicker';

export const EventForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [picture, setPicture] = useState(null);
  const [category, setCategory] = useState('Select category');
  const [priority, setPriority] = useState('Select priority');
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);

  const fileInputRef = useRef(null);

  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [isPrioritiesOpen, setIsPrioritiesOpen] = useState(false);

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
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.addEventListener('load', event => {
      const buffer = event.target.result;
      const blob = new Blob([buffer], { type: file.type });
      const url = URL.createObjectURL(blob);
      setPicture(url);
    });
    reader.readAsArrayBuffer(file);
  };

  const formData = new FormData();

  formData.append('title', title);
  formData.append('description', description);
  formData.append('picture', picture);
  formData.append('location', location);
  formData.append('date', date);
  formData.append('time', time);
  formData.append('category', category);
  formData.append('priority', priority);
  formData.append('id', nanoid());

  const onFormSubmit = e => {
    e.preventDefault();
    for (const [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }
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
            />
            <DeleteBtn type="button" onClick={() => clearInput('title')}>
              <DeleteIcon />
            </DeleteBtn>
          </InputWrap>
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
          <Calendar setDate={setDate} />
        </Flexitem>

        <Flexitem>
          <Label htmlFor="time">Select time</Label>
          <Time setTime={setTime} />
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
                {categories.map(category => {
                  return (
                    <Option
                      key={category}
                      onClick={() => setCategoryValue(category, 'category')}
                    >
                      {category}
                    </Option>
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
          {/* {picture && <img src={picture} alt="picture" />} */}
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
                {priorities.map(priority => {
                  return (
                    <Option
                      key={priority}
                      onClick={() => setPriorityValue(priority, 'priority')}
                    >
                      {priority}
                    </Option>
                  );
                })}
              </OptionsWrap>
            )}
          </SelectWrap>
        </Flexitem>
      </FlexWrap>

      <Button type="submit">Add event</Button>
    </Form>
  );
};
