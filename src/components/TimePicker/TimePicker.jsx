import PropTypes from 'prop-types';
import { Space, TimePicker } from 'antd';
import { useMedia } from 'react-use';
import { useState } from 'react';
import { ReactComponent as SelectIconUp } from '../../assets/arrow-select1.svg';
import { ReactComponent as SelectIconDown } from '../../assets/arrow-select.svg';

export const Time = ({ setTime, time }) => {
  const [isPickerOpen, setIsPickerOpen] = useState(false);

  const mobile = useMedia('(max-width: 767px)', { defaultState: false });
  const tablet = useMedia('(min-width: 768px) and (max-width: 1439px)', {
    defaultState: true,
  });
  const desk = useMedia('(min-width: 1440px)', { defaultState: false });

  const onChange = (time, timeString) => {
    setTime(timeString);
  };

  const onOpenChange = open => {
    setIsPickerOpen(open);
  };

  const getPickerWidth = () => {
    if (desk) return 372;
    if (tablet) return 308;
    if (mobile) return 240;
    return 240;
  };

  return (
    <Space wrap>
      <TimePicker
        use12Hours
        format="h:mm a"
        onChange={onChange}
        onOpenChange={onOpenChange}
        style={{
          width: `${getPickerWidth()}px`,
          height: '56px',
          padding: '16px 12px',
          marginBottom: '20px',
          borderRadius: '8px',
          border: '1px solid #ACA7C3',
          backgroundColor: '#FFFFFF',
          color: time ? '#3F3F3F' : '#7B61FF',
          fontFamily: 'Poppins',
          fontSize: '16px',
          cursor: 'pointer',
        }}
        inputReadOnly
        placeholder={'Select time'}
        allowClear={false}
        popupStyle={{ width: `${getPickerWidth()}px`, height: '160px' }}
        suffixIcon={isPickerOpen ? <SelectIconUp /> : <SelectIconDown />}
      />
    </Space>
  );
};

Time.propTypes = {
  setTime: PropTypes.func,
  time: PropTypes.string,
};
