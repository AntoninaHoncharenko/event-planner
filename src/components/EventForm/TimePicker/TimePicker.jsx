import { Space, TimePicker } from 'antd';
import PropTypes from 'prop-types';
import { useMedia } from 'react-use';

export const Time = ({ setTime }) => {
  const mobile = useMedia('(max-width: 767px)', { defaultState: false });
  const tablet = useMedia('(min-width: 768px) and (max-width: 1439px)', {
    defaultState: true,
  });
  const desk = useMedia('(min-width: 1440px)', { defaultState: false });

  const onChange = (time, timeString) => {
    setTime(timeString);
    console.log(time);
    console.log(timeString);
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
        style={{
          width: `${getPickerWidth()}px`,
          height: '56px',
          padding: '16px 12px',
          marginBottom: '20px',
          borderRadius: '8px',
          border: '1px solid #ACA7C3',
          backgroundColor: '#FFFFFF',
          color: '#7B61FF',
          fontFamily: 'Poppins',
          fontSize: '16px',
        }}
        placeholder="Select Time"
        allowClear="false"
        popupStyle={{ width: `${getPickerWidth()}px`, height: '160px' }}
      />
    </Space>
  );
};

Time.propTypes = {
  setTime: PropTypes.func,
};
