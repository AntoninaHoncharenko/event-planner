import { useState, useRef } from 'react';
import {
  Form,
  Label,
  InpurWrap,
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
  InputFIleWrap,
  Wrap,
  FileText,
  Button,
} from './EventForm.styled';
import { ReactComponent as SelectIconUp } from '../../assets/arrow-select.svg';
import { ReactComponent as SelectIconDown } from '../../assets/arrow-select1.svg';
import { ReactComponent as DeleteIcon } from '../../assets/close-input.svg';
import { categories, priorities } from './data';

export const EventForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [file, setFile] = useState(null);
  const [category, setCategory] = useState('Select');
  const [priority, setPriority] = useState('Select');

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
    } else if (name === 'file') {
      fileInputRef.current.value = '';
      setFile(null);
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

  const toggleOptionsValue = value => {
    if (value === 'category') {
      category !== 'Select category'
        ? setCategory('Select category')
        : setCategory('Select');
    } else {
      priority !== 'Select priority'
        ? setPriority('Select priority')
        : setPriority('Select');
    }
  };

  const changeOptions = value => {
    toggleOptions(value);
    toggleOptionsValue(value);
  };

  const setCategoryValue = (category, value) => {
    setCategory(category);
    toggleOptions(value);
  };

  const setPriorityValue = (priority, value) => {
    setPriority(priority);
    toggleOptions(value);
  };

  const setFileValue = event => {
    const file = event.target.files[0];
    if (file) {
      setFile(file);
    }
  };

  return (
    <Form>
      <Label htmlFor="title">Title</Label>
      <InpurWrap>
        <Input
          id="title"
          type="text"
          value={title}
          onChange={e => handleInputChange('title', e.currentTarget.value)}
        />
        <DeleteBtn type="button" onClick={() => clearInput('title')}>
          <DeleteIcon />
        </DeleteBtn>
      </InpurWrap>
      <Label htmlFor="descr">Description</Label>
      <InpurWrap>
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
      </InpurWrap>
      <Label htmlFor="date">Select date</Label>
      <Label htmlFor="time">Select time</Label>
      <Label htmlFor="location">Location</Label>
      <InpurWrap>
        <Input
          id="location"
          type="text"
          value={location}
          onChange={e => handleInputChange('location', e.currentTarget.value)}
        />
        <DeleteBtn type="button" onClick={() => clearInput('location')}>
          <DeleteIcon />
        </DeleteBtn>
      </InpurWrap>

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

      <Label htmlFor="picture">
        Add picture
        <InputFIleWrap>
          <InputFIle
            id="picture"
            type="file"
            accept=".jpg, .jpeg, .png"
            onChange={setFileValue}
            ref={fileInputRef}
          />
          <Wrap>
            {file && <FileText>File added</FileText>}
            <DeleteBtn type="button" onClick={() => clearInput('file')}>
              <DeleteIcon />
            </DeleteBtn>
          </Wrap>
        </InputFIleWrap>
      </Label>

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

      <Button type="submit">Add event</Button>
    </Form>
  );
};
