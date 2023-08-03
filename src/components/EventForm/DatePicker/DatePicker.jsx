import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useState, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Select, SelectText } from './DatePicker.styled';
import { ReactComponent as SelectIconUp } from '../../../assets/arrow-select.svg';
import { ReactComponent as SelectIconDown } from '../../../assets/arrow-select1.svg';

const CustomInput = forwardRef(({ value, onClick }, ref) => {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const toggleCalendar = () => {
    onClick();
    setIsCalendarOpen(prevstate => !prevstate);
  };

  return (
    <Select onClick={toggleCalendar} ref={ref}>
      {value ? value : <SelectText>Select Date</SelectText>}
      {isCalendarOpen ? <SelectIconDown /> : <SelectIconUp />}
    </Select>
  );
});

CustomInput.displayName = 'CustomInput';

export const Calendar = ({ setDate }) => {
  const [startDate, setStartDate] = useState(null);

  const onDateChange = date => {
    setStartDate(date);
    setDate(date);
  };

  return (
    <DatePicker
      selected={startDate}
      onChange={date => onDateChange(date)}
      customInput={<CustomInput />}
    >
      <div style={{ color: 'red' }}></div>
    </DatePicker>
  );
};

CustomInput.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func,
  setDate: PropTypes.func,
};

Calendar.propTypes = {
  setDate: PropTypes.func,
};
