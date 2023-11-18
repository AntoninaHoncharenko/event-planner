import { useMedia } from 'react-use';
import PropTypes from 'prop-types';
import { addMonths, isBefore, startOfDay } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { useState } from 'react';
import { BtnWrap, CancelBtn, ChooseBtn } from './DatePicker.styled';

export const Calendar = ({ setDate, date, toggleCalendar }) => {
  const today = new Date();
  const nextMonth = addMonths(new Date(), 1);
  const [month, setMonth] = useState(today || nextMonth);
  const [dateValue, setDateValue] = useState();

  const isDisabled = date => isBefore(startOfDay(date), startOfDay(today));

  const mob = useMedia('(max-width: 767px)', { defaultState: true });
  const tablet = useMedia('(min-width: 768px) and (max-width: 1439px)', {
    defaultState: false,
  });

  const css = `
  .rdp{
    --rdp-cell-size: 32px;
    --rdp-caption-font-size: 14px;
    --rdp-accent-color: rgba(123, 97, 255, 0.5);
    --rdp-background-color: rgba(123, 97, 255, 0.5);
    --rdp-accent-color-dark: rgba(123, 97, 255, 0.5);
    --rdp-background-color-dark: rgba(123, 97, 255, 0.5);
    --rdp-outline: none;
    --rdp-outline-selected: none;
    background-color: #ffffff;
    width: ${mob ? '240px' : tablet ? '308px' : '372px'};
    padding: 20px;
    padding-left: ${mob ? '20px' : tablet ? '54px' : '86px'};
    padding-right: ${mob ? '20px' : tablet ? '54px' : '86px'};
    margin: 8px 0 0 0;
    border-radius: 11px;
    box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.07);
  }
`;

  let footer = (
    <BtnWrap>
      <CancelBtn
        type="button"
        onClick={() => {
          setMonth(today);
          setDate('Select date');
          setDateValue(null);
          toggleCalendar();
        }}
      >
        Cancel
      </CancelBtn>
      <ChooseBtn
        type="button"
        onClick={() => {
          setDate(dateValue);
          toggleCalendar();
        }}
        disabled={dateValue ? false : true}
      >
        Choose date
      </ChooseBtn>
    </BtnWrap>
  );
  return (
    <>
      <style>{css}</style>
      <DayPicker
        mode="single"
        selected={dateValue || date}
        onSelect={setDateValue}
        footer={footer}
        month={month}
        onMonthChange={setMonth}
        defaultMonth={today}
        fromMonth={today}
        toYear={2024}
        disabled={isDisabled}
        modifiersClassNames={{
          rdp: 'rdp',
        }}
        styles={{
          caption: {
            width: '200px',
            height: '20px',
            marginBottom: '16px',
          },
          caption_label: {
            color: '#3F3F3F',
            fontSize: '14px',
            fontWeight: '500',
            lineHeight: '1.42',
          },
          nav_button_next: {
            width: '25px',
            height: '25px',
          },
          nav_button_previous: {
            width: '25px',
            height: '25px',
          },
          nav_icon: {
            width: '25px',
            height: '25px',
          },
          table: {
            width: '200px',
            margin: '0 auto',
          },
          head: {
            color: '#3F3F3F',
            fontSize: '14px',
          },
          tbody: {
            width: `${mob ? '200px' : tablet ? '268px' : '332px'}!important`,
          },
          tfoot: {
            margin: '0',
            height: '32px',
          },
          cell: {
            width: '28.5px',
            height: '34px',
          },
          day: {
            width: '28.5px',
            height: '34px',
            fontSize: '12px',
            color: '#3F3F3F',
            borderRadius: '0',
          },
          selected: {
            color: '#ffffff',
            backgroundColor: '#7B61FF',
          },
          day_today: {
            color: '#7B61FF',
          },
        }}
      />
    </>
  );
};

Calendar.propTypes = {
  setDate: PropTypes.func,
  date: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
  toggleCalendar: PropTypes.func,
};
