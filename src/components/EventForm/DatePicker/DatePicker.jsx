import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useState, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Select, SelectText } from './DatePicker.styled';
import { ReactComponent as SelectIconDown } from '../../../assets/arrow-select.svg';
import { ReactComponent as SelectIconUp } from '../../../assets/arrow-select1.svg';
import format from 'date-fns/format';

const CustomInput = forwardRef(
  ({ value, onClick, isCalendarOpen, setIsCalendarOpen, dateValue }, ref) => {
    const toggleCalendar = () => {
      onClick();
      setIsCalendarOpen(true);
    };

    return (
      <Select onClick={toggleCalendar} ref={ref}>
        {!value && !dateValue && (
          <SelectText value={value} dateValue={dateValue}>
            Select Date
          </SelectText>
        )}
        {value && (
          <SelectText value={value} dateValue={dateValue}>
            {value}
          </SelectText>
        )}
        {dateValue && !value && (
          <SelectText value={value} dateValue={dateValue}>
            {format(new Date(dateValue), 'dd/MM/yyyy')}
          </SelectText>
        )}

        {isCalendarOpen ? <SelectIconUp /> : <SelectIconDown />}
      </Select>
    );
  }
);

CustomInput.displayName = 'CustomInput';

export const Calendar = ({ setDate, dateValue }) => {
  const [startDate, setStartDate] = useState();
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const toggleCalendar = () => {
    setIsCalendarOpen(prevState => !prevState);
  };

  const onDateChange = date => {
    setStartDate(date);
    setDate(date);
  };

  return (
    <DatePicker
      selected={startDate}
      onChange={date => {
        onDateChange(date);
        setIsCalendarOpen(false);
      }}
      onClick={toggleCalendar}
      customInput={
        <CustomInput
          isCalendarOpen={isCalendarOpen}
          setIsCalendarOpen={setIsCalendarOpen}
          dateValue={dateValue}
        />
      }
    ></DatePicker>
  );
};

CustomInput.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func,
  setDate: PropTypes.func,
  isCalendarOpen: PropTypes.bool.isRequired,
  setIsCalendarOpen: PropTypes.func.isRequired,
  dateValue: PropTypes.string,
};

Calendar.propTypes = {
  setDate: PropTypes.func,
  dateValue: PropTypes.string,
};
